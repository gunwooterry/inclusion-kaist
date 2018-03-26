import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  outline: false,
  style: {},
  children: '',
};

function SmallButton(props) {
  const {
    link,
    color,
    outline,
    children,
  } = props;

  const styles = {
    button: {
      fontSize: '1rem',
      margin: '0.4rem',
      padding: '0.5rem 1rem',
      textDecoration: 'none',
      display: 'block',
      fontWeight: '300',
      textAlign: 'center',
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

SmallButton.propTypes = propTypes;
SmallButton.defaultProps = defaultProps;

export default SmallButton;
