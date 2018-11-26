import React, {Component} from 'react'
import ListItem from "../components/ListItem";
import axios from "axios";

class ClickBaitItem extends Component{
    state = {
      item: {title:'',patch:''}
    };
    componentDidMount(){
        axios.get(`http://localhost:3000/image?id=${this.props.match.params.id}`).then((result) => {
            console.log('result:',result)
            this.setState({item:result.data})
        });
    }

    render() {
        let item = this.state.item;
        console.log("clickbaititem", this.state)
        return (
            <div>
                <ListItem item={this.state.item}/>
            </div>
        )
    }
};

export default ClickBaitItem