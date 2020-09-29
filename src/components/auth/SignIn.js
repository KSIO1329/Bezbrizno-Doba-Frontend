import React, { Component } from 'react'
import { logIn } from '../../store/actions/authActions'
import './SignIn.css'
import {connect} from 'react-redux';
import { Redirect} from "react-router";

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state);
  }
  render() {
    const redirect = !this.props.logged_in ? (<div></div>) : (<Redirect to='/'></Redirect>)
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="page-title">Prijavite se</h5>
          <div className="input-field email-div">
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Šifra</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          {redirect}
          <div className="input-field">
            <button className="btn z-depth-0">Prijavi se</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      logged_in: state.auth.logged_in
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logIn: (auth) => dispatch(logIn(auth))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);