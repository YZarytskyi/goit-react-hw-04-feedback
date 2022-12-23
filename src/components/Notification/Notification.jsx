import { Component } from 'react';
import s from './Notification.module.scss'
import PropTypes from 'prop-types';

export default class Notification extends Component {
  render() {
    return (
      <p className={s.text}>{this.props.message}</p>
    );
  };
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
