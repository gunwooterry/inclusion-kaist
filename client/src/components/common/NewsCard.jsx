import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  imagePath: PropTypes.string,
};

const defaultProps = {
  imagePath: '',
};

function NewsCard(props) {
  const {
    title,
    date,
    imagePath,
  } = props;

  const styles = {
    boxStyle: {
      border: '0.1rem solid #EDEDED',
      borderRadius: '0.1rem',
      width: '100%',
      height: '12rem',
      margin: 'auto',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    contentStyle: {
      display: 'inline-block',
      verticalAlign: 'top',
      margin: '0.8rem',
    },
    imageStyle: {
      width: '30%',
      height: '12rem',
      display: 'inline-block',
    },
    titleStyle: {
      margin: '0.2rem',
      fontSize: '1rem',
      wordWrap: 'break-word',
      whiteSpace: 'initial',
      width: '15rem',
    },
    dateStyle: {
      margin: '0.2rem',
      fontSize: '0.85rem',
    },
  };

  return (
    <div style={styles.boxStyle}>
      <img style={styles.imageStyle} alt="professor" />
      <div style={styles.contentStyle}>
        <h3 style={styles.titleStyle}>{title}</h3>
        <p style={styles.dateStyle}>{"kdk"}</p>
      </div>
    </div>
  );
}

NewsCard.propTypes = propTypes;
NewsCard.defaultProps = defaultProps;

export default NewsCard;
