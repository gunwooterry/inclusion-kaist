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
  };

  return (
    <div>
      <MediaQuery query="(max-width: 768px)">
        <div style={{ ...styles.col, width: `${(xs * 8.333) - 2}%` }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px) and (max-width: 992px)">
        <div style={{ ...styles.col, width: `${(sm * 8.333) - 2}%` }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 993px) and (max-width: 1200px)">
        <div style={{ ...styles.col, width: `${(md * 8.333) - 2}%` }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1200px)">
        <div style={{ ...styles.col, width: `${(lg * 8.333) - 2}%` }}>
          {children}
        </div>
      </MediaQuery>
    </div>
  );
}

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
