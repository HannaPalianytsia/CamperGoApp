import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <p className={styles.loaderText}>Loading...</p>
    </div>
  );
};

export default Loader;
