import React, { Component } from 'react';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';

const styles = {
  titleStyle: {
    fontSize: '2rem',
    fontWeight: '400',
    textAlign: 'left',
  },
  subtitleStyle: {
    color: '#828282',
    fontSize: '1.5rem',
    fontWeight: '300',
    textAlign: 'left',
    marginTop: '0.7rem',
    marginBottom: '3rem',
  },
  inputStyle: {
    border: '0rem',
    borderBottom: '0.2rem solid #4598ed',
    width: '40%',
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: '300',
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
  phone: {
    minHeight: '40rem',
    marginTop: '3.5rem',
  },
};

class ReportPhone extends Component {
  render() {
    const { focus } = this.props;
    return (
      <div
        style={Object.assign({}, styles.phone, !focus && { opacity: 0.2 })}
        ref={this.props.phoneRef}
        onClick={this.props.focus ? null : this.props.onClickDivHandler}
      >
        <Row>
          <div style={styles.titleStyle}>
            나중에 문제 해결을 위해 연락처를 여쭤 봐도 될까요?
          </div>
          <div style={styles.subtitleStyle}>
            부담이 된다면 남기지 않으셔도 됩니다.
          </div>
        </Row>
        <Row>
          <input style={styles.inputStyle} />
          <div
            style={styles.buttonStyle}
            onClick={this.props.onSubmit}
          >
            제출하기
          </div>
          <div
            style={{
              ...styles.buttonStyle,
              width: '15rem',
              backgroundColor: '#FFFFFF',
              color: '#4598ed',
              marginLeft: '2rem',
            }}
            onClick={this.props.onSubmit}
          >
            연락처 없이 제출하기
          </div>
        </Row>
      </div>
    );
  }
}


export default ReportPhone;
