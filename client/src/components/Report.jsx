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
      page: 0,
    };
  }
  onSubmit() {
    // add http request
  }
  onClickBoxHandler() {
    scroller.scrollTo('reportExplain', {
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
          <ReportSelect onClickHandler={() => this.onClickBoxHandler()} />
          <Element name="reportExplain">
            <ReportExplain />
          </Element>
          <Element name="reportPhone">
            <ReportPhone onSubmit={() => this.onSubmit()} />
          </Element>
          <ReportDone />
        </Column>
        <Column xs="1" sm="1" md="1" lg="1" />
      </div>
    );
  }
}


export default Report;
