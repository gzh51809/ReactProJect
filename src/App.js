import React, { Component } from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Show from './components/Show';
import Theater from './components/Theater';
import Mine from './components/Mine';
import './CSS/pulic.scss'
class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/show' component={Show}/>
        <Route path='/theater' component={Theater}/>
        <Route path='/mine' component={Mine}/>
        <Redirect from="/" to="/home"/>
       </Switch>
       <div className="footerFiex">我是底部导航栏</div>
      </div>
    );
  }
}

export default App;
