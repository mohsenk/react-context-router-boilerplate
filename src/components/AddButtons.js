import React, { Component } from 'react'
import { context } from '../store/MyContext.js';

export class AddButton extends Component {
  render() {
    return (
      <div>
        <context.Consumer>
        {({ money, dispatch }) => (
            <div>
            <button className="btn btn-success m-3" onClick={() => dispatch({ type: "ADD_1" })}>Add 1</button>
            <button className="btn btn-success" onClick={() => dispatch({ type: "ADD_500" })}>Add 500</button>
            <h3> {money}</h3>
            </div>
        )}
        </context.Consumer>
      </div>
    )
  }
}

export default AddButton
