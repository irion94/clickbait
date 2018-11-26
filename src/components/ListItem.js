import React from 'react'
import {Panel, ListGroupItem} from 'react-bootstrap'
import Img from "react-image";
import {Link} from 'react-router-dom'

const ListItem = (props) => {
    console.log('item ', props)
    const onClick = (e) => {
        //console.log('item ', props.item, e)
    }

    return (
        <ListGroupItem>
            <Panel>
                <Panel.Heading onClick={() => onClick()}>{props.item.title}</Panel.Heading>
                <Panel.Body>
                        <Link to={`/clickbait/${props.item.id}`} onClick={() => onClick()}>
                            <Img style={{maxWidth:1024, maxHeight:576}} src={props.item.picture_path}/>
                        </Link>
                </Panel.Body>
            </Panel>
        </ListGroupItem>
    )
}
export default ListItem
