import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Show from './components/Show';
import Theater from './components/Theater';
import Mine from './components/Mine';
import Ticket from './components/E-ticket';
import Navbar from './components/navBar';
import City from './components/City';
import './CSS/pulic.scss';
import SearchPage from './components/Home/search';
// import store from './Redux/store.js';
import {connect} from 'react-redux';
class App extends Component {
  constructor(){
    super();
    this.state = {
      islogin:false
    }
    this.NavChange = this.NavChange.bind(this);
  }

  NavChange(idx,path){
    // this.setState({
    //   currentIndex:idx
    // });
    // console.log(this.state.islogin)
    let historyIndex = this.props.currentIndex;
    this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:idx,lastIndex:historyIndex}})
    if(path=='/ticket'||path=='/mine'){
      if(this.state.islogin==false){
        this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}});
        this.props.history.push('/login');
      }
      if(path=='/ticket'){
        this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
      }
    }
  }
  componentDidMount(){
    let user = sessionStorage.getItem('username');
    let hash = window.location.hash.split('/');
    switch(hash[1]){
      case 'home' :
          // this.setState({ currentIndex:0});
          this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:0}})
          break;
      case 'show' :
          // this.setState({ currentIndex:1});
          this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:1}})
          break;
      case 'theater' :
          // this.setState({ currentIndex:2});
          this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:2}})
          break;
      case 'ticket' :
          // this.setState({ currentIndex:3});
          this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:3}})
          break;
      case 'mine' :
          // this.setState({ currentIndex:4});
          this.props.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:4}})
          break;
    }
    if(user){
       this.setState({
        islogin:true
       })
    }
  }
  render() {
    // console.log('props',this.props)
    return (
      <div className="App">
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/show' component={Show}/>
        <Route path='/theater' component={Theater}/>
        <Route path='/mine' component={Mine}/>
        <Route path='/ticket' component={Ticket}/>
        <Route path='/search' component={SearchPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/city' component={City}/>
        <Redirect from="/" to="/home"/>
      </Switch>
       <Navbar 
       NavChange={this.NavChange}
       addClass={this.state.addClass}
       ></Navbar> 
      </div>
    );
  }
}

let mapStateToProps = (state)=>{
  return{
    ...state
  }
}

App = connect(mapStateToProps)(App);
App = withRouter(App);
export default App;
