import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBNv9rPCZm55i6x_km2unzlDqjlUWvjP30",
    authDomain: "webshop-c8940.firebaseapp.com",
    databaseURL: "https://webshop-c8940-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "webshop-c8940",
    storageBucket: "webshop-c8940.appspot.com",
    messagingSenderId: "1083862098161",
    appId: "1:1083862098161:web:52583d53527445e28d0950",
    measurementId: "G-242163LZ7S"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

// export const webshopRef = ref(database, "webshop")

export const webshopRef = firebaseConfig.databaseURL

ReactDOM.render(
    <BrowserRouter>
        <App />
        <MessengerCustomerChat
            pageId="106868175219891"
            appId="923162928397581"
            themeColor={'#cc8e84'}
        />
    </BrowserRouter>,
    document.getElementById('root')
);
