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

  const xsStyle = Object.assign(
    {},
    styles.row,
    styles.xs,
    props.style,
  );

  const smStyle = Object.assign(
    {},
    styles.row,
    styles.sm,
    props.style,
  );

  const mdStyle = Object.assign(
    {},
    styles.row,
    styles.md,
    props.style,
  );

  const lgStyle = Object.assign(
    {},
    styles.row,
    styles.lg,
    props.style,
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
