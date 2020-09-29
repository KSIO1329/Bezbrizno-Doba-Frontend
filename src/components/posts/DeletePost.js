import React, { Component } from 'react'
import {deletePost} from '../../store/actions/postActions';
import {connect} from 'react-redux';
import './DeletePost.css';

class DeletePost extends Component {
  state = {
    id: ''
  }
  componentDidMount(){
      this.setState({
          id: this.props.id
      })
  }
  handleDelete = (e) => {
    if (this.props.logged_in)
      this.props.deletePost(this.state.id, { email: this.props.email, password: this.props.password})
  }
  render() {
    const delbtn = !this.props.logged_in ? (
      <div></div>
    ) : (
      <div className="container">
        <i className="material-icons grey-text delbtn" onClick={this.handleDelete}>delete</i>
      </div>
    )
    return (
      <div>{delbtn}</div>
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
    deletePost: (id, auth) => dispatch(deletePost(id, auth))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);