import React from 'react';
import ShowSearch from './seach.js';
import LongList from './longList.js';
import '../../CSS/Show/hearder.scss';
class Show extends React.Component{
    constructor(){
        super();
        this.state = {
            ClickSort:false
        }
        this.handleClick = this.handleClick.bind(this);
        this.sortByTime = this.sortByTime.bind(this);

    }
    handleClick(){
        this.setState({
            ClickSort:!this.state.ClickSort
        })
    }
    sortByCommend(){
        console.log(666)
    }
    sortByTime(){
        console.log(777)
    }
    // onScroll(){
    //     console.log("scroll,",999)
    // }
    render(){
        return <div id="show">
                <ShowSearch 
                handleClick={this.handleClick}
                sortByCommend={this.sortByCommend}
                sortByTime={this.sortByTime}
                ClickSort = {this.state.ClickSort}
                ></ShowSearch>
               <LongList></LongList>
        </div>
    } 
}
export default Show;