import React from 'react';
import '../../CSS/mine/mine.scss';
class Mine extends React.Component{
    constructor(){
        super();
        this.state =  {
                userMessage: { 
                    userLogo:require("../../img/logo-user.png"),
                    username:'12345678910',
                    id:'12321'
                },

            } 
    }
    render(){
        let userLogo = this.state.userMessage.userLogo;
        let username = this.state.userMessage.username;
        let ID = this.state.userMessage.id;
        return <div id="mine">
                <div className="TopBoxOfMine">
                    <div className="TopBoxOfMine-t">
                        <div className="userLogo">
                            <img src={userLogo}/>
                        </div>
                        <div className="userIfo">
                            <span className="user">{username}</span>
                            <span className="userPower">
                                <img src={require('../../img/userPower.png')}/>
                            </span>
                            <p>ID:{ID}</p>
                            <i className="iconfont icon-jiantouyou"></i>
                        </div>
                    </div>
                    <div className="TopBoxOfMine-b">
                        <ul>
                            <li className="PLUS-CARD">橙PLUS卡</li>
                            <li className="VIPPower">尊享多项特权</li>
                        </ul>
                        <p>开通橙PLUS卡,限时送一百元</p>
                    </div>
                </div>
                <div className="bodyOfMine">
                    <div className='bodyOfMine-t'>
                        <ul>
                            <li>
                                <p>00<span>元</span></p>
                                <span>余额</span>
                            </li>
                            <li>
                                <p>00<span>分</span></p>
                                <span>积分</span>
                            </li>
                            <li>
                                <p>00<span>张</span></p>
                                <span>橙卡</span>
                            </li>
                            <li>
                                <p>00<span>张</span></p>
                                <span>优惠券</span>
                            </li>
                        </ul>
                    </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                    <div className="myOrder">
                         <a>
                            <i className="iconfont icon-wode"></i> 
                            <span>我的订单</span>
                            <div>
                                <span>待付款0/待收货0</span>
                                <i className="iconfont icon-jiantouyou"></i>
                            </div>
                        </a>
                     </div>
                
                </div>
        </div>
    } 
}
export default Mine;