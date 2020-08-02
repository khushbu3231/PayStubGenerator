import React, { Component } from 'react';

import MainPage from './Containers/MainPage'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1 className="App_Heading">Pay-Slip Generator</h1>
        <MainPage />
      </div>
    )}
}

export default App;
