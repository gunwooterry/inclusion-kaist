import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: '#000',
  size: 1.8,
};

function Header(props) {
  const {
    text,
    color,
    size,
  } = props;

  const style = {
    color,
    letterSpacing: -0.8,
    fontWeight: 700,
    fontSize: `${size}rem`,
  };

  return <h1 style={style}>{text}</h1>;
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
