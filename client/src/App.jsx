import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { setLanguage } from './actions';
import NavBar from './components/common/NavBar';
import Landing from './components/Landing';
import Organization from './components/Organization';
import Report from './components/Report';
import Resources from './components/Resources';

const propTypes = {
  location: PropTypes.shape({}).isRequired,
  lang: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

const text = {
  opposite: {
    ko: 'en',
    en: 'ko',
  },
  oppositeText: {
    ko: 'English',
    en: '한국어',
  },
  report: {
    ko: '제보하기',
    en: 'Report',
  },
  resources: {
    ko: '자료',
    en: 'Resources',
  },
  orgs: {
    ko: '학내 기구',
    en: 'Organizations',
  },
  about: {
    ko: '소개',
    en: 'About Us',
  },
};

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
    const { location, lang } = this.props;
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
          <NavBar.Lang
            text={text.oppositeText[lang]}
            work={() => this.props.setLanguage(text.opposite[lang])}
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text={text.report[lang]}
            link="/report/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text={text.resources[lang]}
            link="/resources/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text={text.orgs[lang]}
            link="/orgs/"
            right
            isTop={this.state.isTop && !isReport}
          />
          <NavBar.Item
            text={text.about[lang]}
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

App.propTypes = propTypes;

const mapStateToProps = state => ({
  lang: state.setting.lang,
});

const connectedApp = connect(mapStateToProps, { setLanguage })(App);
export default withRouter(connectedApp);
