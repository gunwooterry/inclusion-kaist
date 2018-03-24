import React, { Component } from 'react';

import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';
import SelectBox from './common/SelectBox';


const styles = {
  titleStyle: {
    fontSize: '3rem',
  },
  subtitleStyle: {
    color: '#828282',
    margin: '2rem 0 2rem 0',
    fontSize: '2rem',
  },
};

class ReportSelect extends Component{
  constructor() {
    super();
    this.state = {
      selected: -1,
    };
  }
  onClickHandler(page) {
    if (this.props.focus) {
      this.setState({ selected: page });
      this.props.onClickHandler();
    }
  }
  render() {
    return (
      <div style={this.props.focus ? null : {opacity: 0.2}} ref={this.props.selectRef} onClick={this.props.focus ? null : this.props.onClickDivHandler}>
        <Section style={{textAlign: 'center'}}>
          <Row>
            <h1 style={styles.titleStyle}>약간의 용기가 삶을 바꿉니다.</h1>
            <h3 style={styles.subtitleStyle}>어떤 문제를 겪고 계신가요?</h3>
          </Row>
        </Section>
        <Section style={{margin: 'auto'}}>
          <Row>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="신체적 폭력" selected={this.state.selected === 0} onClickHandler={() => this.onClickHandler(0)} />
            </Column>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="제도적 차별" selected={this.state.selected === 1} onClickHandler={() => this.onClickHandler(1)} />
            </Column>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="권력형 인권침해" selected={this.state.selected === 2} onClickHandler={() => this.onClickHandler(2)} />
            </Column>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="혐오 발언" selected={this.state.selected === 3} onClickHandler={() => this.onClickHandler(3)} />
            </Column>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="또 뭐가 있을까요" selected={this.state.selected === 4} onClickHandler={() => this.onClickHandler(4)} />
            </Column>
            <Column xs="6" sm="6" md="4" lg="4">
              <SelectBox focus={this.props.focus} text="기타" selected={this.state.selected === 5} onClickHandler={() => this.onClickHandler(5)} />
            </Column>
          </Row>
        </Section>
      </div>
    );
  }
}


export default ReportSelect;
