import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <a className={styles.logo} href="/">
          LOGO
        </a>
        <ul className={styles.menu}>
          <li>
            <a href="/" aria-label="Go to Home Page">
              Home
            </a>
          </li>
          <li>
            <a href="#about" aria-label="Learn About Us">
              About
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="Contact Us">
              Contact
            </a>
          </li>
        </ul>

        <ul className={styles.auth}>
          <li>
            <a href="/login" aria-label="Sign In">
              Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/register" aria-label="Sign Up">
              Registrarse
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
