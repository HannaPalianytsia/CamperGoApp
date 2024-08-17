import { NavLink } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <p className={styles.notFound}>This page not found</p>
      <p className={styles.notFound}>
        Go to{' '}
        <NavLink to="/" className={styles.goHome}>
          home page
        </NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
