import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Row from './common/Row';
import Column from './common/Column';
import Section from './common/Section';
import SelectBox from './common/SelectBox';


const styles = {
  titleStyle: {
    fontSize: '3rem',
    fontWeight: 600,
  },
  subtitleStyle: {
    color: '#828282',
    margin: '2rem 0 2rem 0',
    fontSize: '2rem',
  },
  titleStyleXs: {
    fontSize: '2rem',
  },
  subtitleStyleXs: {
    color: '#828282',
    margin: '1rem 0 0 0',
    fontSize: '1.5rem',
  },
  divStyle: {
    paddingTop: '7vh',
    paddingBottom: '3vh',
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
      <div ref={this.props.selectRef} onClick={this.props.focus ? null : this.props.onClickDivHandler}>
        <MediaQuery query="(min-width: 768px)">
          <div style={this.props.focus ? styles.divStyle : {...styles.divStyle, opacity: 0.2}}>
            <div style={{textAlign: 'center'}}>
              <div>
                <div style={styles.titleStyle}>약간의 용기가 삶을 바꿉니다.</div>
                <div style={styles.subtitleStyle}>어떤 도움이 필요하신가요?</div>
              </div>
            </div>
            <Section style={{margin: 'auto'}}>
              <Row>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="사건을 제보할래요" selected={this.state.selected === 0} onClickHandler={() => this.onClickHandler(0)} />
                </Column>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="상담받고 싶어요" selected={this.state.selected === 1} onClickHandler={() => this.onClickHandler(1)} />
                </Column>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="대화상대가 필요해요" selected={this.state.selected === 2} onClickHandler={() => this.onClickHandler(2)} />
                </Column>
              </Row>
            </Section>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <div style={this.props.focus ? styles.divStyleXs : {...styles.divStyleXs, opacity: 0.2}}>
            <div style={{textAlign: 'center'}}>
              <Row>
                <h1 style={styles.titleStyleXs}>약간의 용기가 삶을 바꿉니다.</h1>
                <h3 style={styles.subtitleStyleXs}>어떤 도움이 필요하신가요?</h3>
              </Row>
            </div>
            <Section style={{margin: 'auto'}}>
              <Row>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="사건을 제보할래요" selected={this.state.selected === 0} onClickHandler={() => this.onClickHandler(0)} />
                </Column>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="상담받고 싶어요" selected={this.state.selected === 1} onClickHandler={() => this.onClickHandler(1)} />
                </Column>
                <Column xs="12" sm="4" md="4" lg="4">
                  <SelectBox focus={this.props.focus} text="대화상대가 필요해요" selected={this.state.selected === 2} onClickHandler={() => this.onClickHandler(2)} />
                </Column>
              </Row>
            </Section>
          </div>
        </MediaQuery>
      </div>
    );
  }
}


export default ReportSelect;
