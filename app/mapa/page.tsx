import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import data from '@/data/mapa.json';
import Link from 'next/link';

type Pais = {
  name: string;
  capital: string;
  description: string;
}

export default function Page() {
  const paises: Pais[] = data;
  return (
    <main className={styles.background_image}>
      <div className={styles.content_background}>
        <h1 className='text-5xl text-center mt-8'>Mapa de Nova Terra</h1>
        <Image src="/mapa.jpg" alt="Mapa de Nova Terra" width={600} height={300} className='mt-8' />
        <div className={`${styles.grid_container} mt-8 `}>
          {paises.map((pais) => (
            <div key={`list`} className='pb-4'>
              <Link href={`#${pais.name}`}>
                <p className='text-lg text-center'>{pais.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <div className='px-12 mb-8'>
          {paises.map((pais) => (
            <div key={pais.name} id={pais.name} className='pt-8'>
              <h3 className='text-2xl'>{pais.name}</h3>
              <h4 className='px-4 pt-2 text-lg'>Capital: <b>{pais.capital}</b></h4>
              <p className='px-8 pt-2'>{pais.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}