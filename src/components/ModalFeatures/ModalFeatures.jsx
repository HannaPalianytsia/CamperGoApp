import styles from './ModalFeatures.module.css';

const ModalFeatures = ({ advert }) => {
  const {
    airConditioner,
    bathroom,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = advert.details;
  const { form, length, width, height, tank, consumption } = advert;

  return (
    <div className={styles.features}>
      <ul className={styles.amenitiesList}>
        {airConditioner && (
          <li className={styles.amenity}>{airConditioner} Air conditioner</li>
        )}
        {bathroom && <li className={styles.amenity}>Bathroom</li>}
        {kitchen && <li className={styles.amenity}>Kitchen</li>}
        {beds && <li className={styles.amenity}>{beds} beds</li>}
        {TV && <li className={styles.amenity}>TV</li>}
        {CD && <li className={styles.amenity}>CD</li>}
        {radio && <li className={styles.amenity}>Radio</li>}
        {shower && <li className={styles.amenity}>Shower</li>}
        {toilet && <li className={styles.amenity}>Toilet</li>}
        {freezer && <li className={styles.amenity}>Freezer</li>}
        {hob && <li className={styles.amenity}>{hob} hob</li>}
        {microwave && <li className={styles.amenity}>Microwave</li>}
        {gas && <li className={styles.amenity}>Gas</li>}
        {water && <li className={styles.amenity}>Water</li>}
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
