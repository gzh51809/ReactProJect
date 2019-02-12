import React from 'react';
import Header from './Header';
import Appbody from './Appbody';
import  '../../CSS/HomeCss/index.scss';
class Home extends React.Component{
    render(){
        return <div id="home">
                <Header></Header>
                <Appbody></Appbody>
        </div>
    } 
}
export default Home;