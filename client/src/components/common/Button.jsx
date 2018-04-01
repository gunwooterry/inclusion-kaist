import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  outline: false,
  onClick: () => {},
  style: {},
  children: '',
};

function Button(props) {
  const {
    link,
    color,
    outline,
    onClick,
    children,
  } = props;

  const styles = {
    button: {
      fontSize: '1rem',
      margin: '0.4rem',
      padding: '1rem 2rem',
      textDecoration: 'none',
      display: 'inline-block',
    },
    solid: {
      color: '#FFF',
      backgroundColor: color,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12)',
    },
    outline: {
      color,
      border: `2px solid ${color}`,
      background: 'transparent',
    },
  };

  const style = {
    ...styles.button,
    ...outline ? styles.outline : styles.solid,
    ...props.style,
  };

  return (
    <a href={link} style={style} onClick={onClick}>
      {children}
    </a>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
