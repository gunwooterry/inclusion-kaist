import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    link,
    color,
    outline,
    children,
  } = props;

  const styles = {
    button: {
      fontSize: '1em',
      fontWeight: 500,
      margin: '0.4em',
      padding: '1em 2em',
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

  const style = Object.assign(
    {},
    styles.button,
    outline ? styles.outline : styles.solid,
    props.style,
  );

  return (
    <a
      href={link}
      style={style}
    >
      {children}
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

Button.defaultProps = {
  outline: false,
  style: {},
  children: '',
};

export default Button;
