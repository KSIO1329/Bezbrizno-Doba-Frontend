import React, { Component } from 'react'
import Notifications from './Notifications';
import LandingPage from './LandingPage';
import './Dashboard.css';
import { connect } from 'react-redux';
import {getPostList} from '../../store/actions/postActions';
import Background from '../../img/pexels-emre-kuzu-2385569.jpg';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getPostList(3,1)
    }
    render() {
        //console.log(this.props)
        const {posts} = this.props;
        return (
            <div className="dashboard">
                <div className="carousel-ks" style={{backgroundImage: `url(${Background})`}}>
                    <h2 className="h2-title">Agencija za pomoć u kući <br></br><i>Bezbrižno doba</i></h2>
                </div>
                <div className="container core-content">
                    <div className="row">
                        <div className="col s12 m9"><LandingPage/></div>
                        <div className="col m3 hide-on-small-only"><Notifications posts={posts}/></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPostList: (pageSize, pageNumber) => dispatch(getPostList(pageSize, pageNumber))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
