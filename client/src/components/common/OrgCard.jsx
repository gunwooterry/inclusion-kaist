import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import MdLocationOn from 'react-icons/lib/md/location-on';

import parkImage from './../../static/park.png';
import Column from './Column';
import { colors } from '../../static/constants';
import SmallButton from './SmallButton';

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
      margin: '25px auto',
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '15px 8px'
    },
    imageStyle: {
      width: '100%',
      height: '15rem',
      objectFit: 'cover',
    },
    nameStyle: {
      margin: '0.2rem 0 1rem 0',
      fontSize: `1.5rem`,
    },
    posStyle: {
      margin: '0.2rem 0.3rem 0.5rem 0.3rem',
      fontSize: `0.8rem`,
    },
    contentStyle: {
      margin: '0.2rem 0.3rem 0.5rem 0.3rem',
      fontSize: `1.1rem`,
      minHeight: '5rem',
    },
    buttonStyle: {
      alignSelf: 'center',
      textAlign: 'right',
      margin: '1.5rem 0 0.2rem 0',
    },
  };

  return (
    <div style={{ ...styles.boxStyle, margin: '8px auto 20px auto' }}>
      <div style={{ padding: '4px 12px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', display: 'block'}}><h3 style={styles.nameStyle}>{name}</h3></div>
        <p style={styles.contentStyle}>{description}</p>
        <p style={styles.posStyle}><MdLocalPhone />{"  " + number}</p>
        <p style={styles.posStyle}><MdMailOutline />{"  " + mail}</p>
        <p style={styles.posStyle}><MdLocationOn />{"  " + location}</p>
        <div style={styles.buttonStyle}>
          <SmallButton link={link} color={colors.kaistBlue}>
            바로가기
          </SmallButton>
        </div>
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
