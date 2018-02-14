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

function Row(props) {
  const {
    children,
  } = props;

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

  const rowStyle = Object.assign(
    {},
    styles.row,
    props.style,
  );

  const xsStyle = Object.assign(
    rowStyle,
    styles.xs,
  );

  const smStyle = Object.assign(
    rowStyle,
    styles.sm,
  );

  const mdStyle = Object.assign(
    rowStyle,
    styles.md,
  );

  const lgStyle = Object.assign(
    rowStyle,
    styles.lg,
  );

  return (
    <div>
      <div style={styles.before} />
      <MediaQuery query="(max-width: 768px)">
        <div style={xsStyle}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px) and (max-width: 992px)">
        <div style={smStyle}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 993px) and (max-width: 1200px)">
        <div style={mdStyle}>
          {children}
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1200px)">
        <div style={lgStyle}>
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
