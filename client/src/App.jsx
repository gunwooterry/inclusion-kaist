import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import NavBar from './components/common/NavBar';

import Landing from './components/Landing';
import Organization from './components/Organization';
import Report from './components/Report';
import Resources from './components/Resources';

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
    // eslint-disable-next-line react/prop-types
    const { history, location } = this.props;
    if (
      history.action === 'PUSH' &&
      location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { location } = this.props;
    const { pathname } = location;
    const isReport = pathname === '/report/';
    return (
      <div>
        <NavBar isTop={this.state.isTop && !isReport}>
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
            text="자료"
            link="/resources/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text="학내 기구"
            link="/orgs/"
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
          <Route exact path="/resources/" component={Resources} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
