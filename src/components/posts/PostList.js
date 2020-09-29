import React, { Component } from 'react'
import PostSummary from './PostSummary'
import './PostList.css'
import { Link } from 'react-router-dom'
import {getPostList, getPages} from '../../store/actions/postActions';
import { connect} from 'react-redux';
import queryString from 'query-string'

class PostList extends Component {
    state = {
        page: 1,
        size: 5
    }
    updatePage(page){
        this.props.getPostList(this.state.size, page)
        this.setState({
            page: page
        })
    }
    componentDidMount(){ 
        this.props.getPages(this.state.size)
        this.props.getPostList(this.state.size,this.state.page)
    }
    render() {
        const values = queryString.parse(this.props.location.search)
        // eslint-disable-next-line no-unused-vars
        var page = values.page ? parseInt(values.page) : 1
        const newbtn = !this.props.logged_in ? (<div></div>) : (<Link to='/create_post' className=" new-post-btn"><button className="btn z-depth-0 new-post-btn">Nova objava</button></Link>)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <PostSummary post={post} key={post.id}></PostSummary>
                )
            })
        ) : (
            <div className="center"><h3>Još uvek nema novosti.</h3></div>
        )
        var pageFirst = this.props.length !== 1 ? (<div className="linkling"><Link to={"/news?page=1"} onClick={() => {this.updatePage(1)}}>Prva</Link></div>) : (<div hidden></div>)
        var pagePrevious = this.state.page !== 1 ? (<div className="linkling"><Link to={"/news?page=" + (this.state.page - 1)} onClick={() => {this.updatePage(this.state.page - 1)}}>{this.state.page - 1}</Link></div>) : (<div hidden></div>)
        var pageNext = this.state.page !== this.props.length ? (<div className="linkling"><Link to={"/news?page=" + (this.state.page + 1)} onClick={() => {this.updatePage(this.state.page + 1)}}>{this.state.page + 1}</Link></div>) : (<div hidden></div>)
        var pageLast = this.props.length !== 1 ? (<div className="linkling"><Link to={"/news?page=" + this.props.length} onClick={() => {this.updatePage(this.props.length)}}>Poslednja</Link></div>) : (<div hidden></div>)
        var pageCurrent = this.props.length !== 1 ? (<div className="linkling">{this.state.page}</div>) : (<div hidden></div>)
        const pageNav = (
            <div className="page-nav">
                {pageFirst}
                {pagePrevious}
                {pageCurrent}
                {pageNext}
                {pageLast}
            </div>
        )
        return (
            <div className="container">
                <h5 className="page-title">Novosti</h5>
                <div className="post-list">{postList}</div>
                {newbtn}
                {pageNav}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
        logged_in: state.auth.logged_in,
        length: state.post.length
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPostList: (pageSize, pageNumber) => dispatch(getPostList(pageSize, pageNumber)),
        getPages: (pageSize) => dispatch(getPages(pageSize))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);

