'use client'

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import paisesData from '@/data/mapa.json';
import clasesData from '@/data/clases.json';
import { CharacterClasses } from "@/types/classes"
import { useMemo, useState } from "react";

type Pais = {
  name: string;
}

function handleSubmit(e:FormData) {
  const name = e.get("name")
  const age = Number(e.get("age"))
  const height = Number(e.get("height"))
  const nationality = e.get("nationality")
  const level = Number(e.get("level"))
  const coins = Number(e.get("coins"))
  const className = e.get("class")

  const character = {
    name,
    age,
    height,
    nationality,
    level,
    coins,
    className
  };

  const storedCharacters = localStorage.getItem("characters")

  if (!storedCharacters) {
    localStorage.setItem("characters", JSON.stringify([character]))
  } else {
    const characters = JSON.parse(storedCharacters) as object[];
    localStorage.setItem("characters", JSON.stringify([...characters, character]));
  }
  alert(`${name} creado`)
  location.reload();
}

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const paises: Pais[] = paisesData;
  const clases: CharacterClasses = clasesData; // Devuelve nombre de las clases
  const classesArray = Object.keys(clases); // Devuelve un array con los nombres de las clases
  const shownAbilities = useMemo(() => {
    if (selectedClass.length === 0) {
      return [];
    } else {
      return Object.keys(clases[selectedClass].abilities);
    }
  }, [selectedClass]);
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
              <label>Altura (cm):</label>
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
          <section className="flex justify-around items-center">
            <section className="flex flex-col">
              <label>Clase:</label>
              <select name="class" onChange={(e) => setSelectedClass(e.target.value)}>
                <option value="" selected disabled>Selecciona una clase</option>
                  {classesArray.map((clase) => (
                    <option key={clase} value={clase}>{clase}</option>
                  ))}
              </select>
            </section>
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