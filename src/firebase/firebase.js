import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBnMpifNGRRRp3hAyMlfmfAE7-tTUlFvrw",
  authDomain: "task-d61c6.firebaseapp.com",
  databaseURL: "https://task-d61c6.firebaseio.com",
  projectId: "task-d61c6",
  storageBucket: "task-d61c6.appspot.com",
  messagingSenderId: "202174572481"
};

firebase.initializeApp(config);

const storageService = firebase.storage();
const storageRef = storageService.ref();
const userRef = firebase.database().ref('users');

export const createUser = (info) => {

  return userRef.push(info)
}


