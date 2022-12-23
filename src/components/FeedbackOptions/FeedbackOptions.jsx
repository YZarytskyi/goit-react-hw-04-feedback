import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnContainer}>
      {options.map(el => {
        return (
          <button
            key={el}
            onClick={() => onLeaveFeedback(el)}
            className={s.btn}
          >
            {el}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
