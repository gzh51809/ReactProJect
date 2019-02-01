import React from 'react';
import { Carousel, Toast, WingBlank } from 'antd-mobile';
import axios from 'axios';
class Appbody extends React.Component{
    constructor(){
        super();
        this.state = {
            dataList:[
                {
                    name:'yuyu'
                },
                {
                    name:'yuyu'
                },
                {
                    name:'yuyu'
                },
                {
                    name:'yuyu'
                }
            ],
            fenlei:[
                {
                    text:'演唱会',
                    id:1,
                    imgurl:require("../../img/maike.png"),
                    path:'https://m.juooo.com/show/showsLibrary?cid=3&name=广州&caid=35'
                },
                {
                    text:'音乐会',
                    id:2,
                    imgurl:require("../../img/muice.png"),
                    path:'https://m.juooo.com/show/showsLibrary?cid=3&name=广州&caid=36'
                },
                {
                    text:'舞台剧',
                    id:3,
                    imgurl:require("../../img/wutaiju.png"),
                    path:'https://m.juooo.com/show/showsLibrary?cid=3&name=广州&caid=37'
                },
                {
                    text:'音乐剧',
                    id:4,
                    imgurl:require("../../img/muiceju.png"),
                    path:'https://m.juooo.com/show/showsLibrary?cid=3&name=广州&caid=38'
                },
                {
                    text:'儿童',
                    id:5,
                    imgurl:require("../../img/ertong.png"),
                    path:'https://m.juooo.com/show/showsLibrary?cid=3&name=广州&caid=39'
                },
            ],
            TeQu:[
                {   
                    text:'演出日历',
                    url:require("../../img/ShowCalendar.png"),
                    href:'https://m.juooo.com/calendar/index',
                },
                {   
                    text:'聚特惠',
                    url:require("../../img/JuTeHui.png"),
                    href:"https://m.juooo.com/activity/index",
                },
                {   
                    text:'学生专区',
                    url:require("../../img/students.png"),
                    href:"http://m.juooo.com/Student/index",
                },
                {   
                    text:'欢聚橙卡',
                    url:require("../../img/card.png"),
                    href:"https://m.juooo.com/Cardproduct/index",
                },
            ],
            showList:[
                {
                    name:'xiao',
                    id:1
                }
            ]
        }
    } 
    
    loadingToast() {
        Toast.loading('加载中...', 1, () => {
        //   console.log('Load complete !!!');
        });
      }
    componentDidMount(){
        this.loadingToast();
            axios.post('http://localhost:4008/farapi/index/hotsShowList')
            .then(res=>{
                this.setState({
                    dataList:res.data.data.slice(0,4),
                    showList:res.data.data,
                })
            });
    }
    render(){
        // console.log(this.state.showList)
        return <div id="main">
                        <Carousel
                        autoplay={true}
                        infinite
                        >   
                         {this.state.dataList.map((item,idx) => (
                            <a
                            key={item}
                            href={item.schedular_url}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={this.state.dataList[idx].pic}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                     </Carousel>
                        <div className="showType">
                            <ul>
                                {
                                    this.state.fenlei.map(item=>{
                                        return <li key={item.id}> 
                                                    <a href={item.path}>
                                                        <img src={item.imgurl} /> 
                                                    </a>
                                                    <span>{item.text}</span>
                                                </li> 
                                    })
                                }
                            </ul>
                        </div>
                        <div className="zhuangqu">
                        {
                            this.state.TeQu.map(item=>{
                                return <a href={item.href} key={item.href}>
                                            <img src={item.url}/>
                                            <span>{item.text}</span>
                                        </a>
                            })
                        }
                        </div>
                        <div className="hotShow">
                        <span>热门演出</span>
                        <i className="iconfont icon-fenlei"></i>
                        </div> 
                        <div className="showList">
                            <ul>
                                {
                                this.state.showList.map(item=>{
                                    return  <li key={item.id}>
                                                    <a href={item.schedular_url}>
                                                        <img src={item.pic} />
                                                    </a>
                                                    <div className="TheTitle">{item.show_name}</div>
                                                    <div className="addressAndTime">
                                                        <span className="time">起始-结束</span>
                                                        <span className="address">{item.city_name}</span>
                                                    </div>
                                                </li>
                                                })  
                                }
                            </ul>
                            <div className="more">
                                <p><span>查看全部演出></span></p>
                            </div>
                        </div>     
                </div>
    } 
}
export default Appbody;