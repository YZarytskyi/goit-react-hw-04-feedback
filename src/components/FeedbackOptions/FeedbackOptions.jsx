import { Component } from 'react';
import s from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.btnContainer}>
        {this.props.options.map(el => {
          return (
            <button
              key={el}
              onClick={() => this.props.onLeaveFeedback(el)}
              className={s.btn}
            >
              {el}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
