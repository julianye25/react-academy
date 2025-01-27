import styles from "./cardImage.module.css";

interface CardImageProps {
  title: string;
  description: string;
  image: string;
}

export const CardImage = ({ title, description, image }: CardImageProps) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.card_image} ${styles[image]}`}></div>
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_description}>{description}</p>
      </div>
    </div>
  );
};
