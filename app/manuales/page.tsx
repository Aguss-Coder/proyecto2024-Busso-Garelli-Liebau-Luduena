'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page() {
  return (
    <main className='h-screen'>
      <div className='content-background flex justify-center items-center flex-wrap'>
        <Link
          href='/'
          className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'
        >
          <FaArrowLeft size={24} />
        </Link>

        <div className='w-1/2'>
          <h1 className='mt-8 text-4xl text-center'>Manuales</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
              <a href='/manualNovaTerra.pdf' download='manualNovaTerra.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h1 className='mt-8 text-4xl text-center'>Clases jugables</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
              <a href='/Clases jugables-1.pdf' download='Clases jugables-1.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h1 className='mt-8 text-4xl text-center'>Habilidades comunes</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
              <a href='/Habilidades comunes-1.pdf' download='Habilidades comunes-1.pdf'>
                Descargar
              </a>
            </button>
          </section>
        </div>

        <div className='w-1/2'>
          <h1 className='mt-8 text-4xl text-center'>Dotes comunes</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
              <a href='/Dotes comunes-1.pdf' download='Dotes comunes-1.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h1 className='mt-8 text-4xl text-center'>Estadisticas</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
              <a href='/Estadisticas.pdf' download='Estadisticas.pdf'>
                Descargar
              </a>
            </button>
          </section>

          <h1 className='mt-8 text-4xl text-center'>Idiomas</h1>
          <section className='flex justify-center items-center'>
            <button className='bg-principal-2'>
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
