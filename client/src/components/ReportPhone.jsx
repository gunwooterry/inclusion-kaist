import React, { Component } from 'react';
import Row from './common/Row';
import MediaQuery from 'react-responsive';
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

  titleStyleXs: {
    fontSize: '1.5rem',
    fontWeight: '400',
    textAlign: 'left',
  },
  subtitleStyleXs: {
    color: '#828282',
    fontSize: '1.2rem',
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
  inputStyleXs: {
    border: '0rem',
    borderBottom: '0.2rem solid #4598ed',
    width: '80%',
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
  buttonStyleXs: {
    border: '0.15rem solid #4598ed',
    borderRadius: '0.2rem',
    width: '7rem',
    height: '2.75rem',
    lineHeight: '2.75rem',
    alignItems: 'inline-block',
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '1.1rem',
    backgroundColor: '#4598ed',
    float: 'left',
    cursor: 'pointer',
  },
  divStyle: {
    paddingTop: '7rem',
    paddingBottom: '10rem',
  },
  divStyleXs: {
    paddingTop: '4rem',
    paddingBottom: '7rem',
  },
};

class ReportPhone extends Component {
  render() {
    const { focus } = this.props;
    return (
      <div ref={this.props.phoneRef} onClick={this.props.focus ? null : this.props.onClickDivHandler}>
        <MediaQuery query="(min-width: 768px)">
          <div style={this.props.focus ? styles.divStyle : {...styles.divStyle, opacity: 0.2}} ref={this.props.phoneRef}>
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
            <div style={styles.buttonStyle} onClick={this.props.onSubmit}>제출하기</div>
          </Row>
          </div>
        </MediaQuery>

        <MediaQuery query="(max-width: 768px)">
          <div style={this.props.focus ? styles.divStyleXs : {...styles.divStyleXs, opacity: 0.2}}>
            <Row>
            <div style={styles.titleStyleXs}>
              나중에 문제 해결을 위해 연락처를 여쭤 봐도 될까요?
            </div>
            <div style={styles.subtitleStyleXs}>
              부담이 된다면 남기지 않으셔도 됩니다.
            </div>
          </Row>
          <Row>
            <input style={styles.inputStyleXs} />
          </Row>
          <Row>
            <div style={styles.buttonStyleXs} onClick={this.props.onSubmit}>제출하기</div>
          </Row>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default ReportPhone;
