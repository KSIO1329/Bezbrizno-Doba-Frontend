import React, { Component } from 'react'
import {createPost} from '../../store/actions/postActions';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import PropTypes from 'prop-types'

class CreatePost extends Component {
  state = {
    title: '',
    body: '',
  }
  static propTypes = {
    history: PropTypes.object.isRequired
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    if (this.props.logged_in){
      this.props.createPost(this.state, { email: this.props.email, password: this.props.password})
      history.goBack()
    }
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Nova objava</h5>
          <div className="input-field email-div">
            <label htmlFor="title">Naslov</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="body">Sadržaj</label>
            <textarea id="body" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn purple darken-3 z-depth-0">Objavi</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      email: state.auth.email,
      password: state.auth.password,
      logged_in: state.auth.logged_in
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post, auth) => dispatch(createPost(post, auth))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));