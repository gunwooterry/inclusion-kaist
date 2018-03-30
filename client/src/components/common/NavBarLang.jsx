import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { colors } from '../../static/constants';

const propTypes = {
  text: PropTypes.string,
  right: PropTypes.bool,
  work: PropTypes.node,
  isTop: PropTypes.bool.isRequired,
  children: PropTypes.node,
  bold: PropTypes.bool,
};

const defaultProps = {
  text: '',
  right: false,
  work: null,
  children: '',
  bold: false,
};

function NavBarLang(props) {
  const {
    text,
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

  const style = Object.assign(
    {},
    styles.navBarItem,
    right && styles.right,
    isTop ? styles.top : styles.scrolling,
  );

  return (
    <a style={style} onClick={props.work}>
      {text !== '' ? text : children}
    </a>
  );
}

NavBarLang.propTypes = propTypes;
NavBarLang.defaultProps = defaultProps;

export default NavBarLang;
