import React, { Component } from 'react';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';

const styles = {
  titleStyle: {
    fontSize: '2.5rem',
    fontWeight: '600',
    textAlign: 'left',
  },
  subtitleStyle: {
    color: '#828282',
    fontSize: '1.8rem',
    fontWeight: '400',
    textAlign: 'left',
  },
  inputStyle: {
    border: '0rem',
    borderBottom: '0.2rem solid #4598ed',
    width: '40%',
    display: 'block',
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  buttonStyle: {
    border: '0.15rem solid #4598ed',
    borderRadius: '0.2rem',
    width: '7rem',
    height: '3.5rem',
    lineHeight: '3.5rem',
    alignItems: 'inline-block',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '1.2rem',
    backgroundColor: '#4598ed',
    float: 'left',
    cursor: 'pointer',
  },
};

class ReportPhone extends Component {
  render() {
    return (
      <Section style={{minHeight: '40rem', marginTop: '3.5rem'}}>
        <Row>
          <h3 style={styles.titleStyle}>
            나중에 문제 해결을 위해 연락처를 여쭤 봐도 될까요?
          </h3>
          <h3 style={styles.subtitleStyle}>
            부담이 된다면 남기지 않으셔도 됩니다.
          </h3>
        </Row>
        <Row>
          <input style={styles.inputStyle} />
          <div style={styles.buttonStyle} onClick={this.props.onSubmit}>제출하기</div>
          <div style={{ ...styles.buttonStyle, width: '15rem', backgroundColor: '#FFFFFF', color: '#4598ed', marginLeft: '2rem' }} onClick={this.props.onSubmit}>연락처 없이 제출하기</div>
        </Row>
      </Section>
    );
  }
}


export default ReportPhone;
