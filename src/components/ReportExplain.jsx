import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';

const styles = {
  titleStyle: {
    fontSize: '3rem',
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
    width: '85%',
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
      <div style={this.props.display ? styles.showStyle : styles.hiddenStyle}>
        <Section style={{textAlign: 'center'}}>
          <Row>
            <h3 style={styles.subtitleStyle}>
              일어난 일에 대해 자세히 설명해 주세요.
            </h3>
          </Row>
        </Section>
        <Row>
          <Textarea style={styles.inputStyle}
                    value={this.state.value}
                    onChange={e => this.setState({value: e.target.value})}
                    placeHolder={'일어난 일에 대해 자세히 설명해 주세요.'}/>
        </Row>
      </div>
    );
  }
}


export default ReportExplain;
