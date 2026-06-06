const firebaseConfig = {
  apiKey: "AIzaSyDfR46sDM8DIQr9Fm7g8R2hh50lvikoPQo",
  authDomain: "gju-resource-hub.firebaseapp.com",
  projectId: "gju-resource-hub",
  storageBucket: "gju-resource-hub.firebasestorage.app",
  messagingSenderId: "1074524934130",
  appId: "1:1074524934130:web:620e76a8baca499989a56b"
};

window.db = null;
window.auth = null;
//window.storage = null;
window.isFirebaseInitialized = false;

try {
    if (firebaseConfig.apiKey && firebaseConfig.apiKey.trim() !== "") {
        firebase.initializeApp(firebaseConfig);
        window.db = firebase.firestore();
        window.auth = firebase.auth();
        window.storage = firebase.storage();
        window.isFirebaseInitialized = true;
        console.log("Firebase Cloud Backend Initialized Successfully.");
    }
} catch (error) {
    console.error(error);
}