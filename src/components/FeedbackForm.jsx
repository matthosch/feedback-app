import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const validateInput = () => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
      setRating(10);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate your service with us?</h2>
        <RatingSelect rating={rating} setRating={setRating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            onKeyUp={validateInput}
            type='text'
            placeholder='Write a revew'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
