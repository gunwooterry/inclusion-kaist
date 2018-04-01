import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  backgroundColor: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  reference: PropTypes.func,
};

const defaultProps = {
  backgroundColor: '#FFF',
  style: {},
  children: '',
  reference: undefined,
};

function Section(props) {
  const {
    backgroundColor,
    children,
    style,
    reference,
  } = props;

  const sectionStyle = {
    width: '100%',
    backgroundColor,
    paddingTop: '2rem',
    paddingBottom: '3rem',
    clear: 'both',
    margin: '0px',
  };

  return (
    <div
      style={{ ...sectionStyle, ...style }}
      ref={reference}
    >
      {children}
    </div>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
