import React from 'react'; 
import {NavLink} from 'react-router-dom';
import '../../CSS/regin/regin.scss';
class Login extends React.Component{
    constructor(){
        super();
        this.goBack = this.goBack.bind(this);
        this.ClickRegin = this.ClickRegin.bind(this);
    }
    goBack(){
        this.props.history.go(-2);
    }
    ClickRegin(){
        let userName = this.refs.userName.value;
        let psw = this.refs.psw.value;
        // console.log('userName:',userName,"psw:",psw)
        sessionStorage.setItem('username',userName)
    }
    render(){
        return <div className="regin">
            <div className="header">
                <div className="fanhui">
                    <i className="iconfont icon-fanhui" onClick={this.goBack}></i>
                </div>
                <div className="denglu">注册</div>
            </div>
            <div className="reginMessage">
                <div className="wellCome">
                   <p>欢迎来到聚橙网</p>  
                </div>
                <div className="nameAndPsw">
                   <ul>
                       <li>
                           <input type="text" ref="userName" placeholder="请输入手机号/邮箱"/>
                       </li>
                       <li>
                           <input type="password" ref="psw" placeholder="请输入密码"/>
                       </li>
                  </ul> 
                  <p>
                      <span className="chechCode">验证码登陆></span>
                      <span className="forgetPsw"><a href="#">忘记密码</a></span>
                  </p>
                </div>
                <div className="clickRegin">
                    <span onClick={this.ClickRegin}>登陆</span>
                </div>
            </div>
            <div className="otherWay">
                <div>
                    <p></p>
                    <span>其他方式登陆</span>
                </div>
                <div className="reginWay"></div>
            </div>
            <div className="space"></div>
        </div>
    }
}

export default Login;