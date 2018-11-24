import React from 'react'
import {Panel, ListGroupItem} from 'react-bootstrap'
import Img from "react-image";

const ListItem = (props) => {

    const onClick = (e) => {
        console.log('item ', props.item, e)
    }

    return (
        <ListGroupItem>
            <Panel>
                <Panel.Heading onClick={() => onClick()}>{props.title}</Panel.Heading>
                <Panel.Body>
                        <a href={"/clickbait"} onClick={() => onClick()}>
                            <Img height={300} width={300} src={props.img}/>
                        </a>
                </Panel.Body>
            </Panel>
        </ListGroupItem>
    )
}
export default ListItem
