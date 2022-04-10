import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import React from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {initializeApp} from 'firebase/app'
import translationEnApp from './assets/i18n/en.json';
import translationFrApp from './assets/i18n/fr.json';
import translationNlApp from './assets/i18n/nl.json';
import {getTranslations} from "./utils/get-translations";
import i18next from "i18next";
import { initReactI18next } from 'react-i18next';


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

initializeApp(firebaseConfig)

export const webshopRef = firebaseConfig.databaseURL

const initI18Next = async () => {
    const translationEnLibs = await getTranslations('en');
    const translationFrLibs = await getTranslations('fr');
    const translationNlLibs = await getTranslations('nl');
    i18next
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translation: {...translationEnLibs, ...translationEnApp},
                },
                fr: {
                    translation: {...translationFrLibs, ...translationFrApp},
                },
                nl: {
                    translation: {...translationNlLibs, ...translationNlApp},
                },
            },
            lng: 'fr',
            fallbackLng: 'fr',
        })
        .then(() => {
            ReactDOM.render(
                <BrowserRouter>
                    <App/>
                    <MessengerCustomerChat
                        pageId="106868175219891"
                        appId="923162928397581"
                        themeColor={'#cc8e84'}
                    />
                </BrowserRouter>,
                document.getElementById('root')
            );
        });
};

initI18Next();
