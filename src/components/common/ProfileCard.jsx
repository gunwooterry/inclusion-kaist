import React from 'react';
import PropTypes from 'prop-types';
import ryuImage from './../../static/ryu.png';
import Column from './Column';


function ProfileCard(props) {
  const {
    name,
    dept,
    position,
    imagePath,
    size,
  } = props;

  const styles = {
    boxStyle: {
      border: '0.1rem solid #ededed',
      borderRadius: '0.1rem',
      height: '21rem', // width의 4/3 유
      margin: 'auto',
      textAlign: 'left',
      verticalAlign: 'top',
    },
    imageStyle: {
      width: '100%',
      height: '15rem',
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
    <div style={styles.boxStyle}>
      <img style={styles.imageStyle} src={ryuImage} alt="professor" />
      <div style={{margin: '0 auto'}} >
      <h3 style={styles.nameStyle}>{name}</h3>
      <p style={styles.posStyle}>{dept}</p>
      <p style={styles.posStyle}>{position}</p>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  dept: PropTypes.string,
  position: PropTypes.string,
  imagePath: PropTypes.string,
  size: PropTypes.number,
};

ProfileCard.defaultProps = {
  name: 'Sukyung Ryu',
  dept: 'KAIST SoC',
  position: 'Professor',
  imagePath: './../../static/ryu.png',
  size: 1.2,
};

export default ProfileCard;
