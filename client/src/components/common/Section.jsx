import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  backgroundColor: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  backgroundColor: '#FFF',
  style: {},
  children: '',
};

function Section(props) {
  const {
    backgroundColor,
    children,
  } = props;

  const styles = {
    section: {
      width: '100%',
      backgroundColor,
      paddingTop: '2rem',
      paddingBottom: '3rem',
      clear: 'both',
      margin: '0px',
    },
  };

  const style = Object.assign(
    {},
    styles.section,
    props.style,
  );

  return (
    <div
      style={style}
    >
      {children}
    </div>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
