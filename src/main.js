import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBfgXEN24QqLe_A8jPn1QYSXOqRiQ5Rj04",
    authDomain: "asadjangooblog.firebaseapp.com",
    projectId: "asadjangooblog",
    storageBucket: "asadjangooblog.appspot.com",
    messagingSenderId: "737659560349",
    appId: "1:737659560349:web:06405f0c52bcbe3742cf74"
};
firebase.initializeApp(firebaseConfig)
var db = firebase.firestore()

store.dispatch('fetchHeadline', db)
store.dispatch('fetchPosts', db)

createApp(App).use(router).use(store).mount('#app')
