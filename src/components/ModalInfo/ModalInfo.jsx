import styles from './ModalInfo.module.css';
import icons from '../../assets/icons.svg';
import ModalReviews from '../ModalReviews/ModalReviews';
import ModalFeatures from '../ModalFeatures/ModalFeatures';
import clsx from 'clsx';
import ModalForm from 'components/ModalForm/ModalForm';
import { useState } from 'react';

const ModalInfo = ({ advert }) => {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);

  const { name, price, rating, location, description, gallery, reviews } =
    advert;

  const handleFeaturesClick = () => setIsFeaturesOpen(true);
  const handleReviewsClick = () => setIsFeaturesOpen(false);

  return (
    <div className={styles.modalContent}>
      <div>
        <h3 className={styles.name}>{name}</h3>
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
        <p className={styles.price}>&#8364;{price}.00</p>
        <ul className={styles.imageGallery}>
          {gallery.map(image => (
            <li key={image}>
              <img src={image} alt={name} className={styles.camperImg} />
            </li>
          ))}
        </ul>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <div className={styles.btnContainer}>
          <button
            type="button"
            className={clsx(
              styles.infoBtn,
              isFeaturesOpen && styles.selectedInfo
            )}
            onClick={handleFeaturesClick}
            disabled={isFeaturesOpen}
          >
            Features
          </button>
          <button
            type="button"
            className={clsx(
              styles.infoBtn,
              !isFeaturesOpen && styles.selectedInfo
            )}
            onClick={handleReviewsClick}
            disabled={!isFeaturesOpen}
          >
            Reviews
          </button>
        </div>
        <div className={styles.detaisAndForm}>
          {isFeaturesOpen ? (
            <ModalFeatures advert={advert} />
          ) : (
            <ModalReviews reviews={reviews} />
          )}
          <ModalForm />
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
