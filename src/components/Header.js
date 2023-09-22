import React from 'react';
import './Header.css';

function Header(props) {

    return (
        <div className="app-header">
            <span className="header-title">Code Malayalam </span>
            <span className="header-menu">Home </span>
            <span className="header-menu">Usage </span>
            <span className="header-menu">Settings </span>
            <span className="header-menu">Logout </span>
        </div>
    );
}

export default Header;