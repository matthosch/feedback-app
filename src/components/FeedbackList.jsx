import PropTypes from 'prop-types';
import { FeedbackDataShape } from '../data/FeedbackData';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(FeedbackDataShape),
};

export default FeedbackList;
