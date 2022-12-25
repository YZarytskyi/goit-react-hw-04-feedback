import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      {total ? (
        <ul className={s.list}>
          <li className={s.listItem}>
            Good: <span>{good}</span>
          </li>
          <li className={s.listItem}>
            Neutral: <span>{neutral}</span>
          </li>
          <li className={s.listItem}>
            Bad: <span>{bad}</span>
          </li>
          <li className={s.listItem}>
            Total: <span>{total}</span>
          </li>
          <li className={s.listItem}>
            Positive feedback: <span>{positivePercentage}%</span>
          </li>
        </ul>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
