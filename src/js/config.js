import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDPJ3vDuqrQ6onG6xRE3Iwvf49FCV_jI7E',
    authDomain: 'instaclone-6a45b.firebaseapp.com',
    databaseURL: 'https://instaclone-6a45b.firebaseio.com',
    projectId: 'instaclone-6a45b',
    storageBucket: 'instaclone-6a45b.appspot.com',
    messagingSenderId: '906186124437'
};

firebase.initializeApp(config);

export default firebase;
