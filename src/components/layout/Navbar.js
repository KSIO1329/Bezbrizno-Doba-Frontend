import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import './Navbar.css';

const Navbar = (props) =>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo"><img className="logo" src={require('../../img/bdl5.png')} alt=""/></Link>
                <i className="material-icons white-text hide-on-large-only hamburger-button nav" onClick={props.drawerClickHandler}>menu</i>
                <div className="right hide-on-med-and-down"><Links/></div>
            </div>
        </nav>
    )
}

export default Navbar;