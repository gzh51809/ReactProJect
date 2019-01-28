import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
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
                },
                
            ]
        }
    }
    componentDidMount(){
            axios.post('http://localhost:4008/farapi/index/hotsShowList')
            .then(res=>{
                this.setState({
                    dataList:res.data.data.slice(0,4)
                })
            });
    }
    render(){
        console.log(this.state.dataList)
        return <div id="main">
                    <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
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
        </div>
    } 
}
export default Appbody;