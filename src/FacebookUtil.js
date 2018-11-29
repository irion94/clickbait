import {Facebook, FacebookApiException} from 'fb';

const options = ({

    appId: '202520040658664',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v1.0'

});

const fb = new Facebook(options);