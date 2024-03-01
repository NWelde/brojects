import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // Ensure this path matches your project structure
import logo from './assets/Logo.PNG'; // Adjust the path as necessary

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navLink}>
        <img src={logo} alt="Logo" className={styles.logo} /> {/* Add this line */}
      </Link>
      <Link to="/about" className={styles.navLink}>About</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
      <Link to="/courses" className={styles.navLink}>Courses</Link>
      <Link to="/joinus" className={styles.navLink}>Join Us</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
}

export default Navigation;