import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import ReportSelect from './ReportSelect';
import Section from './common/Section';
import ReportPhone from './ReportPhone';
import ReportExplain from './ReportExplain';
import ReportDone from './ReportDone';
import leftArrow from './../static/left_arrow.png';
import rightArrow from './../static/right_arrow.png';
import Column from './common/Column';
import Row from './common/Row';

let scroll = Scroll.animateScroll;
let Element = Scroll.Element;
let scroller = Scroll.scroller;
let half = window.innerHeight / 4;
let lastQuater = window.innerHeight * 2.5 / 4;

const styles = {
  arrowStyle: {
    width: '3rem',
    position: 'absolute',
    top: '50%',
    cursor: 'pointer',
  },
  divStyle: {
    marginTop: 100,
    overflow: 'auto',
    scrollSnapType: 'y mandatory',
  },
};

class Report extends Component {
  constructor() {
    super();
    this.state = {
      selectFocus: true,
      explainFocus: false,
      phoneFocus: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  onSubmit() {
    // add http request
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    const selectPos = this.selectNode.getBoundingClientRect();
    // const explainPos = this.explainNode.getBoundingClientRect();
    // let scrollPos = window.scrollY;
    const phonePos = this.phoneNode.getBoundingClientRect();
    const selectFocus = selectPos.y > -selectPos.height / 2;
    const phoneFocus = phonePos.y < lastQuater && phonePos.y > -phonePos.height / 2;
    this.setState({
      selectFocus,
      explainFocus: !selectFocus && !phoneFocus,
      phoneFocus: !selectFocus && phoneFocus,
    });
  }
  onClickDivHandler() {
    scroller.scrollTo('reportSelect', {
      duration: 500,
      delay: 100,
      smooth: true,
    });
  }
  onClickBoxHandler() {
    scroller.scrollTo('reportExplain', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -half,
    });
  }
  onClickPhoneHandler() {
    scroller.scrollTo('reportPhone', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -half,
    });
  }
  render() {
    return (
      <div style={styles.divStyle}>
        <Column xs="1" sm="1" md="1" lg="1" />
        <Column xs="10" sm="10" md="10" lg="10">
          <Element name="reportSelect">
            <ReportSelect focus={this.state.selectFocus} onClickHandler={this.onClickBoxHandler} selectRef={node => this.selectNode = node} onClickDivHandler={this.onClickDivHandler} />
          </Element>
          <Element name="reportExplain">
            <ReportExplain focus={this.state.explainFocus} onClickHandler={() => this.onClickBoxHandler()} explainRef={node => this.explainNode = node} onClickDivHandler={this.onClickBoxHandler} />
          </Element>
          <Element name="reportPhone">
            <ReportPhone focus={this.state.phoneFocus} onSubmit={() => this.onSubmit()} phoneRef={node => this.phoneNode = node} onClickDivHandler={this.onClickPhoneHandler} />
          </Element>
          <ReportDone />
        </Column>
        <Column xs="1" sm="1" md="1" lg="1" />
      </div>
    );
  }
}


export default Report;
