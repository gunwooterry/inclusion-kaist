import React from 'react';

import Button from './common/Button';
import Column from './common/Column';
import Header from './common/Header';
import ProfileCard from './common/ProfileCard';
import Section from './common/Section';
import Row from './common/Row';

import { colors } from '../static/constants';
import faculties from '../static/faculties';

import headerImage from '../static/images/background.jpg';
import researchIcon from '../static/images/icon-research.png';
import educationIcon from '../static/images/icon-education.png';
import opinionIcon from '../static/images/icon-opinion.png';

const styles = {
  row: {
    textAlign: 'center',
  },
  container: {
    marginTop: '3rem',
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
    backgroundPosition: '50%',
  },
  topSection: {
    paddingTop: '14rem',
    paddingBottom: '6rem',
  },
  icon: {
    width: '8rem',
    height: '8rem',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
};

const renderProfiles = persons => persons.map(person => (
  <Column xs={12} sm={4} md={4} lg={3}>
    <ProfileCard
      name={person.name}
      dept={person.dept}
      position={person.position}
      imagePath={person.imagePath}
    />
  </Column>
));

function Landing() {
  return (
    <div>
      <div style={styles.topSectionBg}>
        <Section
          backgroundColor="rgba(0, 65, 145, 0.8)"
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
              <p style={Object.assign({ color: colors.white }, styles.paragraph)}>
                KAIST 포용성위원회는 KAIST 모든 구성원 사이의 소통을 통해 학내 다양성 및 포용성을 존중하는
                문화 조성을 목적으로 만들어진 부총장 직속 자문기구입니다.
              </p>
            </div>
          </Row>
        </Section>
      </div>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={styles.row}>
          <Header text="포용성위원회가 하는 일" centered />
          <div style={styles.container}>
            <Column xs={12} sm={4} md={4} lg={4}>
              <img src={researchIcon} style={styles.icon} alt="lecture" />
              <p style={styles.paragraph}>
                다양성 보호 및 증진을 위한 <br />
                정책연구 및 자문 수행
              </p>
            </Column>
            <Column xs={12} sm={4} md={4} lg={4}>
              <img src={educationIcon} style={styles.icon} alt="lecture" />
              <p style={styles.paragraph}>
                다양성 보호 및 증진을 위한 <br />
                교육 및 홍보
              </p>
            </Column>
            <Column xs={12} sm={4} md={4} lg={4}>
              <img src={opinionIcon} style={styles.icon} alt="opinion" />
              <p style={styles.paragraph}>
                다양한 학내 기구와 함께 <br />
                모든 구성원을 포괄하는 <br />
                다양성 관련 의견 수렴
              </p>
            </Column>
          </div>
        </Row>
      </Section>
      <Section backgroundColor={colors.white}>
        <Row style={styles.row}>
          <Header text="사람들" centered />
          <div style={styles.container}>
            {renderProfiles(faculties)}
          </div>
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={styles.row}>
          <Header text="도움 요청하기" centered />
          <div style={styles.container}>
            <p style={styles.paragraph}>
              혐오, 차별을 접했거나 피해를 받고 있다면 포용성위원회에 도움을 요청할 수 있습니다.
            </p>
          </div>
          <Button link="/report/" color={colors.kaistBlue}>
            도움 받기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={colors.darkGray} />
    </div>
  );
}

export default Landing;
