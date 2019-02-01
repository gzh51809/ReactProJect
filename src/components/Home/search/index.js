import React from 'react';
import axios from 'axios';
import '../../../CSS/HomeCss/searchPage.scss'
class SearchPage extends React.Component{
    constructor(){
        super();
        this.state = {
            keywords : [
                {
                    name:'贝隆夫人'
                },
                {
                    name:'CATS'
                },
                {
                    name:'摇滚红与黑'
                },
                {
                    name:'罗密欧与朱丽叶'
                },
                {
                    name:'长腿叔叔'
                   
                },
                {
                    name:'SID'
                },
                {
                    name:'金锁记',
                }
            ],
            isHaveHistory:false,
            iconIsApear:true
        }
        this.searchKeyWord = this.searchKeyWord.bind(this);
        this.goBack = this.goBack.bind(this);
        this.iconDisapear = this.iconDisapear.bind(this);
        this.iconApear = this.iconApear.bind(this);
    }

    searchKeyWord(){
        // console.log(this.refs.keyWord.value);
        let keyWord = this.refs.keyWord.value;
        axios.post('http://localhost:4008/farapi/Show/showsLibrary?cid=3&k='+keyWord)
        .then(res=>{
            // console.log(res);
            this.refs.data.innerHTML=res.data;
        })
    }
    goBack(){
        this.props.history.goBack();
    }

    iconDisapear(){
        this.setState({
            iconIsApear:false
        })
    }
    iconApear(){
        this.setState({
            iconIsApear:true
        })
    }
    render(){
        // console.log('histor',this.props.history);
        return <div id="H-search">
                <div className="seachBox">
                    <i className="iconfont icon-fanhui"  onClick={this.goBack}></i>
                      <span className="searchText">
                            <i className={`iconfont icon-sousuo ${this.state.iconIsApear?'':'disapear'}`} ref="icon"></i>
                            <input type="text" ref="keyWord" onChange={this.iconDisapear} onBlur={this.iconApear} placeholder="搜索演出、艺人或场馆"/>
                     </span>
                    <span className="clickSearch" onClick={this.searchKeyWord}>搜索</span>
                </div>
                <p>大家都在搜</p>
                <div className="hot">
                    {
                        this.state.keywords.map((item,idx)=>{
                            return  <a href={`https://m.juooo.com/Show/showsLibrary?cid=3&k=${item.name}`} key={idx}>{item.name}</a>
                        })
                    }
                </div>
                <div className={this.state.isHaveHistory?'chuxiang':''+" history"}>
                    <p>最近搜索</p>
                </div>
                <div ref="data">

                </div>
        </div>
    } 
}
export default SearchPage;