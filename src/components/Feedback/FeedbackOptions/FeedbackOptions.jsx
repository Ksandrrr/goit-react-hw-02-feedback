import Style from '../Feedback.module.css';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="buttonList">
      {options.map(option => (
        <button
          onClick={onLeaveFeedback}
          key={option}
          name={option}
          className={Style.buttonListItem}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
