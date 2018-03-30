import React from 'react';
import PropTypes from 'prop-types';

import NavBarLang from './NavBarLang';
import NavBarItem from './NavBarItem';
import Row from './Row';

import { colors } from '../../static/constants';

const propTypes = {
  isTop: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  children: '',
};

function NavBar(props) {
  const {
    isTop,
    children,
  } = props;

  const styles = {
    navBar: {
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '18px 0',
      zIndex: 1,
    },

    top: {
      background: 'transparent',
      color: colors.white,
    },

    main: {
      background: colors.kaistBlue,
      color: colors.white,
    },

    scrolling: {
      backgroundColor: colors.white,
      color: colors.black,
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.12)',
    },
  };

  const style = Object.assign(
    {},
    styles.navBar,
    isTop ? styles.top : styles.scrolling,
  );

  return (
    <div
      style={style}
    >
      <Row>
        {children}
      </Row>
    </div>
  );
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
NavBar.Item = NavBarItem;
NavBar.Lang = NavBarLang;

export default NavBar;
