import React, { Component } from 'react'
import './PostSummary.css';
import { NavLink } from 'react-router-dom';
import DeletePost from './DeletePost';
import {connect} from 'react-redux';

class PostSummary extends Component{
    urlify(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, function(url) {
          return '<a href="' + url + '">' + url + '</a>';
        })
        // or alternatively
        // return text.replace(urlRegex, '<a href="$1">$1</a>')
    }
    render(){
        const adress = "/post?id=" + this.props.post.id
        
        var modified = {id: 1, title: "bruh", body: "http://google.com"}
        var doc = new DOMParser().parseFromString(this.urlify(modified.body), "text/xml");
        modified.body = doc.firstChild.innerHTML
        console.log(modified)
        const boddy = (
            <div>
                <NavLink to={adress} className="card-title truncate">{this.props.post.title}</NavLink>
                <div className="truncate">{this.props.post.body}</div>
                <p className="grey-text post-date">{this.props.post.reg_date}</p>
            </div>)
        const lgq = this.props.logged_in ? (
            <div>
                <div className="col s11 card-content grey-text text-darken-3">
                    {boddy}
                </div>
                <div className="col s1 delpost">
                    <DeletePost id={this.props.post.id}/>
                </div>
            </div>
        ) : (
            <div>
                <div className="col s12 card-content grey-text text-darken-3">
                    {boddy}
                </div>
            </div>
        )
        return (
            <div className="card z-depth-0 post-summary">
                <div className="hoverable">
                    <div className="row">
                        {lgq}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        logged_in: state.auth.logged_in
    }
}
  
export default connect(mapStateToProps)(PostSummary);