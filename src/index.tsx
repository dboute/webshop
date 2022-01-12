import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <MessengerCustomerChat
            pageId="106868175219891"
            appId="923162928397581"
            themeColor={'#cc8e84'}
            version={2.12}
            autoLogAppEvents={'true'}
            xfbml={'true'}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
