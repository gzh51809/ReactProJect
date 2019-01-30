import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import '../../CSS/Theater/Theater.scss';
class Theater extends React.Component{
    constructor(){
        super();
        this.state={
            LongDataList:[
                {
                    id:2,
                    name:'南山文体中心',
                    pic:'/group1/M00/01/D2/rAoKmVwknq2AQjJ3AABZC2s-o9o803.jpg',
                    count:258,
                }
            ]   
        }
    }
    componentDidMount(){
        // Show/getShowList
        axios.post('http://localhost:4008/farapi/Theatre/theatreListData?page=1')
        .then(res=>{
            this.setState({
                LongDataList:res.data.datas
            })
        })
    }
    render(){
        // console.log(this.state.LongDataList)
        return <div id="Theater">
                 <ul>
                    {   
                        this.state.LongDataList.map(item=>{
                            return  <li key={item.id} id={item.id}>
                                            <div className="img">
                                                <a href={'https://m.juooo.com/Theatre/index?tid='+item.id}>
                                                    <img src={"http://image.juooo.com/"+item.pic}/>
                                                </a>
                                            </div>
                                            <div className="message">
                                                <p className="headLine">{item.name}</p>
                                                <p>最近有{item.count}场演出</p>
                                                <NavLink to=''>查看全部演出</NavLink>
                                            </div>
                                    </li>
                        })
                    }
                </ul>
                <div></div>
        </div>
    } 
}
export default Theater;