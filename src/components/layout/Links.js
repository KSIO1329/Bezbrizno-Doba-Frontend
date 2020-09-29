import { NavLink } from 'react-router-dom';
import React, { Component } from 'react'
import {connect} from 'react-redux';
import './Links.css'

class Links extends Component {
    render(){
        const logoutbtn = !this.props.logged_in ? (
            <div></div>
        ) : (
            <NavLink to="/logout" className="nav-link-ks"><i className="material-icons-outlined">exit_to_app</i>Odjavi se</NavLink>
        )
        return(
            <ul className="nav-links-ks">
                <li onClick={this.props.onClick}><NavLink to="/" className="nav-link-ks"><i className="material-icons">home</i>Naslovna</NavLink></li>
                <li onClick={this.props.onClick}><NavLink to="/about" className="nav-link-ks"><i className="material-icons-outlined">info</i>O nama</NavLink></li>
                <li onClick={this.props.onClick}><NavLink to="/news" className="nav-link-ks"><i className="material-icons-outlined">comment</i>Novosti</NavLink></li>
                <li onClick={this.props.onClick}><NavLink to="/contact" className="nav-link-ks"><i className="material-icons-outlined">ring_volume</i>Kontakt</NavLink></li>
                <li onClick={this.props.onClick}>{logoutbtn}</li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged_in: state.auth.logged_in
    }
}
export default connect(mapStateToProps)(Links);