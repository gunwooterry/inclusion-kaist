import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  right: PropTypes.bool,
  isTop: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  text: '',
  right: false,
  children: '',
};

function NavBarItem(props) {
  const {
    text,
    link,
    right,
    isTop,
    children,
  } = props;

  const styles = {
    navBarItem: {
      margin: '0 1rem',
      textDecoration: 'none',
    },

    right: {
      float: 'right',
    },

    top: {
      color: '#FFF',
    },

    scrolling: {
      color: '#000',
    },
  };

  const style = Object.assign(
    {},
    styles.navBarItem,
    right && styles.right,
    isTop ? styles.top : styles.scrolling,
  );

  return (
    <a
      href={link}
      style={style}
    >
      {text !== '' ? text : children}
    </a>
  );
}

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;
