import styles from './ModalFeatures.module.css';
import icons from '../../assets/icons.svg';

const ModalFeatures = ({ advert }) => {
  const { airConditioner, bathroom, kitchen, TV, CD, radio, shower, water } =
    advert.details;
  const { form, length, width, height, tank, consumption } = advert;

  return (
    <div className={styles.features}>
      <ul className={styles.amenitiesList}>
        {airConditioner && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#airConditioner`}></use>
            </svg>
            <p>{airConditioner} Air conditioner</p>
          </li>
        )}
        {bathroom > 0 && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#water`}></use>
            </svg>
            <p>Bathroom</p>
          </li>
        )}
        {kitchen > 0 && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#kitchen`}></use>
            </svg>
            <p>Kitchen</p>
          </li>
        )}
        {TV > 0 && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#tv`}></use>
            </svg>
            <p>TV</p>
          </li>
        )}
        {CD > 0 && (
          <li className={styles.amenity}>
            <p>CD</p>
          </li>
        )}
        {radio > 0 && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#radio`}></use>
            </svg>
            <p>Radio</p>
          </li>
        )}
        {shower > 0 && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#water`}></use>
            </svg>
            <p>Shower</p>
          </li>
        )}
        {water && (
          <li className={styles.amenity}>
            <svg width={20} height={20}>
              <use href={`${icons}#water`}></use>
            </svg>
            <p>Water</p>
          </li>
        )}
      </ul>
      <div className={styles.vehicleDetails}>
        <h5 className={styles.vehicleDetailsTitle}>Vehicle details</h5>
        <ul className={styles.vehicleDetailsList}>
          <li className={styles.vehicleDetailsItem}>
            <p>Form</p>
            {form === 'panelTruck' && <p>Panel truck</p>}
            {form === 'alcove' && <p>Alcove</p>}
            {form === 'fullyIntegrated' && <p>Fully integrated</p>}
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Length</p>
            <p>{length}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Width</p>
            <p>{width}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Height</p>
            <p>{height}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Tank</p>
            <p>{tank}</p>
          </li>
          <li className={styles.vehicleDetailsItem}>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalFeatures;
