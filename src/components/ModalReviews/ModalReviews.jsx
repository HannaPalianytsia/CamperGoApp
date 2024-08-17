import ReviewerRating from 'components/ReviewerRating/ReviewerRating';
import styles from './ModalReviews.module.css';

const ModalReviews = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.length === 0 ? (
        <p className={styles.name}>No reviews yet</p>
      ) : (
        <ul>
          {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
            <li key={reviewer_name}>
              <div className={styles.reviewer}>
                <div className={styles.picture}>{reviewer_name[0]}</div>
                <div>
                  <p className={styles.name}>{reviewer_name}</p>
                  <ReviewerRating rating={reviewer_rating} />
                </div>
              </div>
              <p className={styles.comment}>{comment}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModalReviews;
