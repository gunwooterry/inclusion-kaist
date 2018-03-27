import React, { Component } from 'react';
import Scroll from 'react-scroll';

import ReportSelect from './ReportSelect';
import ReportPhone from './ReportPhone';
import ReportExplain from './ReportExplain';
import ReportDone from './ReportDone';
import Column from './common/Column';
import Row from './common/Row';

const { Element, scroller, animateScroll } = Scroll;
const half = window.innerHeight * 1.2 / 4;
const lastQuater = (window.innerHeight * 2.2) / 4;

const styles = {
  arrowStyle: {
    width: '3rem',
    position: 'absolute',
    top: '50%',
    cursor: 'pointer',
  },
  divStyle: {
    marginTop: '100px',
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
    const selectFocus = selectPos.y > -selectPos.height / 3;
    const phoneFocus = phonePos.y < lastQuater && phonePos.y > -phonePos.height / 2;
    this.setState({
      selectFocus,
      explainFocus: !selectFocus && !phoneFocus,
      phoneFocus: !selectFocus && phoneFocus,
    });
  }

  onClickDivHandler() {
    // scroller.scrollTo('reportSelect', {
    //   duration: 500,
    //   delay: 100,
    //   smooth: true,
    //   ignoreCancelEvents: true,
    // });
    animateScroll.scrollToTop({
      duration: 500,
      delay: 100,
      smooth: true,
      ignoreCancelEvents: true,
    });
  }

  onClickBoxHandler() {
    scroller.scrollTo('reportExplain', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -half,
      ignoreCancelEvents: true,
    });
  }

  onClickPhoneHandler() {
    scroller.scrollTo('reportPhone', {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -half,
      ignoreCancelEvents: true,
    });
  }

  render() {
    return (
      <div style={styles.divStyle}>
        <Column xs="1" sm="1" md="1" lg="1" />
        <Column xs="10" sm="10" md="10" lg="10">
          <Element name="reportSelect">
            <ReportSelect
              focus={this.state.selectFocus}
              onClickHandler={this.onClickBoxHandler}
              selectRef={(node) => { if (node) this.selectNode = node; }}
              onClickDivHandler={this.onClickDivHandler}
            />
          </Element>
          <Element name="reportExplain">
            <ReportExplain
              focus={this.state.explainFocus}
              onClickHandler={() => this.onClickBoxHandler()}
              explainRef={(node) => { if (node) this.explainNode = node; }}
              onClickDivHandler={this.onClickBoxHandler}
              onNext={this.onClickPhoneHandler}
            />
          </Element>
          <Element name="reportPhone">
            <ReportPhone
              focus={this.state.phoneFocus}
              onSubmit={() => this.onSubmit()}
              phoneRef={(node) => { if (node) this.phoneNode = node; }}
              onClickDivHandler={this.onClickPhoneHandler}
            />
          </Element>
          <ReportDone />
        </Column>
        <Column xs="1" sm="1" md="1" lg="1" />
      </div>
    );
  }
}


export default Report;
