import React, {Component} from 'react'
import {storage} from '../firebase/index';
import firebase from 'firebase/app'

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            description:'',
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({progress});
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({url});
                }).then(() => {
                    firebase.database().ref('/images').push().set({
                        title: this.state.title,
                        description: this.state.description,
                        picture_path : this.state.url
                    }).catch( error => console.log(error));
                })
            });
    }
    render() {
        console.log(this.state)
        const style = {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <progress value={this.state.progress} max="100"/>
                <br/>
                <input type={'text'} onChange={(event) => this.setState({title: event.target.value})}/>
                <input type={'text'} onChange={(event) => {this.setState({description: event.target.value})}}/>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>>
            </div>
        )
    }
}

export default Upload