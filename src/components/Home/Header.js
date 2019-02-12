import React from 'react';
import {connect} from 'react-redux';
import {NavLink,withRouter} from 'react-router-dom';
class Header extends React.Component{
    changeCity(){
        this.props.history.push('/city');
        this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
    }
    goToSearch(){
        this.props.history.push('/search');
        this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
    }
    render(){
        return <div id="H-search">
                <div className="city" onClick={this.changeCity.bind(this)}>
                    <i className="iconfont icon-dizhiguanli"></i>
                    <span>广州</span>
                </div>
                <div className="searchBar">
                    <div onClick={this.goToSearch.bind(this)}>
                        <span>
                            <i className="iconfont icon-sousuo"></i>
                            <span>搜索演出、艺人或场馆</span>
                        </span>
                    </div>
                </div>
        </div>
    } 
}

Header = connect()(Header);
Header = withRouter(Header);
export default Header;