import React from 'react'
import {map} from 'ramda'
import faker from 'faker'
import ListItem from "./ListItem";
import {ListGroup} from 'react-bootstrap'
import MyPagination from "./MyPagination";

class MemeList extends React.Component {

    render() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            array.push({
                title: faker.name.jobDescriptor(),
                img: faker.image.avatar()
            })
        }

        console.log(array);

        return (
            <ListGroup>
                {
                    map((item) => (
                        <ListItem item={item} title={item.title} img={item.img}/>
                    ), array)
                }
                <MyPagination/>
            </ListGroup>
        )
    }
}

export default MemeList