import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';
import Column from './common/Column';
import ProfileCard from './common/ProfileCard';

import facultyList from './../static/FacultyList';

const renderFacultyList = facultyList.map((person) => {
  return (
    <Column xs="3" sm="3" md="3" lg="3">
      <ProfileCard name={person.name} dept={person.dept} position={person.position} imagePath={person.imagePath} />
    </Column>
  );
})

const white = '#FFFFFF';

function Faculty() {
  return (
    <Section backgroundColor={white}>
      <Row style={{ textAlign: 'center' }}>
        <Header text="Faculties" centered />
      </Row>
      <Row>
        {renderFacultyList}
      </Row>
    </Section>
  );
}

export default Faculty;
