'use client';

import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import paisesData from '@/data/mapa.json';
import clasesData from '@/data/clases.json';
import { CharacterClasses } from '@/types/classes';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type Pais = {
  name: string;
};

export default function Page() {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const paises: Pais[] = paisesData.sort((prev, current) =>
    prev.name.localeCompare(current.name)
  );
  const clases: CharacterClasses = clasesData; // Devuelve nombre de las clases
  const classesArray = Object.keys(clases); // Devuelve un array con los nombres de las clases
  const [level, setLevel] = useState<number>(0); // Devuelve el nivel del personaje

  const shownAbilities = useMemo(() => {
    if (selectedClass.length === 0) {
      return [];
    } else {
      return Object.entries(clases[selectedClass].abilities)
        .filter(([_, value]) => value.unlockableAt <= level)
        .map(([key, _]) => key);
    }
  }, [selectedClass, level]);

  const router = useRouter();

  function handleSubmit(e: FormData) {
    const id = self.crypto.randomUUID();
    const name = e.get('name');
    const age = Number(e.get('age'));
    const height = Number(e.get('height'));
    const nationality = e.get('nationality');
    const level = Number(e.get('level'));
    const coins = Number(e.get('coins'));
    const classType = e.get('class');
    const abilities = e.get('abilities');

    const character = {
      id,
      name,
      age,
      height,
      nationality,
      level,
      coins,
      classType,
      abilities,
    };

    const storedCharacters = localStorage.getItem('characters');

    if (!storedCharacters) {
      localStorage.setItem('characters', JSON.stringify([character]));
    } else {
      const characters = JSON.parse(storedCharacters) as object[];
      localStorage.setItem(
        'characters',
        JSON.stringify([...characters, character])
      );
    }
    alert(`${name} creado`);
    router.push('/personajes');
  }

  return (
    <main className='h-full md:h-screen'>
      <Link
          href='/personajes'
          className='hidden md:block fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'
        >
          <FaArrowLeft size={24} />
        </Link>
      <div className={'content-background'}>
        <h1 className={`mt-8 text-4xl`}>Crear Personaje</h1>
        <form
          action={handleSubmit}
          className='w-2/3 mt-12 flex flex-col'
        >
          <section className='flex flex-col md:flex-row md:justify-center md:gap-12 lg:justify-around lg:gap-0'>
            <section className='flex flex-col'>
              <label>Nombre:</label>
              <input
                type='text'
                required
                name='name'
              />
              <label>Edad:</label>
              <input
                type='number'
                min='0'
                required
                name='age'
              />
              <label>Altura (cm):</label>
              <input
                type='number'
                required
                min='0'
                max='220'
                name='height'
              />
              <label>Clase:</label>
              <select
                name='class'
                required
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option
                  value=''
                  selected
                  disabled
                >
                  Selecciona una clase
                </option>
                {classesArray.map((clase) => (
                  <option
                    key={clase}
                    value={clase}
                  >
                    {clase}
                  </option>
                ))}
              </select>
            </section>
            <section className='flex flex-col'>
              <label>Nacionalidad:</label>
              <select
                required
                name='nationality'
              >
                <option
                  value=''
                  disabled
                  selected
                >
                  Selecciona un Pais
                </option>
                {paises.map((pais) => (
                  <option key={pais.name}>{pais.name}</option>
                ))}
              </select>
              <label>Nivel:</label>
              <input
                type='number'
                onChange={(e) => setLevel(Number(e.target.value))}
                min='0'
                max='30'
                required
                name='level'
              />
              <label>Coins:</label>
              <input
                type='number'
                required
                name='coins'
              />
              <label>Habilidades:</label>
              <select name='abilities'>
                <option
                  value=''
                  selected
                  disabled
                >
                  Seleccionar una Habilidad
                </option>
                {shownAbilities.map((ability) => (
                  <option
                    key={ability}
                    value={ability}
                  >
                    {ability}
                  </option>
                ))}
              </select>
            </section>
          </section>
          {/* <div className='relative bg-principal-light h-[1px] w-full my-4'>
          </div> */}
          <div className='flex justify-center md:absolute md:bottom-1 md:left-[45%]'>
            <button
              type='submit'
              className='bg-principal-2 px-4 py-1'
            >
              Crear
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
