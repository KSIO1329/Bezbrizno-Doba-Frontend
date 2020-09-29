import React, { Component } from 'react'
import queryString from 'query-string'
import {getPost} from '../../store/actions/postActions';
import {connect} from 'react-redux';

class PostDetails extends Component {
  state = {
    post: []
  }
  urlify(text) {
    if (typeof(text) == "undefined") return ""
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }
  componentDidMount() {
    const values = queryString.parse(this.props.location.search)
    this.props.getPost(values.id)
  }
  render(){
    const post = this.props.post
    //
    var urlified = this.urlify(post.body)
    var index = -1;
    // eslint-disable-next-line
    var indexEnd = 0;
    // eslint-disable-next-line
    var splits = []
    do{
      index = urlified.indexOf("<a", index + 1)
      if (index === -1) break
      //
      splits.push("<p>" + urlified.substring(indexEnd, index) + "</p>")
      indexEnd = urlified.indexOf("a>", index) + 2
      //
      splits.push(urlified.substring(index, indexEnd))
    }while (index !== -1)
    var doc = new DOMParser().parseFromString("<div>" + splits.join('') + "</div>", "text/xml");
    const htmlSections = Array.from(doc.firstChild.childNodes);
    const body = htmlSections.map((key, i) => {
      let el = htmlSections[i];
      let contents;
      if (i % 2 === 0){
        contents = [<p>{el.innerHTML} </p>];
      } else {
        contents = [<a style={{margin: "0px 5px"}} href={el.innerHTML}>{el.innerHTML} </a>]
      }
      return <div style={{display: "inline", float: "left"}} key={i}>{contents}</div>;
      })
    //
    return (
      <div className="container section post-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{post.title}</span>
            <div>{body}</div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>{post.reg_date}</div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
      post: state.post.post
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(getPost(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);

