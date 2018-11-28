import React from 'react'
import {map} from 'ramda'
import ListItem from "./ListItem";
import {ListGroup} from 'react-bootstrap'
import MyPagination from "./MyPagination";
import firebase from 'firebase/app'

class MemeList extends React.Component {
    state = {
        array: [],
        clickbait_count: null
    };

    componentDidMount() {
        let list = [];
        firebase.database().ref('/').once('value')
            .then((result) => {
                this.setState({clickbait_count: result.numChildren()});
                map((item) => (
                    list.push(item)
                ), result.val());

                this.setState({array: list.reverse()})
            });
    }

    render() {
        console.log('state', this.state.array)
        return (
            <ListGroup>
                {
                    map((item) => (
                        <ListItem item={item}/>
                    ), this.state.array)
                }
                <MyPagination count={this.state.clickbait_count}/>
            </ListGroup>
        )
    }
}

export default MemeList