import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Show from './components/Show';
import Theater from './components/Theater';
import Mine from './components/Mine';
import Ticket from './components/E-ticket';
import Navbar from './components/navBar';
import './CSS/pulic.scss';
import SearchPage from './components/Home/search';
import store from './Redux/store.js';
// console.log("init",store.getState())
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
    let historyIndex = store.getState().currentIndex;
    store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:idx,lastIndex:historyIndex}})
    if(path=='/ticket'&&!this.state.islogin){
      this.props.history.push('/login');
      store.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
    }
    if(path=='/mine'&&!this.state.islogin){
      this.props.history.push('/login');
      store.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
    }
  }
  componentDidMount(){
    let user = sessionStorage.getItem('username');
    let hash = window.location.hash.split('/');
    switch(hash[1]){
      case 'home' :
          // this.setState({ currentIndex:0});
          store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:0}})
          break;
      case 'show' :
          // this.setState({ currentIndex:1});
          store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:1}})
          break;
      case 'theater' :
          // this.setState({ currentIndex:2});
          store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:2}})
          break;
      case 'ticket' :
          // this.setState({ currentIndex:3});
          store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:3}})
          break;
      case 'mine' :
          // this.setState({ currentIndex:4});
          store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:4}})
          break;
    }
    if(user){
       this.setState({
        islogin:true
       })
    }
  }
  render() {
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
        <Redirect from="/" to="/home"/>
      </Switch>
       <Navbar 
       NavChange={this.NavChange}
       addClass={this.state.addClass}
       ></Navbar> 
       {/* <div className="footerFiex">
          <ul>
            {
              this.state.footerNav.map((item,idx)=>{
                return ( 
                      <li key={item.path} onClick={()=>this.NavChange(idx,item.path)}>
                         <NavLink to={item.path} className={this.state.currentIndex==idx?'selected':''}>
                        <i  className={"iconfont "+item.icon}></i>
                        <p className={this.state.currentIndex==idx?'selected':''}>{item.text}</p>
                        </NavLink>
              </li>)
              })
            }
          </ul>
       </div> */}
      </div>
    );
  }
}
App = withRouter(App);

export default App;
