import styles from "@/app/ui/home.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.background_image}>
      <Link href='/personajes' className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'>
        <FaArrowLeft size={24} />
      </Link>
      <div className={'content-background'}>
        <h1 className={`mt-8 text-4xl`}>Crear Personaje</h1>
        <section>
          { /* Info personaje */}
        </section>
        <section>
          { /* Habilidades y clases */}
        </section>
        <section>
          { /* Estadisticas e Inventario */}
        </section>
      </div>
    </main>
  )
}