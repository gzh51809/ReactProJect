import React from 'react'; 
import {NavLink,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Item } from 'antd-mobile/lib/tab-bar';
class ShowSearch extends React.Component{
  constructor(){
      super();
      this.state = {
          navHeadline:[
              {
                  text:'全部',
                  path:'/'
              },
              {
                  text:'演唱会',
                  path:'/'
              },
              {
                  text:'音乐会',
                  path:'/'
              },
              {
                  text:'话剧歌剧',
                  path:'/'
              },
              {
                  text:'儿童亲子',
                  path:'/'
              },
              {
                  text:'音乐剧',
                  path:'/'
              },
              {
                  text:'舞台芭蕾',
                  path:'/'
              },
              {
                  text:'戏曲综艺',
                  path:'/'
              },
              {
                  text:'展览',
                  path:'/'
              },
          ]
      }
      this.selected = this.selected.bind(this);
  }
  componentDidMount(){
    let li = document.querySelectorAll('.navBar ul>li');
    li[0].className = 'selected';
  }
  selected(e){
    let li = document.querySelectorAll('.navBar ul>li');
    for(var i = 0;i<li.length;i++){
        li[i].className = '';
    }
    e.target.className = 'selected';
  }

  goToSearch(){
    this.props.history.push('/search');
    this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
  }

  changeCity(){
    this.props.history.push('/city');
    this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:true}})
    }

    render(){
        let{sortByTime,sortByCommend,handleClick,ClickSort} = this.props;
        return  <div className="showSearch">
                    <div className="city" onClick={this.changeCity.bind(this)}>
                        <span>广州<i></i></span>
                    </div>
                    <div className="searchBar">
                        <div onClick={this.goToSearch.bind(this)}>
                            <span>
                                <i className="iconfont icon-sousuo"></i>
                                <span>搜索演出、艺人或场馆</span>
                            </span>
                        </div>
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
                            {
                                this.state.navHeadline.map(item=>{
                                    return  <li key={item.text} onClick = {this.selected}>{item.text}</li>
                                })
                            }
                        </ul>
                    </div>
            </div>  
        
    } 
}
ShowSearch = connect()(ShowSearch);
ShowSearch = withRouter(ShowSearch);

export default ShowSearch;