import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import OrgCard from './common/OrgCard';
import Button from './common/Button';

import { colors } from '../static/constants';

const orgList = [
  {
    name: '인권윤리센터',
    link: 'https://humanrights.kaist.ac.kr',
    mail: 'humanrights@kaist.ac.kr',
    number: '042-350-1004',
    location: '교육지원동(W8) 1115',
    description: '인권/성희롱/윤리 관련 상담/처리/예방교육/정책개발',
  },
  {
    name: '인권윤리센터',
    link: 'https://humanrights.kaist.ac.kr',
    mail: 'humanrights@kaist.ac.kr',
    number: '042-350-1004',
    location: '교육지원동(W8) 1115',
    description: '인권/성희롱/윤리 관련 상담/처리/예방교육/정책개발',
  },
  {
    name: '인권윤리센터',
    link: 'https://humanrights.kaist.ac.kr',
    mail: 'humanrights@kaist.ac.kr',
    number: '042-350-1004',
    location: '교육지원동(W8) 1115',
    description: '인권/성희롱/윤리 관련 상담/처리/예방교육/정책개발',
  },
];

const renderOrgList = orgList.map(org => (
  <Column xs="12" sm="4" md="4" lg="4">
    <OrgCard
      name={org.name}
      link={org.link}
      mail={org.mail}
      number={org.number}
      location={org.location}
      description={org.description}
    />
  </Column>
));

const styles = {
  row: {
    textAlign: 'center',
  },
  topSection: {
    paddingTop: '6rem',
    paddingBottom: '4rem',
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
};

function Organization() {
  return (
    <div>
      <Section
        backgroundColor={colors.kaistBlue}
        style={styles.topSection}
      >
        <Row style={styles.row}>
          <Header
            text="학내 기구"
            color={colors.white}
            size={2.5}
            centered
          />
        </Row>
      </Section>
      <Section backgroundColor={colors.white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="학내기구 목록" centered />
          <div style={styles.container}>
            <p style={styles.paragraph}>
              어느 기구에 연락해야할 지 확실하지 않으면, 인권윤리센터에 연락하세요. 적합한 곳으로 연결해주실 거예요.
            </p>
          </div>
          {renderOrgList}
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={styles.row}>
          <Header text="익명으로 신고하기" centered />
          <div style={styles.container}>
            <p style={styles.paragraph}>
              익명으로 신고하고 싶다면, 아래 버튼을 클릭해 제보해주세요.
            </p>
          </div>
          <Button link="/report/" color={colors.kaistBlue}>
            제보하기
          </Button>
        </Row>
      </Section>
    </div>
  );
}

export default Organization;
