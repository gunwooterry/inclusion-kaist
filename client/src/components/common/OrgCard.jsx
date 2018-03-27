import React from 'react';
import PropTypes from 'prop-types';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import MdLocationOn from 'react-icons/lib/md/location-on';

import { colors } from '../../static/constants';
import SmallButton from './SmallButton';

function OrgCard(props) {
  const {
    name,
    link,
    mail,
    number,
    location,
    description,
  } = props;

  const styles = {
    box: {
      margin: '8px auto 20px',
      verticalAlign: 'top',
      padding: '19px 20px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
    },
    image: {
      width: '100%',
      height: '15rem',
      objectFit: 'cover',
    },
    name: {
      margin: '0.2rem 0 1rem 0.3rem',
      fontSize: '1.5rem',
    },
    pos: {
      margin: '0.2rem 0.3rem 0.5rem 0.3rem',
      fontSize: '0.9rem',
    },
    content: {
      margin: '0.2rem 0.3rem 0.5rem 0.3rem',
      fontSize: '1.1rem',
      minHeight: '5rem',
    },
    button: {
      alignSelf: 'center',
      textAlign: 'right',
      margin: '1.5rem 0 0.2rem 0',
    },
  };

  return (
    <div style={styles.box}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.content}>{description}</p>
      <p style={styles.pos}><MdLocalPhone /> {number}</p>
      <p style={styles.pos}><MdMailOutline /> {mail}</p>
      <p style={styles.pos}><MdLocationOn /> {location}</p>
      <div style={styles.button}>
        <SmallButton link={link} color={colors.kaistBlue}>
          바로가기
        </SmallButton>
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
