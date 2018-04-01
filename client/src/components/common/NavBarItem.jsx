import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { colors } from '../../static/constants';

const propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  right: PropTypes.bool,
  isTop: PropTypes.bool.isRequired,
  children: PropTypes.node,
  bold: PropTypes.bool,
};

const defaultProps = {
  text: '',
  right: false,
  children: '',
  bold: false,
};

function NavBarItem(props) {
  const {
    text,
    link,
    right,
    isTop,
    children,
    bold,
  } = props;

  const styles = {
    navBarItem: {
      margin: '0 1rem',
      textDecoration: 'none',
      fontWeight: bold ? '600' : '300',
    },
    right: {
      float: 'right',
    },
    top: {
      color: colors.white,
    },
    scrolling: {
      color: colors.black,
    },
  };

  const style = {
    ...styles.navBarItem,
    ...right && styles.right,
    ...isTop ? styles.top : styles.scrolling,
  };

  return (
    <NavLink to={link} style={style}>
      {text !== '' ? text : children}
    </NavLink>
  );
}

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;
