import PropTypes from 'prop-types';
import Style from '../Feedback.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {good + neutral + bad !== 0 && (
        <ul className="statisticsList">
          <li>
            <p className={Style.statisticsItem}>Good: {good}</p>
            <p className={Style.statisticsItem}>Neutral: {neutral}</p>
            <p className={Style.statisticsItem}>Bad: {bad}</p>
            <p className={Style.statisticsItem}>Total: {total}</p>
            <p className={Style.statisticsItem}>
              Positive feedback: {positivePercentage}%
            </p>
          </li>
        </ul>
      )}
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
