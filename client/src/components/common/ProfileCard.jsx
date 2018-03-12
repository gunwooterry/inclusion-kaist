import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import ryuImage from './../../static/ryu.png';

const propTypes = {
  name: PropTypes.string.isRequired,
  dept: PropTypes.string,
  position: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  size: PropTypes.number,
};

const defaultProps = {
  dept: '',
  position: '',
  size: 1.2,
};

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
      margin: '15px auto',
      textAlign: 'left',
      verticalAlign: 'top',
      backgroundColor: 'transparent',
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
            <p style={styles.posStyle}>{dept}</p>
            <p style={styles.posStyle}>{position}</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <div style={styles.boxStyle}>
          <img style={styles.imageStyle} src={ryuImage} alt="professor" />
          <div style={{ padding: '4px 12px', margin: '0 auto' }}>
            <h3 style={styles.nameStyle}>{name}</h3>
            <p style={styles.posStyle}>{dept}</p>
            <p style={styles.posStyle}>{position}</p>
          </div>
        </div>
      </MediaQuery>
    </div>

  );
}

ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
