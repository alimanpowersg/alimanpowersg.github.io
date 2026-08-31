// Firebase configuration for Alimanpowersg
window.firebaseConfigured = true;
window.firebaseConfig = {
  apiKey: "AIzaSyDuTl-ZRYlKdl3CTjUCGpFDdwp8Hu3JhDg",
  authDomain: "alimanpowersg.firebaseapp.com",
  projectId: "alimanpowersg",
  storageBucket: "alimanpowersg.firebasestorage.app",
  messagingSenderId: "881524205766",
  appId: "1:881524205766:web:5c068caa97ec7bd6720fc7"
};

if (window.firebase && window.firebase.apps && !window.firebase.apps.length) {
  firebase.initializeApp(window.firebaseConfig);
}
