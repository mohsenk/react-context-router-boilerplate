import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import SecondPage from './pages/SecondPage';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/second" component={SecondPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
