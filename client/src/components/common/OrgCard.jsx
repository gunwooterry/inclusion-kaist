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
    link,
    mail,
    number,
    location,
    description,
    size,
  } = props;

  const styles = {
    boxStyle: {
      border: '1px solid #EEEEEE',
      boxShadow: '0 0 2px #AAAAAA',
      borderRadius: '0.1rem',
      margin: '15px auto',
      textAlign: 'left',
      verticalAlign: 'top',
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
    <div style={{ ...styles.boxStyle, margin: '8px auto' }}>
      <div style={{ padding: '4px 12px', margin: '0 auto' }}>
        <h3 style={styles.nameStyle}>{name}</h3>
        <p style={styles.posStyle}>{number}</p>
        <p style={styles.posStyle}>{mail}</p>
        <p style={styles.posStyle}>{location}</p>
        <p style={styles.posStyle}>{description}</p>
        <a style={styles.posStyle} href={link}>바로가기</a>
      </div>
    </div>

  );
}

OrgCard.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  mail: PropTypes.string,
  number: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.number,
};

OrgCard.defaultProps = {
  name: '인권윤리센터',
  link: 'https://humanrights.kaist.ac.kr',
  mail: 'humanrights@kaist.ac.kr',
  number: '042-350-1004',
  location: '교육지원동(W8) 1115',
  description: '인권/성희롱/윤리 관련 상담/처리/예방교육/정책개발',
};

export default OrgCard;
