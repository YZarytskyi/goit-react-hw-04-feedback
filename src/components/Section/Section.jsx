import PropTypes from 'prop-types';
import s from './Section.module.scss'

const Section = ({ title, children }) => {
  return(
    <section className={s.section}>
    <h1>{title}</h1>
    {children}
  </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
