import React from 'react';
import PropTypes from 'prop-types';

import NavBarItem from './NavBarItem';
import Row from './Row';

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
      padding: '1rem 0',
    },

    top: {
      background: 'transparent',
      color: '#FFF',
    },

    scrolling: {
      backgroundColor: '#FFF',
      color: '#000',
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

export default NavBar;