import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from "firebase"
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css/animate.min.css'
import './scss/main.scss'

// const firebaseConfig = {
//     apiKey: "AIzaSyDCpCIh3APVL6neyL0F0N-1OgjBpBmqYPc",
//     authDomain: "vue-app-cf753.firebaseapp.com",
//     projectId: "vue-app-cf753",
//     storageBucket: "vue-app-cf753.appspot.com",
//     messagingSenderId: "223278288470",
//     appId: "1:223278288470:web:7644bb4f491b399e11b5f7"
// //   };
// firebase.initializeApp(firebaseConfig)
createApp(App).use(router).mount('#app')
