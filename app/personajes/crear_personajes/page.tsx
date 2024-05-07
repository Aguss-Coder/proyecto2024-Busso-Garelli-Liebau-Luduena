'use client'

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import data from '@/data/mapa.json';

type Pais = {
  name: string;
  capital: string;
  description: string;
}

function handleSubmit(e:FormData) {
  const name = e.get("name")
  const age = Number(e.get("age"))
  const height = Number(e.get("height"))
  const nationality = e.get("nationality")
  const level = Number(e.get("level"))
  const coins = Number(e.get("coins"))

  const character = {
    name,
    age,
    height,
    nationality,
    level,
    coins
  };

  const storedCharacters = localStorage.getItem("characters")

  if (!storedCharacters) {
    localStorage.setItem("characters", JSON.stringify([character]))
  } else {
    const characters = JSON.parse(storedCharacters) as object[];
    localStorage.setItem("characters", JSON.stringify([...characters, character]));
  }
  alert("Personaje Creado")
  location.reload();
}

export default function Page() {
  const paises: Pais[] = data;
  return (
    <main className="h-screen">
      <Link href='/personajes' className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'>
        <FaArrowLeft size={24} />
      </Link>
      <div className={'content-background'}>
        <h1 className={`mt-8 text-4xl`}>Crear Personaje</h1>
        <form action={handleSubmit} className="w-2/3 mt-12">
          <section className="flex justify-around items-center">
            <section className="flex flex-col">
              <label>Nombre:</label>
              <input type="text" required name="name"/>
              <label>Edad:</label>
              <input type="number" min="0" required name="age"/>
              <label>Altura:</label>
              <input type="number" required name="height"/>
            </section>
            <section className="flex flex-col">
              <label>Nacionalidad:</label>
              <select required name="nationality">
                <option value="" disabled selected>Selecciona un Pais</option>
                {paises.map((pais) => (
                  <option key={pais.name}>{pais.name}</option>
                ))}
              </select>
              <label>Nivel:</label>
              <input type="number" min="0" max="20" required name="level"/>
              <label>Coins:</label>
              <input type="number" required name="coins"/>
            </section>
          </section>
          <section>
            { /* Habilidades y clases */}
          </section>
          <section>
            { /* Estadisticas e Inventario */}
          </section>
          <div className="flex flex-col items-center">
            <button type="submit" className="bg-principal-2 px-4 py-1">Crear</button>
          </div>
        </form>
      </div>
    </main>
  )
}