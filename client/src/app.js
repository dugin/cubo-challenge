import React, { Component } from 'react';
import Body from './body';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
