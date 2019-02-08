import React from 'react';
import '../../CSS/Eticket/index.scss';
import store from '../../Redux/store.js';
import { Popover, NavBar, Icon } from 'antd-mobile';
const Item = Popover.Item;
// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
class Eticket extends React.Component{
    state = {
        visible: false,
        selected: '',
      };
      onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
      };
      handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
      };
      goback(){
        let historyIndex = store.getState().lastIndex;//获取导航栏上一次的索引值
        this.props.history.go(-1);
        //导航栏高亮回退
        store.dispatch({type:'CHANGE_CURRENTINDEX',payload:{currentIndex:historyIndex,addClass:false}});
      }
    render(){
        return (<div id="main">
                <div className="goback" onClick={this.goback.bind(this)}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
                <NavBar
                    mode="light"
                    rightContent={
                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                        (<Item key="4" value="首页"  data-seed="logId">首页</Item>),
                        (<Item key="5" value="我的聚宝"  style={{ whiteSpace: 'nowrap' }}>我的聚宝</Item>),
                        ]}
                        align={{
                        overflow: { adjustY: 0, adjustX: 0 },
                        offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <div style={{
                        height: '100%',
                        padding: '0 15px',
                        marginRight: '-15px',
                        display: 'flex',
                        alignItems: 'center',
                        }}
                        >
                        <Icon type="ellipsis" />
                        </div>
                    </Popover>
                    }
                >
                电子票
                </NavBar>
                  <p>
                    您还没有任何电子订单哦~
                  </p>
             </div>
             )
    } 
}
export default Eticket;