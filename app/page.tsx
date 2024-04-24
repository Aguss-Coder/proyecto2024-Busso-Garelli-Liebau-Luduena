import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';

export default function Home() {
  return (
    <main className={styles.background_image}>
      <div className="flex justify-center items-center flex-col h-screen bg-principal-dark/40">
        <h1 className="text-8xl text-principal-light text-center leading-relaxed mt-auto">La leyenda <br />de Nova Terra</h1>
        <Link href="#principal_page">
          <FaChevronDown className="text-principal-light mt-36" size={40} />
        </Link>
      </div>
      <section id="principal_page" className={styles.background_image}>
        <div className={styles.container}>
          <button className="bg-principal-1 rounded-full text-principal-light py-4 px-12 text-center no-underline text-4xl m-4 cursor-pointer">
            <Link href="/personajes">
              <span className={styles.shadow}>Mis Personajes</span>
            </Link>
          </button>
          <button className="bg-principal-2 rounded-full text-principal-light py-4 px-12 text-center no-underline text-4xl m-4 cursor-pointer">
            <Link href="/manuales">
              <span>Manules</span>
            </Link>
          </button>
          <button className="bg-principal-3 rounded-full text-principal-light py-4 px-12 text-center no-underline text-4xl m-4 cursor-pointer">
            <Link href="/mapa">
              <span>Mapa</span>
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}