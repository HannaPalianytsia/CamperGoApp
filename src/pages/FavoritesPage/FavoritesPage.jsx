import AdvertCard from 'components/AdvertCard/AdvertCard';
import { getFavorites } from 'utils/favorites';
import styles from './FavoritesPage.module.css';
import { NavLink } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = getFavorites();

  return (
    <div className={styles.favoritesPage}>
      {favorites.length === 0 ? (
        <>
          <p className={styles.favoritesText}>You have no favorites yet</p>
          <p className={styles.favoritesText}>
            Go to{' '}
            <NavLink to="/catalog" className={styles.goCatalog}>
              catalog page
            </NavLink>{' '}
            to choose camper
          </p>
        </>
      ) : (
        <ul className={styles.advertsList}>
          {favorites.map(advert => (
            <li key={advert._id}>
              <AdvertCard advert={advert} isFavoritePage={true} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
