import { CardImage } from "../../shared/cardImage/CardImage";
import styles from "./support.module.css";

const Support = () => {
  const cards = [
    {
      title: "Cómo funciona",
      description:
        "Nuestra App te ayuda a estudiar de una manera fácil y didáctica haciéndote preguntas sobre el tema de tu elección donde tendrás que elegir la correcta teniendo varias oportunidades hasta que puedas entender todo a la perfección.",
      image: "card_image1",
    },
    {
      title: "Contáctanos",
      description:
        "Obtén la ayuda que necesitas, bríndanos algunos detalles y te ofrecemos la mejor solución comunicándote al 3203968827.",
      image: "card_image2",
    },
    {
      title: "Problemas técnicos",
      description:
        "Si tienes problemas con el inicio de sesión o fallos en la aplicación déjalo saber en la barra de búsqueda y te brindaremos una rápida solución.",
      image: "card_image3",
    },
    {
      title: "Sugerencias y comentarios",
      description:
        "Puedes compartirnos tus sugerencias, reporte de errores o darnos una retroalimentación sobre tu experiencia general para brindar mejoras en la aplicación.",
      image: "card_image4",
    },
  ];

  return (
    <div id="contact" className={styles.container_cards}>
      {cards.map((card, index) => (
        <CardImage
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default Support;
