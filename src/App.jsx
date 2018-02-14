import React from 'react';
import NavBar from './components/common/NavBar';

import Landing from './components/Landing';

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

  render() {
    return (
      <div>
        <NavBar isTop={this.state.isTop}>
          <NavBar.Item
            text="Left"
            link="/"
            isTop={this.state.isTop}
          />
          <NavBar.Item
            text="Right"
            link="/"
            right
            isTop={this.state.isTop}
          />
        </NavBar>
        <Landing />
      </div>
    );
  }
}

export default App;
