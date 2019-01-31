import React from 'react'; 
import {NavLink} from 'react-router-dom';
class ShowSearch extends React.Component{
    componentDidMount(){
        // console.log()
    }
    render(){
        let{sortByTime,sortByCommend,handleClick,ClickSort} = this.props;
        return  <div className="showSearch">
                    <div className="city">
                        <span>广州<i></i></span>
                    </div>
                    <div className="searchBar">
                        <NavLink to="search">
                            <span>
                                <i className="iconfont icon-sousuo"></i>
                                <span>搜索演出、艺人或场馆</span>
                            </span>
                        </NavLink>
                    </div>
                    <div className="sort" onClick={handleClick}>
                        排序
                        <div className={`sortType ${ClickSort?'':"isapear"}`}>
                            <span className="selected" onClick={sortByCommend}>推荐排序</span><br/>
                            <span onClick={sortByTime}>时间排序</span>
                        </div>
                    </div>
                    <div className="navBar">
                        <ul>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                            <li>全部</li>
                        </ul>
                    </div>
            </div>  
        
    } 
}
export default ShowSearch;