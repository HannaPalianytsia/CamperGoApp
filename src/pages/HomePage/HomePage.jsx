import { NavLink } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <p className={styles.homePageText}>Welcome to CamperGo application.</p>
      <p className={styles.homePageText}>
        You can browse, book, and manage camper rentals here.
      </p>
      <img
        src="https://ftp.goit.study/img/campers-test-task/5-1.webp"
        alt="CamperGo"
        className={styles.homePageImg}
      />
      <p className={styles.homePageText}>
        You are invited to view{' '}
        <NavLink to="/catalog" className={styles.goCatalog}>
          the catalog of campers
        </NavLink>
      </p>
    </div>
  );
};

export default HomePage;
