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
        this.handleScroll = this.handleScroll.bind(this)
    }
    loadingToast() {
        Toast.loading('加载中...', 1, () => {
        //   console.log('Load complete !!!');
        });
    }

    componentWillMount(){
        window.addEventListener('scroll',this.handleScroll,false);
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
    componentWillUnmount() {
        // window.onscroll = '';
        // console.log(888)
        window.removeEventListener('scroll',this.handleScroll,false)
    }
    
    handleScroll=(event)=>{
        let clientHeight = document.getElementsByClassName('LongList')[0].clientHeight; //可视区域高度 
        let scrollTop  = document.getElementsByClassName('LongList')[0].scrollTop;//滚动条滚动高度
        let scrollHeight = document.getElementsByClassName('LongList')[0].children[0].scrollHeight; //滚动内容高度
        let res = scrollHeight-scrollTop-clientHeight;
        // console.log(event)
        if(res<=-109){
            this.loadingToast();
            axios.post('http://localhost:4008/farapi/Show/getShowList')
            .then(res=>{
                this.setState({
                    LongDataList:[...this.state.LongDataList,...res.data.data.list.slice(0,7)]
                })
            })
        }
    }

    render(){
        // console.log(this.state.LongDataList);
        // let {onScroll} = this.props;
        return <div className="LongList" onScroll={this.handleScroll}>
                <ul>
                    {
                        this.state.LongDataList.map(item=>{
                            return  <li key={item.id+Math.random()*10} id={item.id}>
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