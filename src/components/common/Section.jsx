import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  backgroundColor: PropTypes.string
};

const defaultProps = {
  backgroundColor: '#FFF',
};

function Section(props) {
  const {
    backgroundColor,
    children,
  } = props;

  const styles = {
    sectionStyle: {
      width: '100%',
      backgroundColor: backgroundColor,
      padding: '32px',
    },
  };

  const style = styles.sectionStyle

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
