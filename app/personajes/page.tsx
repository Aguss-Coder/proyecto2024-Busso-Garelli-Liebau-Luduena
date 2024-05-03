'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import data from "@/data/personajes.json";

type Personajes = {
  name: string;
  image: string;
}

export default function Page() {
  const personajes: Personajes[] = data;

  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * 3;
    const end = start + 3;

    return personajes.slice(start, end);
  }, [personajes, currentPage]);

  return (
    <main>
      <div className="flex flex-col items-center justify-between h-screen backdrop-blur-xs">
        <h1 className={`mt-8 text-4xl`}>Mis Personajes</h1>
        <section className='flex justify-evenly w-screen'>
          { personajes && personajes.length > 0 && personajes.map((personaje, index) => (
            <div className="bg-card h-96 w-64 flex flex-col items-center rounded-lg">
                <h3 className="py-4 text-center text-principal-dark text-2xl">{personaje.name}</h3>
                <Image src={personaje.image} width={170} height={170} alt={personaje.name} className="rounded-lg" />
                <button className="bg-principal-1 text-3xl py-0.5 px-3">
                  <Link href="">Usar</Link>
                </button>
            </div>
          )) }
        </section>
        <section>
          <button className={`bg-principal-1 py-3 px-5`}>
            <Link href="/personajes/crear_personajes">
              Crear Personaje
            </Link>
          </button>
        </section>
      </div>
    </main>
  )
}