'use client'

export default function Page() {
  return (
    <main>
      <div className={'content-background'}>
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