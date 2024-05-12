import { FaChevronDown } from 'react-icons/fa6';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export default function Home() {
  return (
    <main className={styles.background_image}>
      <div className='flex justify-center items-center flex-col h-screen bg-principal-dark/40'>
        <h1 className='text-8xl text-center leading-relaxed'>
          La leyenda <br />
          de Nova Terra
        </h1>
        <FaChevronDown
          className='absolute bottom-4 animate-bounce'
          size={40}
        />
      </div>
      <section id='principal_page'>
        <div className={styles.container}>
          <button className={`bg-principal-1 py-4 px-12`}>
            <Link href='/personajes'>
              <span>Mis Personajes</span>
            </Link>
          </button>
          <button className={`bg-principal-2 py-4 px-12`}>
            <Link href='/manuales'>
              <span>Manules</span>
            </Link>
          </button>
          <button className={`bg-principal-3 py-4 px-12`}>
            <Link href='/mapa'>
              <span>Mapa</span>
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}
