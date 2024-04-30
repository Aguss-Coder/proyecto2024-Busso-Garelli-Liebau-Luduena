import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import data from '@/data/mapa.json';

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
        <Image src="/mapa.jpg" alt="Mapa de Nova Terra" width={600} height={300} />
        {/*<div>
          {paises.map((pais) => ())}
        </div> */}
        <div className='text-principal-light px-12 pt-4'>
          {paises.map((pais) => (
            <div key={pais.name}>
              <h3 className=''>{pais.name}</h3>
              <h4 className='px-4'>Capital: <b>{pais.capital}</b></h4>
              <p className='px-8'>{pais.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}