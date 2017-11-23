import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.onChangeTheName = this.onChangeTheName.bind(this);
  }

  componentDidMount() {
    this.elem.addEventListener('changeTheName', this.onChangeTheName);
  }

  componentWillUnmount() {
      this.elem.removeEventListener('changeTheName', this.onChangeTheName);
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
          <my-element name={this.state.name} ref={ e => this.elem = e } />
        </p>
      </div>
    );
  }
}

export default App;
