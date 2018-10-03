import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { context } from '../store/MyContext.js';

export class SecondPage extends Component {
  render() {
    return (
      <div>
        <h2>Second Page!</h2>
        <context.Consumer>
        {({ money}) => (
          <p>Value from context : {money}</p>
        )}
        </context.Consumer>
        <NavLink to="/">Back to home</NavLink>
      </div>
    )
  }
}

export default SecondPage
