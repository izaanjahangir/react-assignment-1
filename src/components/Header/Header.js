import React, { Component } from 'react';
import '../../App.css';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header>
            <a href="/" className="btn">Assignment 01</a>
            <p>Izaan</p>
        </header>
    );
  }
}

export default Header;
