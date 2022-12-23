import { Component } from 'react';
import Notification from '../Notification/Notification';
import s from './Statistics.module.scss'
import PropTypes from 'prop-types';


export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <h2 className={s.title}>Statistics</h2>
        {total ? (
          <ul className={s.list}>
            <li className={s.listItem}>Good: <span>{good}</span></li>
            <li className={s.listItem}>Neutral: <span>{neutral}</span></li>
            <li className={s.listItem}>Bad: <span>{bad}</span></li>
            <li className={s.listItem}>Total: <span>{total}</span></li>
            <li className={s.listItem}>Positive feedback: <span>{positivePercentage}%</span></li>
          </ul>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
