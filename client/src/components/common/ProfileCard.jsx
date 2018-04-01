import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

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
    box: {
      margin: '15px auto',
      textAlign: 'left',
      verticalAlign: 'top',
      backgroundColor: 'transparent',
    },
    textBox: {
      padding: '4px 12px',
      margin: '0 auto',
    },
    image: {
      width: '100%',
      height: '15rem',
      objectFit: 'cover',
    },
    name: {
      margin: '0.2rem',
      fontSize: `${size}rem`,
      fontWeight: 600,
    },
    pos: {
      margin: '0.2rem',
      fontSize: `${size * 0.85}rem`,
      fontWeight: 300,
    },
  };

  return (
    <div>
      <MediaQuery query="(max-width: 768px)">
        <div style={{ ...styles.box, margin: '8px auto' }}>
          <div style={styles.textBox}>
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.pos}>{dept}</p>
            <p style={styles.pos}>{position}</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(min-width: 769px)">
        <div style={styles.box}>
          <img style={styles.image} src={imagePath} alt="professor" />
          <div style={styles.textBox}>
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.pos}>{dept}</p>
            <p style={styles.pos}>{position}</p>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
