import React, {Component} from 'react'
import {addSection, storage} from '../firebase/index';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google'
import {ProgressBar, FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap'

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title:'',
            description:'',
            image: null,
            url: '',
            progress: 0,
            botCheck: false,
            validationMessage:{botMessage:'', titleMessage:'', imageMessage:''}
        }

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

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
        const {title, botCheck, image} = this.state;
        if(title !== '' && botCheck !== false && image !== null){
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
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
                        this.setState({url});
                    }).then(() => {
                            const {title,description, url} = this.state;
                            addSection(title,description,url)
                        }
                    )
                });
        }
        else{
            if(title === ''){
                this.setState({validationMessage:{titleMessage:'Wpisz tytuł!?'}})
            }
            else if(image === null){
                this.setState({validationMessage:{imageMessage:'Nie wybrałeś zdjęcia!'}})
            }
            else if(botCheck === false){
                this.setState({validationMessage:{botMessage:'Czyżbyś był botem?'}})
            }
        }
    }

    componentDidMount() {
        loadReCaptcha();
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }
    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }
    verifyCallback(recaptchaToken) {
        if(recaptchaToken){
            this.setState({botCheck:true});
            this.setState({validationMessage:{botMessage:'Wow! Wow! Nie jesteś botem!'}});
        }
        else{
            this.setState({botCheck:false});
        }
    }

    render() {
        const style = {
            //height: '100vh',
            display: 'flex',
            //flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        };
        return (
            <div style={style}>
                <form>
                    <FormGroup>
                        <ControlLabel>Dodaj nowego ClickBaita!</ControlLabel>
                        <FormControl
                            type="text"
                            value={this.state.title}
                            placeholder="Tytuł"
                            onChange={(event) => this.setState({title: event.target.value})}
                        />
                        <br/>
                        <FormControl
                            type="text"
                            value={this.state.description}
                            placeholder="Opis"
                            onChange={(event) => this.setState({description: event.target.description})}
                        />
                        <br/>
                        <input type="file" onChange={this.handleChange}/>
                        <br/>
                        {
                            this.state.progress === 100 ?
                                <ProgressBar bsStyle={'succes'}  now={this.state.progress} label={`${this.state.progress}%`}/>
                                :
                                <ProgressBar style={{width:'100%'}} active={true} striped bsStyle={'info'} now={this.state.progress} label={`${this.state.progress}%`} />
                        }
                        <ReCaptcha
                            size="visible"
                            render="explicit"
                            sitekey="6LcyiX0UAAAAALTKXFAmXWzlphyCOwpz284RLZis"
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                        />
                        <FormControl.Feedback />
                        <HelpBlock>
                            <p>{this.state.validationMessage.botMessage}</p>
                            <p>{this.state.validationMessage.imageMessage}</p>
                            <p>{this.state.validationMessage.titleMessage}</p>
                        </HelpBlock>
                    </FormGroup>
                    <Button onClick={this.handleUpload}>Dodaj!</Button>
                </form>
            </div>
        )
    }
}

export default Upload