import React from 'react';
import { Toast } from 'antd-mobile';
import axios from 'axios';
class LongList extends React.Component{
    constructor(){
        super();
        this.state = {
            LongDataList :[
                {
                    id:null,
                    schedular_name:'3D科幻舞台剧《三体》2019安可场 - 深圳站',
                    pic:'/group1/M00/01/E4/rAoKmVxJtreAPlGsAACSxecbi44867.jpg',
                    show_time:'2019.05.10-2019.05.11',
                    v_name:'南山文体中心剧院大剧院',
                    min_price:180,
                    max_price:999
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
        axios.post('http://localhost:4008/farapi/Show/getShowList')
        .then(res=>{
            this.setState({
                LongDataList:res.data.data.list
            })
        })
    }
    render(){
        // console.log(this.state.LongDataList);
        return <div className="LongList">
                <ul>
                    {
                        this.state.LongDataList.map(item=>{
                            return  <li key={item.id} id={item.id}>
                                        <a href={'https://m.juooo.com/ticket/'+item.id}>
                                            <div className="img">
                                                    <img src={"http://image.juooo.com/"+item.pic}/>
                                            </div>
                                            <div className="message">
                                                <p className="moveTitle">{item.schedular_name}</p>
                                                <p className="show_time">{item.show_time}</p>
                                                <p className="address">{item.v_name}</p>
                                                <p className="price">￥{item.min_price}-{item.max_price}</p>
                                            </div>
                                        </a>
                                    </li>
                        })
                    }
                </ul>
                <div className="LoadingMore">
                  <p>正在加载更多……</p> 
               </div>   
             </div>  
        
    } 
}
export default LongList;