import PropTypes from 'prop-types';
import s from './Notification.module.scss';

const Notification = ({ message }) => {
  return <p className={s.text}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
