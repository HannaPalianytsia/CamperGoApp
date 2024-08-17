import icons from '../../assets/icons.svg';

const ReviewerRating = ({ rating }) => {
  const yellowStars = Array.from({ length: rating }, (_, i) => i + 1);
  const greyStars = Array.from({ length: 5 - rating }, (_, i) => i + 1);
  return (
    <div>
      {yellowStars.map(ys => (
        <svg key={ys} width={16} height={16} fill=" #ffc531">
          <use href={`${icons}#star`}></use>
        </svg>
      ))}
      {greyStars.map(gs => (
        <svg key={gs} width={16} height={16} fill=" #f2f4f7">
          <use href={`${icons}#star`}></use>
        </svg>
      ))}
    </div>
  );
};

export default ReviewerRating;
