import React, {Component} from 'react'
import {addSection, initializeReactGA, storage} from '../firebase/index';
import {loadReCaptcha, ReCaptcha} from 'react-recaptcha-google'
import {ProgressBar, FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'
import '../App.css';
import ReactGA from 'react-ga';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            description: '',
            image: null,
            url: '',
            progress: 0,
            botCheck: false,
            redirect: false,
            validationMessage: {botMessage: '', titleMessage: '', imageMessage: ''}
        }

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.handleFile = this.handleFile.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleFile = e => {
        if (e.target.files[0]) {
            if(e.target.files[0].size < 10485760){
                const image = e.target.files[0];
                this.setState(() => ({image}));
            }
            else {
                this.setState({image:null}, () => {
                    alert("Plik jest większy niż 10MB")
                })
            }
        }
    };

    handleUpload = () => {
        const {title, botCheck, image} = this.state;
        if (title !== '' && botCheck !== false && image !== null) {
            const {image} = this.state;
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({progress});
                },
                (error) => {
                    // error function
                    console.log(error);
                },
                () => {
                    // complete function
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({url});
                    }).then(() => {
                            const {title, description, url} = this.state;
                            addSection(title, description, url)
                        }
                    ).then(() => this.setState({redirect: true}))
                });
        }
        else {
            if (title === '') {
                this.setState({validationMessage: {titleMessage: 'Wpisz tytuł!?'}},() => {
                    alert(this.state.validationMessage.titleMessage)
                })
            }
            else if (image === null) {
                this.setState({validationMessage: {imageMessage: 'Nie wybrałeś zdjęcia!'}},() => {
                    alert(this.state.validationMessage.imageMessage)
                })
            }
            else if (botCheck === false) {
                this.setState({validationMessage: {botMessage: 'Czyżbyś był botem?'}}, () => {
                    alert(this.state.validationMessage.botMessage)
                })
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
        if (recaptchaToken) {
            this.setState({botCheck: true});
            this.setState({validationMessage: {botMessage: 'Wow! Wow! Nie jesteś botem!'}});
        }
        else {
            this.setState({botCheck: false});
        }
    }

    render() {
        initializeReactGA();
        const style = {
            display: 'flex',
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
                            maxlength={50}
                        />
                        <br/>
                        <input type="file" onChange={this.handleFile} accept="image/*"/>
                        <br/>
                        {
                            this.state.progress === 100 ?
                                <ProgressBar bsStyle={'succes'} now={this.state.progress}
                                             label={`${this.state.progress}%`}/>
                                :
                                <ProgressBar style={{width: '100%'}} active={true} striped bsStyle={'info'}
                                             now={this.state.progress} label={`${this.state.progress}%`}/>
                        }
                        <ReCaptcha
                            style={{width: '100%'}}
                            size="visible"
                            render="explicit"
                            sitekey="6LcyiX0UAAAAALTKXFAmXWzlphyCOwpz284RLZis"
                            onloadCallback={this.onLoadRecaptcha}
                            verifyCallback={this.verifyCallback}
                        />
                        <FormControl.Feedback/>
                        <HelpBlock bsClass={"help-block"}>
                            <p>{this.state.validationMessage.botMessage}</p>
                            <p>{this.state.validationMessage.imageMessage}</p>
                            <p>{this.state.validationMessage.titleMessage}</p>
                        </HelpBlock>
                    </FormGroup>
                    <Button onClick={this.handleUpload}>Dodaj!</Button>
                </form>
                {
                    this.state.redirect ? <Redirect to={"/"}/> : null
                }
            </div>
        )
    }
}

export default Upload