import styles from "./about.module.css";
import { Card } from "../../shared/card/Card";

export const AboutUs = () => {
  return (
    <main id="about" className={styles.main}>
      <div className={styles.container}>
        <h2>Quiénes somos</h2>
        <p className={styles.about}>
          Somos una empresa dedicada a la práctica de todos tus conocimientos en
          tus cursos. Estamos enfocados en que practiques los temas de tus
          materias para repasar para trabajos o exámenes y así tener un buen
          dominio de ellos. Esto te permitirá demostrar lo aprendido en la
          universidad con más confianza.
        </p>
        <div className={styles.cards}>
          <Card
            title="Misión"
            description="Nuestro objetivo es ayudar a nuestros usuarios a entender mejor sus materias y cursos, para que puedan desenvolverse con facilidad en exposiciones, trabajos, exámenes, y aplicar sus conocimientos en un empleo."
          />
          <Card
            title="Visión"
            description="Queremos que nuestra empresa sea reconocida en los entornos universitarios. Al llegar a más usuarios, podremos expandir nuestra misión a más lugares del país."
          />
          <Card
            title="Propósito"
            description="Compromiso con la satisfacción del cliente, excelencia, innovación, crecimiento sostenible y responsabilidad social. Estas palabras nos definen para ofrecer el mejor servicio a nuestros usuarios registrados."
          />
        </div>
      </div>
    </main>
  );
};
