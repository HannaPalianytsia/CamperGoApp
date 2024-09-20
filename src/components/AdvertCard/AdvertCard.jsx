import styles from './AdvertCard.module.css';
import icons from '../../assets/icons.svg';
import clsx from 'clsx';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import {
  getFavorites,
  addToFavorites,
  removeFromFavorites,
} from 'utils/favorites';

const AdvertCard = ({ advert, isFavoritePage }) => {
  const favorites = getFavorites();

  const [isFavorite, setIsFavorite] = useState(() => {
    return favorites.some(item => item._id === advert._id);
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    name,
    price,
    rating,
    location,
    adults,
    engine,
    transmission,
    description,
    details: { airConditioner, kitchen },
    gallery,
    reviews,
  } = advert;

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  const handleLikeBtnClick = () => {
    if (isFavorite) {
      removeFromFavorites(advert._id);
      setIsFavorite(false);
    } else {
      addToFavorites(advert);
      setIsFavorite(true);
    }
  };

  return (
    <div>
      <div className={styles.advertCard}>
        <img src={gallery[0]} alt={name} className={styles.camperImg} />
        <div className={styles.camperInfo}>
          <div className={styles.camperMainInfo}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.likeContainer}>
              <p className={styles.price}>&#8364;{price}.00</p>
              {!isFavoritePage && (
                <button
                  type="button"
                  onClick={handleLikeBtnClick}
                  className={styles.likeBtn}
                >
                  {isFavorite ? (
                    <svg width={24} height={24} fill="#e44848">
                      <use href={`${icons}#heart`}></use>
                    </svg>
                  ) : (
                    <svg width={24} height={24} fill="none" stroke="#101828">
                      <use href={`${icons}#heart`}></use>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
          <div className={styles.camperAddInfo}>
            <div className={styles.iconsContainer}>
              <svg width={16} height={16} fill=" #ffc531">
                <use href={`${icons}#star`}></use>
              </svg>
              <p
                className={styles.rating}
              >{`${rating}(${reviews.length} Reviews)`}</p>
            </div>
            <div className={styles.iconsContainer}>
              <svg width={16} height={16}>
                <use href={`${icons}#map-pin`}></use>
              </svg>
              <p>{location}</p>
            </div>
          </div>
          <p className={styles.description}>{description}</p>
          <ul className={styles.amenitiesList}>
            <li className={styles.amenity}>
              <svg width={20} height={20}>
                <use href={`${icons}#adults`}></use>
              </svg>
              <p>{adults} adults</p>
            </li>
            <li className={clsx(styles.amenity, styles.capitalize)}>
              <svg width={20} height={20}>
                <use href={`${icons}#transmission`}></use>
              </svg>
              <p>{transmission}</p>
            </li>
            <li className={clsx(styles.amenity, styles.capitalize)}>
              <svg width={20} height={20}>
                <use href={`${icons}#engine`}></use>
              </svg>
              <p>{engine}</p>
            </li>
            {kitchen > 0 && (
              <li className={styles.amenity}>
                <svg width={20} height={20}>
                  <use href={`${icons}#kitchen`}></use>
                </svg>
                <p>Kitchen</p>
              </li>
            )}
            {airConditioner > 0 && (
              <li className={styles.amenity}>
                <svg width={20} height={20}>
                  <use href={`${icons}#airConditioner`}></use>
                </svg>
                <p>AC</p>
              </li>
            )}
          </ul>
          <button type="button" onClick={openModal}>
            Show more
          </button>
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        advert={advert}
      />
    </div>
  );
};

export default AdvertCard;
