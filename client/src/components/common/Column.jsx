import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

const defaultProps = {
  children: '',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
};

function Column(props) {
  const {
    children,
    xs,
    sm,
    md,
    lg,
  } = props;

  const styles = {
    col: {
      margin: '0.8% 1%',
      float: 'left',
    },
    1: {
      width: '6.333%',
    },
    2: {
      width: '14.666%',
    },
    3: {
      width: '22.999%',
    },
    4: {
      width: '31.332%',
    },
    5: {
      width: '39.665%',
    },
    6: {
      width: '47.998%',
    },
    7: {
      width: '56.331%',
    },
    8: {
      width: '64.664%',
    },
    9: {
      width: '72.997%',
    },
    10: {
      width: '81.33%',
    },
    11: {
      width: '89.663%',
    },
    12: {
      width: '97.999%',
    },
  };

  return (
    <div>
      <MediaQuery query="(max-width: 768px)">
        <div style={{ ...styles[xs], ...styles.col }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px) and (max-width: 992px)">
        <div style={{ ...styles[sm], ...styles.col }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 993px) and (max-width: 1200px)">
        <div style={{ ...styles[md], ...styles.col }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1200px)">
        <div style={{ ...styles[lg], ...styles.col }}>
          {children}
        </div>
      </MediaQuery>
    </div>
  );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
