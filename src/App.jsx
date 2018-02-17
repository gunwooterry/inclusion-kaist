import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import NavBar from './components/common/NavBar';


import Landing from './components/Landing';
import Report from './components/Report';

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
    const isReport = this.props.location.pathname === '/report/';
    console.log(isReport);
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
            text="유관기관"
            link="/orgs/"
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
            link="/about/"
            right
            isTop={this.state.isTop && !isReport}
          />
        </NavBar>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/report/" component={Report} />
          <Route exact path="/orgs/" component={Landing} />
          <Route exact path="/news/" component={Landing} />
          <Route exact path="/about/" component={Landing} />
          <Redirect from='/' to='/' />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
