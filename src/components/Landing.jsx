import React from 'react';
import Typist from 'react-typist';

import Button from './common/Button';
import Header from './common/Header';
import Section from './common/Section';
import Row from './common/Row';

const white = '#FFFFFF';
const darkGray = '#1B1B1B';
const kaistBlue = '#004191';
const lightBlue = '#EBF2F8';

function Landing() {
  return (
    <div>
      <Section
        backgroundColor={kaistBlue}
        style={{ height: 200 }}
      >
        <Row style={{ textAlign: 'center' }}>
          <Typist
            startDelay={0}
            avgTypingDelay={400}
            cursor={{ show: false }}
          >
            <Typist.Delay ms={200} />
            <h1
              style={{ color: white }}
            >
              여성과
            </h1>
          </Typist>
          <Header
            text="함께하는 KAIST."
            color={white}
            centered
          />
        </Row>
      </Section>
      <Section backgroundColor={white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="뉴스" centered />
          <div style={{ height: 100 }} />
          <Button link="/" color={kaistBlue}>
            뉴스 더 보기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={lightBlue}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="유관 기관" centered />
          <div style={{ height: 100 }} />
          <Button link="/" color={kaistBlue} outline>
            기관 더 보기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={white}>
        <Row style={{ textAlign: 'center' }}>
          <Header text="도움 요청하기" centered />
          <p
            style={{
              marginTop: '2rem',
              marginBottom: '2rem',
              fontSize: '1.2rem',
            }}
          >
            혐오, 차별을 접했거나 피해를 받고 있다면 <br />
            포용성위원회에 도움을 요청할 수 있습니다.
          </p>
          <Button link="/" color={kaistBlue}>
            도움 받기
          </Button>
        </Row>
      </Section>
      <Section backgroundColor={darkGray} />
    </div>
  );
}

export default Landing;
