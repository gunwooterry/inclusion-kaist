import React from 'react';

import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';

import { colors } from '../static/constants';

const styles = {
  row: {
    textAlign: 'center',
  },
  topSection: {
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
};

function Resources() {
  return (
    <div>
      <Section
        backgroundColor={colors.kaistBlue}
        style={styles.topSection}
      >
        <Row style={styles.row}>
          <Header
            text="자료"
            color={colors.white}
            size={2.5}
            centered
          />
        </Row>
      </Section>
    </div>
  );
}

export default Resources;
