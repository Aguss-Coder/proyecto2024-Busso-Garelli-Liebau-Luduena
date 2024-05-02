import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
    <main className={styles.background_image}>
      <div className='bg-principal-1 h-full w-3/4 m-auto flex flex-col justify-center items-center bg-fixed'>
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