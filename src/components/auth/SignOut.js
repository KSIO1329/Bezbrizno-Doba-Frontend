import React, { Component } from 'react'
import {logOut} from '../../store/actions/authActions'
import {connect} from 'react-redux';

class SignOut extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.logOut()
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="page-title">Odjavite se</h5>
          <p>Da li sigurno želite da se odjavite?</p>
          <div className="input-field">
            <button className="btn z-depth-0">Odjavi se</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}
export default connect(null, mapDispatchToProps)(SignOut);