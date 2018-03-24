import React, { Component } from 'react';
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
  inputStyle: {
    border: '0.1rem solid #4598ed',
    padding: '0.5rem',
    width: '85%',
    display: 'block',
    fontSize: '1.5rem',
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
    <div style={this.props.focus ? null : {opacity: 0.2}} ref={this.props.explainRef} onClick={this.props.focus ? null : this.props.onClickDivHandler}>
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
                  minRows={3}
                  onChange={e => this.setState({value: e.target.value})}
                  placeholder={'일어난 일에 대해 자세히 설명해 주세요.'}/>
      </Row>
    </div>
    );
  }
}


export default ReportExplain;
