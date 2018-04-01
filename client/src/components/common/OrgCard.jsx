import React from 'react';
import PropTypes from 'prop-types';
import MdLocalPhone from 'react-icons/lib/md/local-phone';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import MdLocationOn from 'react-icons/lib/md/location-on';

import { colors } from '../../static/constants';
import SmallButton from './SmallButton';

const propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.string,
};

const defaultProps = {
  link: '',
  email: '',
  phone: '',
  location: '',
  description: '',
};

function OrgCard(props) {
  const {
    name,
    link,
    email,
    phone,
    location,
    description,
  } = props;

  const styles = {
    box: {
      margin: '8px auto 20px',
      verticalAlign: 'top',
      padding: '19px 20px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
      textAlign: 'left',
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
      <p style={styles.pos}><MdLocalPhone /> {phone}</p>
      <p style={styles.pos}><MdMailOutline /> {email}</p>
      <p style={styles.pos}><MdLocationOn /> {location}</p>
      <div style={styles.button}>
        <SmallButton link={link} color={colors.kaistBlue}>
          바로가기
        </SmallButton>
      </div>
    </div>

  );
}

OrgCard.propTypes = propTypes;
OrgCard.defaultProps = defaultProps;

export default OrgCard;
