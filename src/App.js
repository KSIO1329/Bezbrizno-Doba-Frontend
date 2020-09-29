import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import PostDetails from './components/posts/PostDetails';
import SignIn from './components/auth/SignIn';
import CreatePost from './components/posts/CreatePost';
import PostList from './components/posts/PostList';
import SignOut from './components/auth/SignOut';
import About from './components/about/About';
import Contact from './components/about/Contact';
import Sidebar from './components/layout/Sidebar';
import Backdrop from './components/backdrop/Backdrop';
import Footer from './components/layout/Footer'
import './App.css';

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  render() {
    let sideDrawer;
    let backdrop;
    
    if(this.state.sideDrawerOpen){
      sideDrawer=<Sidebar click={this.drawerToggleClickHandler}/>;
      backdrop=<Backdrop click={this.drawerToggleClickHandler}/>;
    }
    return (
      <BrowserRouter>
        <div className="App Site">
          <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
          {sideDrawer}
          {backdrop}
          <main className="Site-content">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path='/post' component={PostDetails} />
              <Route path='/admin' component={SignIn} />
              <Route path='/logout' component={SignOut} />
              <Route path='/create_post' component={CreatePost} />
              <Route path='/news' component={PostList} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
            </Switch>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}