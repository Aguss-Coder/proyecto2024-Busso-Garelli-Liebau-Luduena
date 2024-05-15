'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page() {
  return (
    <main className='h-screen'>
      <div className='content-background flex justify-center items-center flex-wrap'>
        <h1 className='text-4xl absolute top-8'>Manuales del Juego</h1>
        <Link
          href='/'
          className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'
        >
          <FaArrowLeft size={24} />
        </Link>

        <div className='w-1/8'>
          <h3 className='mt-8 text-xl text-center'>Manual Unificado</h3>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2 py-2 px-6'>
              <a href='/manualNovaTerra.pdf' download='manualNovaTerra.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h3 className='mt-8 text-xl text-center'>Clases jugables</h3>
          <section className='flex justify-center items-center'>
            <button  className='bg-principal-3 py-2 px-6'>
              <a href='/Clases jugables-1.pdf' download='Clases jugables-1.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h3 className='mt-8 text-xl text-center'>Habilidades comunes</h3>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2 py-2 px-6'>
              <a href='/Habilidades comunes-1.pdf' download='Habilidades comunes-1.pdf'>
                Descargar
              </a>
            </button>
          </section>
        </div>
        <div className='w-1/8'>
          <h3 className='mt-8 text-xl text-center'>Dotes comunes</h3>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-3 py-2 px-6'>
              <a href='/Dotes comunes-1.pdf' download='Dotes comunes-1.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h3 className='mt-8 text-xl text-center'>Estadisticas</h3>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2 py-2 px-6'>
              <a href='/Estadisticas.pdf' download='Estadisticas.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h3 className='mt-8 text-xl text-center'>Idiomas</h3>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-3 py-2 px-6'>
              <a href='/Idiomas-1.pdf' download='Idiomas-1.pdf'>
                Descargar
              </a>
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
