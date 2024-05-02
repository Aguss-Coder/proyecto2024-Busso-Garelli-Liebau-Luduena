'use client'

import styles from "@/app/ui/home.module.css";
import Link from "next/link";
import { useState, useMemo } from "react";
import data from "@/data/personajes.json";

type Personajes = {
  name: string;
  description: string;
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
    <main className={`${styles.background_image}`}>
      <div className="h-screen backdrop-blur-xs">
        <section>
          {/* personajes && personajes.length > 0 && personajes.map((personaje, index) => (
          ))*/}
        </section>
        <section className="flex justify-center items-center">
          <button className={` bg-principal-1`}>
            <Link href="/personajes/crear_personajes">
              Crear Personaje
            </Link>
          </button>
        </section>
      </div>
    </main>
  )
}