import React, { Component } from 'react';
import Login from '../Authentication/Login'
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div>
                <Login/>
                
            </div>
        );
    }
}

export default Header;