import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Textarea from 'react-textarea-autosize';

import { colors } from '../static/constants';
import Button from './common/Button';
import Column from './common/Column';
import Header from './common/Header';
import Row from './common/Row';
import Section from './common/Section';

const { Element, scroller, animateScroll } = Scroll;
const half = window.innerHeight * 0.3;
const lastQuater = window.innerHeight * 0.55;

const scrollToElement = (name) => {
  scroller.scrollTo(name, {
    duration: 500,
    delay: 100,
    smooth: true,
    offset: -half,
    ignoreCancelEvents: true,
  });
};

const formatPhoneNumber = (phone) => {
  const digits = phone.split('');
  if (digits.length >= 11) {
    digits.splice(7, 0, '-');
  } else if (digits.length > 6) {
    digits.splice(6, 0, '-');
  }
  if (digits.length > 2) {
    digits.splice(3, 0, '-');
  }
  return digits.join('');
};

const styles = {
  centered: {
    textAlign: 'center',
  },
  topSection: {
    paddingTop: '8rem',
    paddingBottom: '4rem',
  },
  section: {
    padding: '4rem 0',
  },
  scrollContainer: {
    scrollSnapType: 'y mandatory',
  },
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
    overflow: 'auto',
  },
  translucent: {
    opacity: 0.2,
  },
  selectBox: {
    margin: '8px auto 8px',
    textAlign: 'center',
    verticalAlign: 'top',
    padding: '19px 20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
  },
  selectBoxText: {
    fontSize: '1.5rem',
    fontWeight: 400,
  },
  textarea: {
    borderColor: colors.gray,
    borderWidth: 1,
    padding: '0.8rem',
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: '160%',
    width: '90%',
    maxWidth: 900,
    outline: 'none',
  },
  paragraph: {
    fontSize: '1.2rem',
    fontWeight: 300,
    lineHeight: '160%',
  },
  phoneInput: {
    borderWidth: 0,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    padding: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '160%',
    width: 300,
    outline: 'none',
  },
};

class Report extends Component {
  constructor() {
    super();
    this.state = {
      focus: 'select',
      phoneNumber: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // eslint-disable-next-line class-methods-use-this
  onSubmit() {
    // add http request
  }

  handleScroll() {
    const { focus } = this.state;
    const selectPos = this.selectNode.getBoundingClientRect();
    const phonePos = this.phoneNode.getBoundingClientRect();

    let newFocus = 'explain';
    if (selectPos.y > -selectPos.height / 3) {
      newFocus = 'select';
    } else if (phonePos.y < lastQuater && phonePos.y > -phonePos.height / 2) {
      newFocus = 'phone';
    }

    if (focus !== newFocus) {
      this.setState({ focus: newFocus });
    }
  }

  render() {
    const { focus, phoneNumber } = this.state;
    const reportOptions = [
      { id: 1, text: '사건을 제보할래요' },
      { id: 2, text: '상담을 받고 싶어요' },
      { id: 3, text: '대화 상대가 필요해요' },
    ];

    return (
      <div style={styles.scrollContainer}>
        <Section
          backgroundColor={colors.lightBlue}
          style={styles.topSection}
        >
          <Row style={styles.centered}>
            <Header
              text="약간의 용기로 삶을 바꿀 수 있습니다."
              color={colors.black}
              size={2.5}
              centered
            />
          </Row>
        </Section>
        <Element
          name="select"
          style={Object.assign({}, focus !== 'select' && styles.translucent)}
          onClick={() => scrollToElement('select')}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.selectNode = node; }}
          >
            <Row style={styles.centered}>
              <Header text="어떤 도움이 필요하신가요?" />
              <div style={styles.container}>
                {reportOptions.map(option => (
                  <Column xs={12} sm={4} md={4} lg={4} key={option.id}>
                    <div style={styles.selectBox}>
                      <h3 style={styles.selectBoxText}>{option.text}</h3>
                    </div>
                  </Column>
                ))}
              </div>
            </Row>
          </Section>
        </Element>
        <Element
          name="explain"
          style={Object.assign({}, focus !== 'explain' && styles.translucent)}
          onClick={() => scrollToElement('explain')}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.explainNode = node; }}
          >
            <Row>
              <Header text="일어난 일에 대해 자세히 설명해 주세요." />
              <div style={styles.container}>
                <Textarea
                  style={styles.textarea}
                  minRows={4}
                  placeholder="여기에 응답을 작성합니다."
                />
              </div>
            </Row>
          </Section>
        </Element>
        <Element
          name="phone"
          style={Object.assign({}, focus !== 'phone' && styles.translucent)}
          onClick={() => scrollToElement('phone')}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.phoneNode = node; }}
          >
            <Row>
              <Header text="문제 해결을 위해 연락처를 여쭤 봐도 될까요?" />
              <p style={styles.paragraph}>
                부담이 된다면 남기지 않으셔도 됩니다.
              </p>
              <div style={styles.container}>
                <input
                  type="tel"
                  style={styles.phoneInput}
                  onChange={event => this.setState({ phoneNumber: event.target.value.replace(/-/g, '') })}
                  value={formatPhoneNumber(phoneNumber)}
                />
              </div>
            </Row>
          </Section>
        </Element>
        <Section style={{ paddingTop: 0 }}>
          <Row style={styles.centered}>
            <Button
              color={colors.kaistBlue}
              style={{ cursor: 'pointer' }}
              onClick={() => this.onSubmit()}
            >
              제출
            </Button>
          </Row>
        </Section>
      </div>
    );
  }
}


export default Report;
