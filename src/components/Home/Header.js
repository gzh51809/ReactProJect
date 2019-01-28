import React from 'react';
import {NavLink} from 'react-router-dom';
class Header extends React.Component{
    render(){
        return <div id="H-search">
                <div className="city">
                    <i className="iconfont icon-dizhiguanli"></i>
                    <span>广州</span>
                </div>
                <div className="searchBar">
                    <NavLink to="search">
                        <span>
                            <i className="iconfont icon-sousuo"></i>
                            <span>搜索演出、艺人或场馆</span>
                        </span>
                    </NavLink>
                </div>
        </div>
    } 
}
export default Header;