'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Characters = {
  name: string;
  image: string;
}

function getCharacters(): Characters[] {
  const storedCharacters = localStorage.getItem("characters");

  return !storedCharacters ? [] : JSON.parse(storedCharacters) as Characters[]
}

export default function Page() {
  const [storedCharacters, setStoredCharacters] = useState<Characters[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedData = useMemo(() => {
    if (!storedCharacters || storedCharacters.length === 0) return [];

    const start = (currentPage - 1) * 3;
    const end = start + 3;

    return storedCharacters.slice(start, end);
  }, [storedCharacters, currentPage]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setStoredCharacters(getCharacters());
    }
  }, [])

  return (
    <main>
      <div className="flex flex-col items-center justify-between h-screen backdrop-blur-xs">
      <Link href='/' className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'>
        <FaArrowLeft size={24} />
      </Link>
        <h1 className={`mt-8 text-4xl`}>Mis Personajes</h1>
        <section className='flex justify-between items-center w-screen px-4'>
          <button className="h-fit disabled:opacity-25" onClick={ () => (setCurrentPage(currentPage - 1)) } disabled={ currentPage === 1}>
            <FaArrowLeft size={24} />
          </button>
          { paginatedData.length === 0 ? <h3 className="px-8 py-4 text-3xl bg-principal-1">No tenes personajes creados</h3> : paginatedData.map((character) => (
            <div key={character.name} className="bg-card h-96 w-64 flex flex-col items-center rounded-lg">
                <h3 className="py-4 text-center text-principal-dark text-2xl">{character.name}</h3>
                <Image src={character.image} width={170} height={170} alt={character.name} className="rounded-lg" />
                <button className="bg-principal-1 text-3xl py-0.5 px-3">
                  <Link href="">Editar</Link>
                </button>
            </div>
          )) }
          <button className="h-fit disabled:opacity-25" onClick={ () => (setCurrentPage(currentPage + 1)) } disabled={ currentPage >= Math.round(storedCharacters.length / 3) }>
            <FaArrowRight size={24} />
          </button>
        </section>
        <section>
          <p className="text-2xl text-center">Pag: { currentPage }/{ Math.round((storedCharacters.length/3)) || 1 }</p>
          <button className={`bg-principal-1 py-2 px-5`}>
            <Link href="/personajes/crear_personajes">
              Crear Personaje
            </Link>
          </button>
        </section>
      </div>
    </main>
  )
}