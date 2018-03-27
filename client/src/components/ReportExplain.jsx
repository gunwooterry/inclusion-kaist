import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Textarea from 'react-textarea-autosize';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';

const styles = {
  titleStyle: {
    fontSize: '2rem',
    fontWeight: '400',
    textAlign: 'left',
  },
  titleStyleXs: {
    fontSize: '1.5rem',
    fontWeight: '400',
    textAlign: 'left',
  },
  inputStyle: {
    border: '0.1rem solid #4598ed',
    padding: '0.5rem',
    width: '85%',
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: '300',
    marginBottom: '2rem',
  },
  inputStyleXs: {
    border: '0.1rem solid #4598ed',
    padding: '0.5rem',
    width: '95%',
    display: 'block',
    fontSize: '1.2rem',
    fontWeight: '300',
    marginBottom: '2rem',
  },
  hiddenStyle: {
    transform: 'translate(100%)',
    display: 'none',
    webkitTransition: 'transform 1s ease-in-out',
  },
  showStyle: {
    transform: 'translate(0%)',
    webkitTransition: 'transform 1s ease-in-out',
  },
  buttonStyle: {
    border: '0.15rem solid #4598ed',
    borderRadius: '0.2rem',
    width: '5rem',
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
    width: '5rem',
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
};

class ReportExplain extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <div
        ref={this.props.explainRef}
        onClick={this.props.focus ? null : this.props.onClickDivHandler}>
        <MediaQuery query="(min-width: 768px)">
          <div style={this.props.focus ? {} : {opacity: 0.2}}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Row>
                <h3 style={styles.titleStyle}>
                  일어난 일에 대해 자세히 설명해 주세요.
                </h3>
              </Row>
            </div>
            <Row>
              <Textarea
                style={styles.inputStyle}
                value={this.state.value}
                minRows={3}
                onChange={e => this.setState({value: e.target.value})}
                placeholder={'일어난 일에 대해 자세히 설명해 주세요.'}
              />
            </Row>
            <Row>
              <div style={styles.buttonStyle} onClick={this.props.onNext}>다음</div>
            </Row>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <div style={this.props.focus ? {} : {opacity: 0.2}}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Row>
                <h3 style={styles.titleStyleXs}>
                  일어난 일에 대해 자세히 설명해 주세요.
                </h3>
              </Row>
            </div>
            <Row>
              <Textarea
                style={styles.inputStyleXs}
                value={this.state.value}
                minRows={5}
                maxRows={10}
                onChange={e => this.setState({value: e.target.value})}
                placeholder={'일어난 일에 대해 자세히 설명해 주세요.'}/>
            </Row>
            <Row>
              <div style={styles.buttonStyleXs} onClick={this.props.onNext}>다음</div>
            </Row>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default ReportExplain;
