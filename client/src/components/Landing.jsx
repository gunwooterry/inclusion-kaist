import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from './common/Button';
import Column from './common/Column';
import Header from './common/Header';
import ProfileCard from './common/ProfileCard';
import Section from './common/Section';
import Row from './common/Row';

import { colors } from '../static/constants';

import headerImage from '../static/images/background.jpg';
import researchIcon from '../static/images/icon-research.png';
import educationIcon from '../static/images/icon-education.png';
import opinionIcon from '../static/images/icon-opinion.png';

const propTypes = {
  lang: PropTypes.string.isRequired,
};

const styles = {
  row: {
    textAlign: 'center',
  },
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
    overflow: 'auto',
  },
  paragraph: {
    maxWidth: 500,
    margin: 'auto',
    fontSize: '1.2rem',
    fontWeight: 300,
    lineHeight: '160%',
  },
  topSectionBg: {
    backgroundImage: `url(${headerImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50%',
  },
  topSection: {
    paddingTop: '14rem',
    paddingBottom: '6rem',
  },
  icon: {
    width: '7rem',
    height: '7rem',
    marginTop: '3rem',
    marginBottom: '2rem',
  },
};

const text = {
  headers: {
    whatWeDo: {
      ko: '포용성위원회가 하는 일',
      en: 'What We Do',
    },
    people: {
      ko: '사람들',
      en: 'People',
    },
    help: {
      ko: '도움 요청하기',
      en: 'Request for Help',
    },
    helpButton: {
      ko: '제보하기',
      en: 'Report',
    },
  },
  descriptions: {
    purpose: {
      ko: 'KAIST 포용성위원회는 KAIST 모든 구성원 사이의 소통을 통해 학내 다양성 및 포용성을 존중하는 문화 조성을 목적으로 만들어진 부총장 직속 자문기구입니다.',
      en: 'The KAIST Committee on Social Inclusion is a provost advisory body mandated with a campus policy-making and consultative function. The main objective of the committee is to foster campus culture where diversity and inclusion are highly respected via seamless communication with every member of KAIST.',
    },
    whatWeDo1: {
      ko: '다양성 보호 및 증진을 위한 정책연구 및 자문 수행',
      en: 'Research and policy suggestions to promote and improve diversity',
    },
    whatWeDo2: {
      ko: '다양성 보호 및 증진을 위한 교육 및 홍보',
      en: 'Education and raising awareness on promoting and improving diversity',
    },
    whatWeDo3: {
      ko: '다양한 학내 기구와 함께 모든 구성원을 포괄하는 다양성 관련 의견 수렴',
      en: 'Gathering opinions and ideas on diversity-related issues from KAIST members with various KAIST organizations',
    },
    help: {
      ko: '혐오, 차별을 접했거나 피해를 받고 있다면 포용성위원회에 도움을 요청할 수 있습니다.',
      en: 'We are here to listen to your story. Please don\'t hesitate.',
    },
  },
};

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
    };
  }

  async componentWillMount() {
    const response = await axios.get('http://api.inclusion.kaist.ac.kr/people/');
    const people = response.data;
    this.setState({ people });
  }

  hexToRGB(hexColor, alpha) {
    const R = parseInt(hexColor.substring(1, 3), 16);
    const G = parseInt(hexColor.substring(3, 5), 16);
    const B = parseInt(hexColor.substring(5, 7), 16);
    return `rgba(${R},${G},${B},${alpha})`;
  }


  render() {
    const { lang } = this.props;
    const { people } = this.state;
    const renderPerson = person => (
      <Column key={person.id} xs={12} sm={4} md={4} lg={3}>
        <ProfileCard
          name={person[`name_${lang}`]}
          dept={person[`department_${lang}`]}
          position={person[`position_${lang}`]}
          imagePath={person.image}
        />
      </Column>
    );

    return (
      <div>
        <div style={styles.topSectionBg}>
          <Section
            backgroundColor={this.hexToRGB(colors.kaistBlue, 0.8)}
            style={styles.topSection}
          >
            <Row style={styles.row}>
              <Header
                text="We are here to listen."
                color={colors.white}
                size={3}
                centered
              />
              <div style={styles.container}>
                <p style={{ color: colors.white, ...styles.paragraph }}>
                  {text.descriptions.purpose[lang]}
                </p>
              </div>
            </Row>
          </Section>
        </div>
        <Section backgroundColor={colors.white}>
          <Row style={styles.row}>
            <Header text={text.headers.whatWeDo[lang]} centered />
            <div style={styles.container}>
              <Column xs={12} sm={4} md={4} lg={4}>
                <img src={researchIcon} style={styles.icon} alt="lecture" />
                <p style={styles.paragraph}>
                  {text.descriptions.whatWeDo1[lang]}
                </p>
              </Column>
              <Column xs={12} sm={4} md={4} lg={4}>
                <img src={educationIcon} style={styles.icon} alt="lecture" />
                <p style={styles.paragraph}>
                  {text.descriptions.whatWeDo2[lang]}
                </p>
              </Column>
              <Column xs={12} sm={4} md={4} lg={4}>
                <img src={opinionIcon} style={styles.icon} alt="opinion" />
                <p style={styles.paragraph}>
                  {text.descriptions.whatWeDo3[lang]}
                </p>
              </Column>
            </div>
          </Row>
        </Section>
        <Section backgroundColor={colors.lightBlue}>
          <Row style={styles.row}>
            <Header text={text.headers.people[lang]} centered />
            <div style={styles.container}>
              {people && people.map(renderPerson)}
            </div>
          </Row>
        </Section>
        <Section backgroundColor={colors.white}>
          <Row style={styles.row}>
            <Header text={text.headers.help[lang]} centered />
            <div style={styles.container}>
              <p style={styles.paragraph}>
                {text.descriptions.help[lang]}
              </p>
            </div>
            <Button link="/report/" color={colors.kaistBlue}>
              {text.headers.helpButton[lang]}
            </Button>
          </Row>
        </Section>
        <Section backgroundColor={colors.darkGray} />
      </div>
    );
  }
}

Landing.propTypes = propTypes;

const mapStateToProps = state => ({
  lang: state.setting.lang,
});

export default connect(mapStateToProps)(Landing);
