import React from 'react'
import {map} from 'ramda'
import ListItem from "./Item";
import {ListGroup} from 'react-bootstrap'
import MyPagination from "./MyPagination";
import firebase from 'firebase/app'
import {db} from "../firebase";

class MemeList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            array: [],
            clickbait_count: null,
            page_number: 1
        };
    }

    pageHandler(event) {
        this.setState({page_number: event})
    }

    componentDidMount() {
        this.setState({page_number: parseInt(this.props.page) - 1})
        let list = [];
        firebase.database().ref('/').once('value').then((result) => {
            this.setState({clickbait_count: result.numChildren()}, () => {
                firebase.database().ref('/').once('value')
                    .then((result) => {
                        this.setState({clickbait_count: result.numChildren()});
                        map((item) => (
                            list.push(item)
                        ), result.val());

                        this.setState({array: list.reverse().slice(this.state.page_number * 5, this.state.page_number * 5 + 5)})
                    });
            })
        });

    }

    render() {
            return (
                <ListGroup>
                    {
                        map((item) => (
                            <ListItem item={item}/>
                        ), this.state.array)
                    }

                    <MyPagination number={parseInt(this.props.page)} onClick={() => this.pageHandler}
                                  count={this.state.clickbait_count}/>
                </ListGroup>
            )
    }
}

export default MemeList