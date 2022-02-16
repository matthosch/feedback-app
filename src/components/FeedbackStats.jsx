import PropTypes from 'prop-types';
import { FeedbackDataShape } from '../data/FeedbackData';

function FeedbackStats({ feedback }) {
  // Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // average = isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/,'');
  // average = isNaN(average) ? 0 : parseFloat(average.toFixed(1));
  average = isNaN(average) ? 0 : +average.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(FeedbackDataShape),
};

export default FeedbackStats;
