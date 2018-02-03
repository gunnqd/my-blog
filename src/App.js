import React, { Component } from 'react';
import Header from '../src/components/organisms/Header/Header'
import Content from '../src/components/organisms/Content/index'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
