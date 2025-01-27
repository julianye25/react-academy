import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.containerFooter}>
        <h1><a href="./index.html">ASK academy</a></h1>
        <nav className={styles.nav}>
          <a href="#">Inicio</a>
          <a href="./about.html">Sobre nosotros</a>
          <a href="./support.html">Soporte</a>
        </nav>
        <p>&copy; 2024 Ask Academy. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
