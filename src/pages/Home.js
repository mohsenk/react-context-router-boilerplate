import React, { Component } from 'react'
import Header from '../components/Header.js';
import AddButtons from '../components/AddButtons.js';
import { NavLink } from 'react-router-dom';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header title="React Context Router Boilerplate" />
                <AddButtons />
                <NavLink to="/second">Go To Second Page (React Router)</NavLink>
            </div>
        )
    }
}

export default Home
