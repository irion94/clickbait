import React from 'react'
import {Panel, ListGroupItem} from 'react-bootstrap'
import Img from "react-image";
import {Link} from 'react-router-dom'
import {FacebookProvider, Like} from 'react-facebook'

const Item = (props) => {
    return (
        <ListGroupItem>
            <Panel>
                <Panel.Heading componentClass={'h3'}>{props.item.title}</Panel.Heading>
                <Panel.Body>
                    <Link to={`/clickbait/${props.item.id}`} props={props.item}>
                        <Img style={{maxWidth: '100%', maxHeight: 'auto'}} src={props.item.picture_path}/>
                    </Link>
                </Panel.Body>
                <Panel.Footer>
                    <FacebookProvider appId="202520040658664">
                        <Like href={`http://localhost:3001/clickbait/${props.item.id}`} size="large" colorScheme="dark"
                              share layout="button_count"/>
                    </FacebookProvider>
                </Panel.Footer>
            </Panel>
        </ListGroupItem>
    )
}
export default Item
