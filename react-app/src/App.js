import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyWrapper from './MyWrapper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.onChangeTheName = this.onChangeTheName.bind(this);
  }

  onChangeTheName({ detail: { name }}) {
    this.setState({ name });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <span className="name">React</span></h1>
        </header>
        <p className="App-intro">
          <MyWrapper name={this.state.name} onChangeTheName={this.onChangeTheName} />
        </p>
      </div>
    );
  }
}

export default App;
