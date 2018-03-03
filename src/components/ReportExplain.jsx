import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';

const styles = {
  titleStyle: {
    fontSize: '2.5rem',
    fontWeight: '600',
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
    <Section>
      <Section style={{textAlign: 'center'}}>
        <Row>
          <h3 style={styles.titleStyle}>
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
    </Section>
    );
  }
}


export default ReportExplain;
