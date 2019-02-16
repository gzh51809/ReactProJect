import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import  '../../CSS/city/city.scss';
class City extends React.Component{
    constructor(){
        super();
        this.state = {
            hotCity :['全国','深圳','广州','北京','上海','成都','重庆','石家庄','三亚','武汉','廊坊','长沙','南京','杭州','无锡','合肥','苏州','泉州','宜昌','济南','太原','郑州','澳门','昆明','西安','天津','宁波','香港','厦门','乌兰浩特'],
            allCity:[
                 {
                    id:'A',
                    lists:[
                        {
                            id:34,
                            name:'广州'
                        }
                    ]
                 }
            ]
        }
        this.goback = this.goback.bind(this);
        this.goToVeiw = this.goToVeiw.bind(this);
    }
    goback(){
        this.props.history.go(-1);
        this.props.dispatch({type:'CHANG_NAVBAR_STATE',payload:{addClass:false}})
    }
    componentDidMount(){
        // Index/getCityList
        axios.post('http://120.79.29.175:3008/farapi/Index/getCityList')
        .then(res=>{
            // console.log(res.data.city_list);
            this.setState({
               allCity:res.data.city_list
            })
            // console.log(this.state.allCity);
        })
    }

    goToVeiw(id){
        document.querySelector(`#${id}`).scrollIntoView(true);
    }

    render(){
        return (<div id="CityListBox">
                <div className="slide">
                    <span onClick={()=>this.goToVeiw('current')}>当前</span>
                    <span onClick={()=>this.goToVeiw('dinwei')}>定位</span>
                    <span onClick={()=>this.goToVeiw('hot')}>热门</span>
                    {
                         Object.keys(this.state.allCity).map(key =>{
                            return <span 
                            key={this.state.allCity[key].id}
                            onClick={()=>this.goToVeiw(this.state.allCity[key].id)}
                            >
                            {this.state.allCity[key].id}
                            </span>
                        })
                    }
                </div>
                <div className="CityListTop">
                    <div className="goback" onClick = {this.goback}>
                        <i className="iconfont icon-fanhui"></i>
                    </div>
                    <div className="title">切换城市</div>
                </div>
                <div className="CityListBody">
                    <div className="CityListBody-t">
                        <p id="current">当前城市</p>
                        <div>
                            <a href="javascript:void(0);">广州</a>
                        </div>
                        <p id="dinwei">定位城市</p>
                        <div>
                            <a href="javascript:void(0);">北京</a>
                        </div>
                        <p id="hot">热门城市</p>
                        <div className="hotCities">
                            {
                                this.state.hotCity.map(item=>{
                                    return <a href="javascript:void(0);" key={item}>{item}</a>
                                })
                            }
                        </div>
                        <p id="all">全部城市</p>
                    </div>
                    {
                        Object.keys(this.state.allCity).map(key =>{
                            return <div key={this.state.allCity[key].id} className="cityList" id={this.state.allCity[key].id}>
                                        <p className="KeyWord">{this.state.allCity[key].id}</p>
                                        {
                                            this.state.allCity[key].lists.map(item=>{
                                                return <div key={item.id}>{item.name}</div>
                                            
                                            })
                                        }
                                    </div>
                        })
                    }
                </div>
        </div>)
    } 
}
City = connect()(City);
export default City;