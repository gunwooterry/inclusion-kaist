import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import OrgCard from './common/OrgCard';
import Button from './common/Button';

import { colors } from '../static/constants';

const propTypes = {
  lang: PropTypes.string.isRequired,
};

const orgList = Array(12).fill({
  name: '인권윤리센터',
  link: 'https://humanrights.kaist.ac.kr',
  mail: 'humanrights@kaist.ac.kr',
  number: '042-350-1004',
  location: '교육지원동(W8) 1115',
  description: '인권/성희롱/윤리 관련 상담/처리/예방교육/정책개발',
});

const renderOrgList = orgList.map(org => (
  <Column xs="12" sm="6" md="4" lg="4">
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
  centered: {
    textAlign: 'center',
  },
  topSection: {
    paddingTop: '6rem',
    paddingBottom: '4rem',
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
};

const text = {
  headers: {
    top: {
      ko: '학내 기구',
      en: 'In-campus Organizations',
    },
    list: {
      ko: '학내 기구 목록',
      en: 'Organizations in KAIST',
    },
    report: {
      ko: '익명으로 신고하기',
      en: 'Report Anonymously',
    },
    reportButton: {
      ko: '제보하기',
      en: 'Report',
    },
  },
  descriptions: {
    list: {
      ko: '어느 기구에 연락해야할 지 확실하지 않으면, 인권윤리센터에 연락하세요. 적합한 곳으로 연결해주실 거예요.',
      en: 'If you are not sure where to talk to, contact the Center for Human Rights.',
    },
    report: {
      ko: '익명으로 신고하고 싶다면, 아래 버튼을 클릭해 제보해주세요.',
      en: 'If you want to report something anonymously, please click the button below.',
    },
  },
};

function Organization(props) {
  const { lang } = props;
  return (
    <div>
      <Section
        backgroundColor={colors.kaistBlue}
        style={styles.topSection}
      >
        <Row style={styles.centered}>
          <Header
            text={text.headers.top[lang]}
            color={colors.white}
            size={2.5}
            centered
          />
        </Row>
      </Section>
      <Section backgroundColor={colors.white}>
        <Row style={styles.centered}>
          <Header text={text.headers.list[lang]} centered />
          <div style={styles.container}>
            <p style={styles.paragraph}>
              {text.descriptions.list[lang]}
            </p>
          </div>
          {renderOrgList}
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={styles.centered}>
          <Header text={text.headers.report[lang]} centered />
          <div style={styles.container}>
            <p style={styles.paragraph}>
              {text.descriptions.report[lang]}
            </p>
          </div>
          <Button link="/report/" color={colors.kaistBlue}>
            {text.headers.reportButton[lang]}
          </Button>
        </Row>
      </Section>
    </div>
  );
}

Organization.propTypes = propTypes;

const mapStateToProps = state => ({
  lang: state.setting.lang,
});

export default connect(mapStateToProps)(Organization);

