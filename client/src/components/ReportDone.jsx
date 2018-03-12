import React, { Component } from 'react';
import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';


const styles = {
  titleStyle: {
    fontSize: '2.5rem',
    textAlign: 'left',
  },
  subtitleStyle: {
    color: '#828282',
    margin: '2rem 0 2rem 0',
    fontSize: '2rem',
    textAlign: 'left',
  },
};

class ReactDone extends Component {
  render() {
    return (
      <div style={this.props.display ? null : { display: 'none'}}>
        <Row>
          <h1 style={styles.titleStyle}>제보해 주셔서 감사합니다.</h1>
          <h3 style={styles.subtitleStyle}>
            당신의 용기가 오늘 KAIST를
            조금 더 나은 곳으로 만들었습니다.
          </h3>
        </Row>
      </div>
    );
  }
}

export default ReactDone;