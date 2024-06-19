import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='flex justify-center items-center flex-col h-screen bg-principal-dark/40'>
        <h1 className='text-4xl text-center leading-relaxed md:text-6xl md:leading-relaxed lg:text-8xl lg:leading-relaxed'>
          La leyenda <br />
          de Nova Terra
        </h1>
        <FaChevronDown
          className='absolute bottom-4 animate-bounce'
          size={40}
        />
      </div>
      <section id='principal_page'>
        <div className='flex flex-col justify-center items-center h-screen'>
          <button className={`bg-principal-1 py-2 px-4 md:py-4 md:px-12`}>
            <Link href='/personajes'>
              <span>Mis Personajes</span>
            </Link>
          </button>
          <button className={`bg-principal-2 py-2 px-4 md:py-4 md:px-12`}>
            <Link href='/manuales'>
              <span>Manules</span>
            </Link>
          </button>
          <button className={`bg-principal-3 py-2 px-4 md:py-4 md:px-12`}>
            <Link href='/mapa'>
              <span>Mapa</span>
            </Link>
          </button>
          <button className={`bg-principal-3 py-2 px-4 md:py-4 md:px-12`}>
            <Link href='/animacion'>
              <span>Animación</span>
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
