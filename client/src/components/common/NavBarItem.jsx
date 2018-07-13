import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { colors } from '../../static/constants';

import logoImg from '../../static/images/logo.png';

const propTypes = {
  text: PropTypes.string,
  logo: PropTypes.bool,
  link: PropTypes.string.isRequired,
  right: PropTypes.bool,
  isTop: PropTypes.bool.isRequired,
  children: PropTypes.node,
  bold: PropTypes.bool,
};

const defaultProps = {
  text: '',
  logo: false,
  right: false,
  children: '',
  bold: false,
};

function NavBarItem(props) {
  const {
    text,
    link,
    logo,
    right,
    isTop,
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
    imgStyle: {
      width: '4rem',
    },
  };

  const style = {
    ...styles.navBarItem,
    ...right && styles.right,
    ...isTop ? styles.top : styles.scrolling,
  };

  return (
    <NavLink to={link} style={style}>
      { logo ? <img style={styles.imgStyle} src={logoImg} /> : text }
    </NavLink>
  );
}

NavBarItem.propTypes = propTypes;
NavBarItem.defaultProps = defaultProps;

export default NavBarItem;
