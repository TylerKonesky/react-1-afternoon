import React, { Component } from 'react';

import '../src/App.css';
import '../src/index.css';
import TopicBrowser  from '../src/components/TopicBrowser/TopicBrowser'


class App extends Component {
  render() {
    return (
      <div className="App">
      
        <header className="App-header">

          <TopicBrowser/>

        </header>

        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
