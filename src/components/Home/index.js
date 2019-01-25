import React from 'react';
import Header from './Header';
import Appbody from './Appbody';
// import Appfooter from './Appfooter';
import  '../../CSS/HomeCss/index.scss';
class Home extends React.Component{
    render(){
        return <div id="home">
                <Header></Header>
                <Appbody></Appbody>
                {/* <Appfooter></Appfooter> */}
        </div>
    } 
}
export default Home;