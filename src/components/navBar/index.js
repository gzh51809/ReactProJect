import React from 'react'; 
import {NavLink} from 'react-router-dom';
import store from '../../Redux/store.js';
class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            footerNav:[
                {
                  text:'首页',
                  path:'/home',
                  icon:'icon-shouye'
                },
                {
                  text:'演出库',
                  path:'/show',
                  icon:'icon-fenlei'
                },
                {
                  text:'剧院',
                  path:'/theater',
                  icon:'icon-shouye'
                },
                {
                  text:'电子票',
                  path:'/ticket',
                  icon:'icon-youhuiquan'
                },
                {
                  text:'我的',
                  path:'/mine',
                  icon:'icon-wode'
                },
              ],
        }
    }
    render(){
        let {NavChange} = this.props;
        let currentIndex = store.getState().currentIndex;
        let addClass = store.getState().addClass;
        // console.log('navb',store.getState());
        return  <div className={`footerFiex ${addClass?'disapear':''}`}>
                <ul>
                {
                    this.state.footerNav.map((item,idx)=>{
                    return ( 
                            <li key={item.path} onClick={()=>NavChange(idx,item.path)}>
                            <NavLink to={item.path} className={currentIndex==idx?'selected':''}>
                            <i  className={"iconfont "+item.icon}></i>
                            <p className={currentIndex==idx?'selected':''}>{item.text}</p>
                            </NavLink>
                    </li>)
                    })
                }
                </ul>
            </div>
    } 
}
export default Navbar;