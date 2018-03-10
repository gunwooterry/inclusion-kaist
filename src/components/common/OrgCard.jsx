import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import parkImage from './../../static/park.png';
import Column from './Column';

const white = '#FFF';
const extraLightBlue = '#F8F8F8';

function OrgCard(props) {
  const {
    name,
    number,
    link,
    imagePath,
    size,
    blue,
  } = props;

  const styles = {
    boxStyle: {
      border: '1px solid #cccccc',
      borderRadius: '0.1rem',
      margin: '15px auto',
      textAlign: 'left',
      verticalAlign: 'top',
      backgroundColor: blue ? extraLightBlue : white,
    },
    imageStyle: {
      width: '100%',
      height: '15rem',
      objectFit: 'cover',
    },
    nameStyle: {
      margin: '0.2rem',
      fontSize: `${size}rem`,
    },
    posStyle: {
      margin: '0.2rem',
      fontSize: `${size * 0.85}rem`,
    },
  };

  return (
    <div>
      <MediaQuery query="(max-width: 768px)">
        <div style={{ ...styles.boxStyle, margin: '8px auto' }}>
          <div style={{ padding: '4px 12px', margin: '0 auto' }}>
            <h3 style={styles.nameStyle}>{name}</h3>
            <p style={styles.posStyle}>{number}</p>
            <a style={styles.posStyle} href={link}>바로가기</a>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <div style={styles.boxStyle}>
          <img style={styles.imageStyle} src={parkImage} alt="professor" />
          <div style={{ padding: '4px 12px', margin: '0 auto' }}>
            <h3 style={styles.nameStyle}>{name}</h3>
            <p style={styles.posStyle}>{number}</p>
            <a style={styles.posStyle} href={link}>바로가기</a>
          </div>
        </div>
      </MediaQuery>
    </div>

  );
}

OrgCard.propTypes = {
  name: PropTypes.string,
  dept: PropTypes.string,
  position: PropTypes.string,
  imagePath: PropTypes.string,
  size: PropTypes.number,
};

OrgCard.defaultProps = {
  name: 'Sukyung Ryu',
  dept: 'KAIST SoC',
  position: 'Professor',
  imagePath: './../../static/ryu.png',
  size: 1.2,
};

export default OrgCard;
