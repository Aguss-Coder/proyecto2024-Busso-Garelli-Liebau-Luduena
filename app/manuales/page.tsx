'use client'

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <main>
      <div className={'content-background'}>
      <Link href='/' className='fixed p-2 left-8 top-4 w-fit h-fit bg-principal-1 rounded-full'>
        <FaArrowLeft size={24} />
      </Link>
        <h1 className={`mt-8 text-4xl`}>Manuales</h1>
        <section className="flex justify-center items-center">
          <button className={` bg-principal-2`}>
            <a href="/manual.pdf" download="manualNovaTerra.pdf">
              Descargar
            </a>
          </button>
        </section>
      </div>
    </main>
  )
}