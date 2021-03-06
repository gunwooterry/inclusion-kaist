import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import Textarea from 'react-textarea-autosize';
import axios from 'axios';

import { colors } from '../static/constants';
import Button from './common/Button';
import Column from './common/Column';
import Header from './common/Header';
import Row from './common/Row';
import Section from './common/Section';

const { Element, scroller } = Scroll;
const half = window.innerHeight * 0.3;
const lastQuater = window.innerHeight * 0.55;

const SELECT = 'select';
const EXPLAIN = 'explain';
const PHONE = 'phone';

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

const propTypes = {
  lang: PropTypes.string.isRequired,
};

const styles = {
  centered: {
    textAlign: 'center',
  },
  topSection: {
    paddingTop: '10rem',
    paddingBottom: '6rem',
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
  unfocused: {
    opacity: 0.2,
    cursor: 'pointer',
  },
  option: {
    width: '100%',
    margin: '8px auto 8px',
    backgroundColor: 'transparent',
    borderWidth: 0,
    textAlign: 'center',
    verticalAlign: 'top',
    padding: '25px 20px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.25)',
    outline: 'none',
    cursor: 'pointer',
  },
  optionText: {
    fontSize: '1.5rem',
    fontWeight: 400,
  },
  selected: {
    backgroundColor: colors.kaistBlue,
    color: colors.white,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  },
  textarea: {
    borderColor: colors.kaistBlue,
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
    borderBottomColor: colors.kaistBlue,
    borderBottomWidth: 1,
    padding: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '160%',
    width: 300,
    outline: 'none',
  },
};

const text = {
  headers: {
    top: {
      ko: '약간의 용기로 삶을 바꿀 수 있습니다.',
      en: 'Change your life with a little bit of courage.',
    },
    selectOption: {
      ko: '어떤 도움이 필요하신가요?',
      en: 'How can we help you?',
    },
    explain: {
      ko: '일어난 일에 대해 자세히 설명해 주세요.',
      en: 'Please tell us what happened.',
    },
    phone: {
      ko: '문제 해결을 위해 연락처를 여쭤 봐도 될까요?',
      en: 'May we ask your phone number to contact?',
    },
    submit: {
      ko: '제출',
      en: 'Submit',
    },
  },
  description: {
    placeholder: {
      ko: '여기에 응답을 작성합니다.',
      en: 'Start writing by clicking here.',
    },
    phone: {
      ko: '부담이 된다면 남기지 않으셔도 됩니다.',
      en: 'You may choose to leave it a blank.',
    },
    success: {
      ko: '제보해 주셔서 감사합니다. 곧 입력하신 연락처로 연락드리겠습니다.',
      en: 'Thank you for sharing. We will reach you soon.',
    },
  },
};

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: SELECT,
      reportType: -1,
      content: '',
      phone: '',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  onSelectOption(event, id) {
    if (this.state.focus === SELECT) {
      event.stopPropagation();
      this.setState({ reportType: id });
      scrollToElement(EXPLAIN);
    }
  }

  async onSubmit() {
    const { lang } = this.props;
    const { reportType, content, phone } = this.state;
    try {
      await axios.post('http://api.inclusion.kaist.ac.kr/reports/', {
        option: reportType,
        content,
        phone,
      });
      this.setState({ reportType: -1, content: '', phone: '' });
      // eslint-disable-next-line no-alert
      alert(text.description.success[lang]);
    } catch (e) {
      // Do something when failed
    }
  }

  handleScroll() {
    const { focus } = this.state;
    const selectPos = this.selectNode.getBoundingClientRect();
    const phonePos = this.phoneNode.getBoundingClientRect();

    let newFocus = EXPLAIN;
    if (selectPos.y > -selectPos.height / 4) {
      newFocus = SELECT;
    } else if (phonePos.y < lastQuater && phonePos.y > -phonePos.height / 2) {
      newFocus = PHONE;
    }

    if (focus !== newFocus) {
      this.setState({ focus: newFocus });
    }
  }

  render() {
    const { lang } = this.props;
    const {
      focus,
      reportType,
      content,
      phone,
    } = this.state;
    const reportOptions = [
      {
        id: 1,
        ko: '사건을 제보할래요',
        en: 'Report an incident',
      },
      {
        id: 2,
        ko: '상담을 받고 싶어요',
        en: 'Need counseling',
      },
      {
        id: 3,
        ko: '대화 상대가 필요해요',
        en: 'Need someone to talk',
      },
    ];

    return (
      <div style={styles.scrollContainer}>
        <Section
          backgroundColor={colors.lightBlue}
          style={styles.topSection}
        >
          <Row style={styles.centered}>
            <Header
              text={text.headers.top[lang]}
              color={colors.black}
              size={2.5}
              centered
            />
          </Row>
        </Section>
        <Element
          name="select"
          style={{ ...focus !== SELECT && styles.unfocused }}
          onClick={() => scrollToElement(SELECT)}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.selectNode = node; }}
          >
            <Row style={styles.centered}>
              <Header text={text.headers.selectOption[lang]} />
              <div style={styles.container}>
                {reportOptions.map(option => (
                  <Column xs={12} sm={4} md={4} lg={4} key={option.id}>
                    <button
                      style={{ ...styles.option, ...reportType === option.id && styles.selected }}
                      onClick={event => this.onSelectOption(event, option.id)}
                    >
                      <h1 style={styles.optionText}>{option[lang]}</h1>
                    </button>
                  </Column>
                ))}
              </div>
            </Row>
          </Section>
        </Element>
        <Element
          name={EXPLAIN}
          style={{ ...focus !== EXPLAIN && styles.unfocused }}
          onClick={() => scrollToElement(EXPLAIN)}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.explainNode = node; }}
          >
            <Row>
              <Header text={text.headers.explain[lang]} />
              <div style={styles.container}>
                <Textarea
                  style={styles.textarea}
                  minRows={4}
                  placeholder={text.description.placeholder[lang]}
                  onChange={event => this.setState({ content: event.target.value })}
                  value={content}
                />
              </div>
            </Row>
          </Section>
        </Element>
        <Element
          name="phone"
          style={{ ...focus !== PHONE && styles.unfocused }}
          onClick={() => scrollToElement(PHONE)}
        >
          <Section
            style={styles.section}
            reference={(node) => { if (node) this.phoneNode = node; }}
          >
            <Row>
              <Header text={text.headers.phone[lang]} />
              <p style={styles.paragraph}>
                {text.description.phone[lang]}
              </p>
              <div style={styles.container}>
                <input
                  type="tel"
                  style={styles.phoneInput}
                  onChange={event => this.setState({ phone: event.target.value.replace(/-/g, '') })}
                  value={formatPhoneNumber(phone)}
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
              {text.headers.submit[lang]}
            </Button>
          </Row>
        </Section>
      </div>
    );
  }
}

Report.propTypes = propTypes;

const mapStateToProps = state => ({
  lang: state.setting.lang,
});

export default connect(mapStateToProps)(Report);
