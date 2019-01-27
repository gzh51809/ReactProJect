import React from 'react';
import { Input } from 'antd';
const Search = Input.Search;
//引入样式
// import '../CSS/header/index.scss'
class Header extends React.Component{
    render(){
        return <div id="H-search">
                <div className="city">
                    <i className="iconfont icon-dizhiguanli"></i>
                    <span>广州</span>
                </div>
                <div className="searchBar">
                    <Search
                    placeholder="搜索演出、艺人或场馆"
                    />
                </div>
                
        </div>
    } 
}
export default Header;