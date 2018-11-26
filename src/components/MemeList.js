import React from 'react'
import {map} from 'ramda'
import ListItem from "./ListItem";
import {ListGroup} from 'react-bootstrap'
import MyPagination from "./MyPagination";
import axios from 'axios'
import firebase from 'firebase/app'

class MemeList extends React.Component {
    state = {
        array: []
    }

    componentDidMount() {
        let list = [];
        firebase.database().ref('/images').once('value')
            .then((result) => {
                map((item) => list.push(item), result.val());
                console.log(list);
                this.setState({array:list})
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
                <MyPagination/>
            </ListGroup>
        )
    }
}

export default MemeList