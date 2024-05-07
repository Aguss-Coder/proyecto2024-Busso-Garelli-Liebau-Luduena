import styles from "@/app/ui/home.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen">
      <Link href='/personajes' className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'>
        <FaArrowLeft size={24} />
      </Link>
      <div className={'content-background'}>
        <h1 className={`mt-8 text-4xl`}>Crear Personaje</h1>
        <form action="">
          <section className="grid grid-cols-2 grid-rows-1">
              <label>Nombre:</label>
              <input type="text" className="mb-4" />
              <label>Edad:</label>
              <input type="text" className="mb-4" />
              <label>Altura:</label>
              <input type="text" className="mb-4" />
              <label>Nacionalidad:</label>
              <input type="text" className="mb-4" />
              <label>Nivel:</label>
              <input type="text" className="mb-4" />
              <label>Coins:</label>
              <input type="text" className="mb-4" />
          </section>
          <section>
            { /* Habilidades y clases */}
          </section>
          <section>
            { /* Estadisticas e Inventario */}
          </section>
        </form>
      </div>
    </main>
  )
}