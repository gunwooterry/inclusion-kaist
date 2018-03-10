import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import OrgCard from './common/OrgCard';

import nationalOrgList from './../static/nationalOrgList';
import kaistOrgList from './../static/kaistOrgList';

const renderFacultyList = nationalOrgList.map((organization) => {
  return (
    <Column xs="12" sm="4" md="4" lg="3">
      <OrgCard name={organization.name} number={organization.number} link={organization.link} imagePath={organization.imagePath} />
    </Column>
  );
});

const renderStaffList = kaistOrgList.map((organization) => {
  return (
    <Column xs="12" sm="4" md="4" lg="3">
      <OrgCard blue name={organization.name} number={organization.number} link={organization.link} imagePath={organization.imagePath} />
    </Column>
  );
});

const white = '#FFFFFF';
const lightBlue = '#EBF2F8';

function Organization() {
  return (
    <div>
      <Section backgroundColor={white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="National Organization" centered />
        </Row>
        <Row>
          {renderFacultyList}
        </Row>
      </Section>
      <Section backgroundColor={lightBlue}>
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
