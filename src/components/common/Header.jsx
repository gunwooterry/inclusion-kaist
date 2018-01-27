import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const {
    text,
    color,
    size,
  } = props;

  const style = {
    color,
    letterSpacing: -1.2,
    fontWeight: 700,
    fontSize: `${size}rem`,
  };

  return (
    <h1
      style={style}
    >
      {text}
    </h1>
  );
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Header.defaultProps = {
  color: '#000',
  size: 2,
};

export default Header;
