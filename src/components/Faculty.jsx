import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import ProfileCard from './common/ProfileCard';

import facultyList from '../static/FacultyList';
import staffList from '../static/StaffList';
import { colors } from '../static/constants';

const renderProfiles = persons => persons.map(person => (
  <Column xs="12" sm="4" md="4" lg="3">
    <ProfileCard
      name={person.name}
      dept={person.dept}
      position={person.position}
      imagePath={person.imagePath}
    />
  </Column>
));

function Faculty() {
  return (
    <div>
      <Section backgroundColor={colors.white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="Faculties" centered />
          {renderProfiles(facultyList)}
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="Special Thanks To" centered />
          {renderProfiles(staffList)}
        </Row>
      </Section>
    </div>
  );
}

export default Faculty;
