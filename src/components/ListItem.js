import React from 'react'
import {Panel, ListGroupItem} from 'react-bootstrap'
import Img from "react-image";
import {Link} from 'react-router-dom'
import {FacebookProvider, ShareButton} from 'react-facebook'

const ListItem = (props) => {
    const onClick = (e) => {
    }
    console.log('list item:',props)
    return (
        <ListGroupItem>
            <Panel>
                <Panel.Heading componentClass={'h2'} onClick={() => onClick()}>{props.item.title}</Panel.Heading>
                <Panel.Body>
                        <Link to={`/clickbait/${props.item.id}`} onClick={() => onClick()} props={props.item}>
                            <Img style={{maxWidth:1024, maxHeight:576}} src={props.item.picture_path}/>
                        </Link>
                </Panel.Body>
                <Panel.Footer>
                    /TODO/
                </Panel.Footer>
            </Panel>
        </ListGroupItem>
    )
}
export default ListItem
