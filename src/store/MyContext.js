import React, { Component } from 'react';

export const context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_1":
            return { ...state, money: state.money + 1 };
        case "ADD_500":
            return { ...state, money: state.money + 500 };
        default:
            break;    
    }
  };

export class MyProvider extends Component {

    componentDidMount = () => {
        const initState = {
            money : 1337,
            dispatch: action => {
                this.setState(state => reducer(state, action));
              }
          }

          this.setState(initState);
    }

    state = {}

    render() {
        return (
            <context.Provider value={this.state}>
                {this.props.children}
            </context.Provider>
        )
    }
}