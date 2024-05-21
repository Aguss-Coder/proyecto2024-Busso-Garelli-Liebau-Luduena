'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { Character } from '@/types/character';
import { getCharacters } from '@/lib/character';
import { CharacterClasses } from '@/types/classes';
import paisesData from '@/data/mapa.json';
import clasesData from '@/data/clases.json';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

type Pais = {
  name: string;
};

export default function Page({ params }: { params: { characterId: string } }) {
  const [selectedClass, setSelectedClass] = useState<string>('');
  const paises: Pais[] = paisesData.sort((prev, current) =>
    prev.name.localeCompare(current.name)
  );
  const clases: CharacterClasses = clasesData; // Devuelve nombre de las clases
  const classesArray = Object.keys(clases); // Devuelve un array con los nombres de las clases
  const [level, setLevel] = useState<number>(0); // Devuelve el nivel del personaje
  const [character, setCharacter] = useState<Character | undefined>();

  const shownAbilities = useMemo(() => {
    if (selectedClass.length === 0) {
      return [];
    } else {
      return Object.entries(clases[selectedClass].abilities)
        .filter(([_, value]) => value.unlockableAt <= level)
        .map(([key, _]) => key);
    }
  }, [selectedClass, level]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const characters = getCharacters();
      const storedCharacter = characters.find(
        (character) => character.id === params.characterId
      );
      setCharacter(storedCharacter);
      setLevel(storedCharacter?.level || 0);
      setSelectedClass(storedCharacter?.classType || '');
    }
  }, []);

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
      const characters = JSON.parse(storedCharacters) as Character[];
      const filteredCharacters = characters.filter(
        (char) => char.id !== params.characterId
      );
      localStorage.setItem(
        'characters',
        JSON.stringify([...filteredCharacters, character])
      );
    }
    alert(`${name} actualizado`);
    router.push('/personajes');
  }

  if (typeof character === 'undefined') {
    return (
      <main className='h-screen'>
        <div className='content-background flex justify-center items-center'>
          <h1 className='text-4xl'>No existe ese personaje</h1>
        </div>
      </main>
    );
  }

  return (
    <main className='h-screen'>
      <Link
        href='/personajes'
        className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'
      >
        <FaArrowLeft size={24} />
      </Link>
      <div className={'content-background'}>
        <h1 className={`mt-8 text-4xl`}>Editar Personaje</h1>
        <form
          action={handleSubmit}
          className='w-2/3 mt-12 flex flex-col h-full'
        >
          <section className='flex justify-around items-center'>
            <section className='flex flex-col'>
              <label>Nombre:</label>
              <input
                type='text'
                required
                name='name'
                defaultValue={character.name}
              />
              <label>Edad:</label>
              <input
                type='number'
                min='0'
                required
                name='age'
                defaultValue={character.age}
              />
              <label>Altura (cm):</label>
              <input
                type='number'
                required
                name='height'
                defaultValue={character.height}
              />
              <label>Clase:</label>
              <select
                name='class'
                required
                onChange={(e) => setSelectedClass(e.target.value)}
                defaultValue={character.classType}
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
                defaultValue={character.nationality}
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
                defaultValue={character.level}
              />
              <label>Coins:</label>
              <input
                type='number'
                required
                name='coins'
                defaultValue={character.coins}
              />
              <label>Habilidades:</label>
              <select
                required
                name='abilities'
                defaultValue={character.abilities}
              >
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
          <div className='flex items-end justify-center mt-auto'>
            <button
              type='submit'
              className='bg-principal-2 px-4 py-1'
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
