import styles from './mainSection.module.css'

const MainSection = () => {
  return (
    <main className={styles.main}>
      <section className={styles.primera}>
        <h2>Imagina un lugar.</h2>

        <p>
          En el cual puedas estudiar con facilidad, saliendo de la monotonía de
          una manera un poco más didáctica, dándote la oportunidad de aprender
          todos los temas en los que algún día quisiste mejorar.
        </p>

        <button className={styles.example}>
          <a className="link-example">Descubrelo</a>
        </button>
      </section>

      <section className={styles.imageSection}>
        <img
          src="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Descripción del lugar imaginado"
          className={styles.image}
        />
      </section>
    </main>
  )
}

export default MainSection
