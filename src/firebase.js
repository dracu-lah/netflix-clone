import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC05eI_JoWwxBgIvH3buwGo2tcAJNeB86A",
  authDomain: "netflix-clone-5d1ed.firebaseapp.com",
  projectId: "netflix-clone-5d1ed",
  storageBucket: "netflix-clone-5d1ed.appspot.com",
  messagingSenderId: "224017651936",
  appId: "1:224017651936:web:dd468fdd6267538aaa1885"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;