import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDUWUp-Hj0F8BaXfZ137VUhwT7UXcGuSFs",
    authDomain: "restaurantapp-c95ea.firebaseapp.com",
    databaseURL: "https://restaurantapp-c95ea-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-c95ea",
    storageBucket: "restaurantapp-c95ea.appspot.com",
    messagingSenderId: "158785007350",
    appId: "1:158785007350:web:9fd49d8ecc47b130ad06d7"
  };

  const app = getApp.length > 0? getApp () : initializeApp (firebaseConfig);
  const firestore = getFirestore(app)
  const storage= getStorage(app)
  export {app,firestore,storage}