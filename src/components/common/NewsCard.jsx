import React from 'react';
import PropTypes from 'prop-types';
import ryuImage from './../../static/ryu.png';

function NewsCard(props) {
  const {
    title,
    date,
    imagePath,
    size,
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
      margin: `${size * 0.8}rem`,
    },
    imageStyle: {
      width: '12rem',
      height: '12rem',
      display: 'inline-block',
    },
    titleStyle: {
      margin: '0.2rem',
      fontSize: `${size}rem`,
      wordWrap: 'break-word',
      whiteSpace: 'pre',
      width: '15rem',
    },
    dateStyle: {
      margin: '0.2rem',
      fontSize: `${size * 0.85}rem`,
    },
  };

  return (
    <div style={styles.boxStyle}>
      <div style={styles.imageStyle} />
      {/* <img style={styles.imageStyle} src={ryuImage} alt="professor" /> */}
      <div style={styles.contentStyle}>
        <h3 style={styles.titleStyle}>{title}</h3>
        <p style={styles.dateStyle}>{date}</p>
      </div>
    </div>
  );
}

NewsCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  imagePath: PropTypes.string,
  size: PropTypes.number,
};

NewsCard.defaultProps = {
  title: '즐거운 크리스마스, 과연 모두에게 즐거울까?',
  date: '2017-12-24',
  imagePath: './../../static/ryu.png',
  size: 1,
};

export default NewsCard;
