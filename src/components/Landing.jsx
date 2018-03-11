import React from 'react';
import Typist from 'react-typist';

import Button from './common/Button';
import Column from './common/Column';
import Header from './common/Header';
import NewsCard from './common/NewsCard';
import Section from './common/Section';
import Row from './common/Row';
import { colors } from '../static/constants';

const styles = {
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
    overflow: 'auto',
  },
};

function Landing() {
  return (
    <div>
      <Section
        backgroundColor={colors.kaistBlue}
        style={{ height: 200 }}
      >
        <Row style={{ textAlign: 'center' }}>
          <div>
            <Typist
              startDelay={0}
              avgTypingDelay={400}
              cursor={{ show: false }}
            >
              <Typist.Delay ms={200} />
              <h1
                style={{ color: colors.white }}
              >
                여성과
              </h1>
            </Typist>
            <Header
              text="함께하는 KAIST."
              color={colors.white}
              centered
            />
          </div>
        </Row>
      </Section>
      <Section backgroundColor={colors.white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="뉴스" centered />
          <div style={styles.container}>
            <Column xs={12} sm={12} md={6} lg={6}>
              <NewsCard />
            </Column>
            <Column xs={12} sm={12} md={6} lg={6}>
              <NewsCard />
            </Column>
          </div>
          <Button link="/" color={colors.kaistBlue}>
            뉴스 더 보기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={colors.lightBlue}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="유관 기관" centered />
          <div style={styles.container} />
          <Button link="/" color={colors.kaistBlue} outline>
            기관 더 보기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={colors.white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="도움 요청하기" centered />
          <div style={styles.container}>
            <p style={{ fontSize: '1.2rem' }}>
              혐오, 차별을 접했거나 피해를 받고 있다면 <br />
              포용성위원회에 도움을 요청할 수 있습니다.
            </p>
          </div>
          <Button link="/" color={colors.kaistBlue}>
            도움 받기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={colors.darkGray} />
    </div>
  );
}

export default Landing;
