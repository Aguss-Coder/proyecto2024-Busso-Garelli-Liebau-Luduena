import styles from "@/app/ui/home.module.css";

export default function Page() {
  return (
    <main className={styles.background_image}>
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