import { Component } from 'react';
import s from './Section.module.scss'
import PropTypes from 'prop-types';

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section className={s.section}>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
