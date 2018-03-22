import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import OrgCard from './common/OrgCard';

import nationalOrgList from '../static/nationalOrgList';
import kaistOrgList from '../static/kaistOrgList';
import { colors } from '../static/constants';

const renderFacultyList = nationalOrgList.map(org => (
  <Column xs="12" sm="4" md="4" lg="3">
    <OrgCard
      name={org.name}
      number={org.number}
      link={org.link}
      imagePath={org.imagePath}
    />
  </Column>
));

const renderStaffList = kaistOrgList.map(org => (
  <Column xs="12" sm="4" md="4" lg="3">
    <OrgCard
      blue
      name={org.name}
      number={org.number}
      link={org.link}
      imagePath={org.imagePath}
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
          <Header text="National Organization" centered />
        </Row>
        <Row>
          {renderFacultyList}
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="KAIST Organization" centered />
        </Row>
        <Row>
          {renderStaffList}
        </Row>
      </Section>
    </div>
  );
}

export default Organization;
