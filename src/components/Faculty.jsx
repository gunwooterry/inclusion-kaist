import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import ProfileCard from './common/ProfileCard';

import facultyList from './../static/FacultyList';

const renderFacultyList = facultyList.map((person) => {
  return (
    <Column xs="6" sm="4" md="4" lg="3">
      <ProfileCard name={person.name} dept={person.dept} position={person.position} imagePath={person.imagePath} />
    </Column>
  );
});

const white = '#FFFFFF';
const lightBlue = '#EBF2F8';

function Faculty() {
  return (
    <div>
      <Section backgroundColor={white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="Faculties" centered />
        </Row>
        <Row>
          {renderFacultyList}
        </Row>
      </Section>
      <Section backgroundColor={lightBlue}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="Special Thanks To" centered />
        </Row>
        <Row>
          {renderFacultyList}
        </Row>
      </Section>
    </div>
  );
}

export default Faculty;
