import React from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

const propTypes = {
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  style: {},
  children: '',
};

const styles = {
  row: {
    maxWidth: '1080px',
    zoom: 1,
    margin: 'auto',
  },
  before: {
    content: '',
    display: 'table',
  },
  after: {
    clear: 'both',
    content: '',
    display: 'table',
  },
  xs: {
    paddingLeft: '0%',
    paddingRight: '0%',
  },
  sm: {
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  md: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  lg: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
};

function Row(props) {
  const {
    style,
    children,
  } = props;

  const rowStyle = { ...styles.row, ...style };

  return (
    <div>
      <div style={styles.before} />
      <MediaQuery query="(max-width: 768px)">
        <div style={{ ...rowStyle, ...styles.xs }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px) and (max-width: 992px)">
        <div style={{ ...rowStyle, ...styles.sm }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 993px) and (max-width: 1200px)">
        <div style={{ ...rowStyle, ...styles.md }}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1200px)">
        <div style={{ ...rowStyle, ...styles.lg }}>
          {children}
        </div>
      </MediaQuery>
      <div style={styles.after} />
    </div>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
