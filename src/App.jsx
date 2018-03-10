import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import NavBar from './components/common/NavBar';


import Faculty from './components/Faculty';
import Organization from './components/Organization';
import Landing from './components/Landing';
import Report from './components/Report';

const kaistBlue = '#004191';
const white = '#FFF';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isTop: true,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 50;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.history.action === 'PUSH' && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const isReport = this.props.location.pathname === '/report/' || this.props.location.pathname === '/news/' || this.props.location.pathname === '/faculty/' || this.props.location.pathname === '/orgs/';
    const isMain = this.props.location.pathname === '/';
    return (
      <div style={{paddingTop:60, background: isMain ? kaistBlue : white}}>
        <NavBar isTop={this.state.isTop && !isReport} isMain={this.state.isTop && isMain}>
          <NavBar.Item
            text="Inclusion KAIST"
            link="/"
            bold
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="제보하기"
            link="/report/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="유관기관"
            link="/orgs/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="사람들"
            link="/faculty/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="뉴스"
            link="/news/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="소개"
            link="/"
            right
            isTop={this.state.isTop && !isReport}
          />
        </NavBar>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/report/" component={Report} />
          <Route exact path="/orgs/" component={Organization} />
          <Route exact path="/faculty/" component={Faculty} />
          <Route exact path="/news/" component={Faculty} />
          <Route exact path="/" component={Landing} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
