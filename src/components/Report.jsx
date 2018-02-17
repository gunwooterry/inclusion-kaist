import React, { Component } from 'react';
import ReportSelect from './ReportSelect';
import Section from './common/Section';
import ReportPhone from './ReportPhone';
import ReportExplain from './ReportExplain';
import ReportDone from './ReportDone';
import leftArrow from './../static/left_arrow.png';
import rightArrow from './../static/right_arrow.png';
import Column from './common/Column';
import Row from './common/Row';

const styles = {
  arrowStyle: {
    width: '3rem',
    position: 'absolute',
    top: '50%',
    cursor: 'pointer',
  },
};

class Report extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      showLeftArrow: false,
      showRightArrow: false,
    };
  }
  onArrowClickHandler(change) {
    this.setState((prevState) => {
      let newPage = prevState.page + change;
      newPage = newPage > 3 ? 3 : newPage;
      newPage = newPage < 0 ? 0 : newPage;
      this.setState({
        page: newPage,
      });

      if (newPage === 0) {
        this.setState({
          showLeftArrow: false,
          showRightArrow: true,
        });
      } else if (newPage === 1) {
        this.setState({
          showLeftArrow: true,
          showRightArrow: true,
        });
      } else if (newPage === 2) {
        this.setState({
          showLeftArrow: true,
          showRightArrow: false,
        });
      }
    });
  }
  onSubmit() {
    // add http request
    this.setState({
      page: 3,
      showLeftArrow: false,
      showRightArrow: false,
    });
  }
  onClickBoxHandler() {
    this.setState({showRightArrow: true});
  }
  renderPage(page) {
    switch (page) {
      case 0:
        return <ReportSelect onClickHandler={() => this.onClickBoxHandler()} />;
      case 1:
        return <ReportExplain />;
      case 2:
        return <ReportPhone onSubmit={() => this.onSubmit()} />;
      case 3:
        return <ReportDone />;
      default:
        return null;
    }
  }
  render() {
    return (
      <div style={{marginTop: 100}}>
        <Row>
          <Column xs="1" sm="1" md="1" lg="1">
            {
              this.state.showLeftArrow ?
                <img
                  style={styles.arrowStyle}
                  src={leftArrow}
                  alt="leftArrow"
                  onClick={() => this.onArrowClickHandler(-1)}
                /> :
                null
            }
          </Column>
          <Column xs="10" sm="10" md="10" lg="10">
            {/*{this.renderPage(this.state.page)}*/}
            <ReportSelect display={this.state.page === 0} onClickHandler={() => this.onClickBoxHandler()} />
            <ReportExplain display={this.state.page === 1} />
            <ReportPhone display={this.state.page === 2} onSubmit={() => this.onSubmit()} />
            <ReportDone display={this.state.page === 3} />
          </Column>
          <Column xs="1" sm="1" md="1" lg="1">
            {
              this.state.showRightArrow ?
                <img
                  style={styles.arrowStyle}
                  src={rightArrow}
                  alt="rightArrow"
                  onClick={() => this.onArrowClickHandler(1)}
                /> :
                null
            }
          </Column>
        </Row>
      </div>
    );
  }
}


export default Report;
