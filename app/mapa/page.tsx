import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className={styles.background}>
      <div className={styles.content_background}>
        <Image src="/mapa.jpg" alt="Mapa de Nova Terra" width={600} height={300} />
        <div className='text-principal-light px-12 pt-4'>
          <h3 className='pb-1 text-xl'>Siltrix</h3>
          <h4 className='pb-1'>Capital: Ciudad de Cristal</h4>
          <p className='text-center'>
            La nación de los magos. Cede principal del gremio de Magos de nivel mundial. 
            El 60% de su población es de clase mago.<br />
            Nación muy rica, sumamente organizada y carecen de un ejército fuerte. 
            Su ventaja es la cantidad insana de magia en sus filas.<br />
            La mayor parte de ciudadanos no magos aceptados en Siltrix van al ejército, 
            mientras que el resto cumple funciones de servidumbre para los magos.<br />
          </p>
        </div>
      </div>
    </main>
  )
}