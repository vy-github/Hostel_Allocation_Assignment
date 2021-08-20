import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyAEkuPCBP4kel4V1Ss2nC2JYtPHjhsi_ks",
   authDomain: "hostel-allocation-d8f2d.firebaseapp.com",
   projectId: "hostel-allocation-d8f2d",
   storageBucket: "hostel-allocation-d8f2d.appspot.com",
   messagingSenderId: "771245800483",
   appId: "1:771245800483:web:37104c47fbf2dfdba8c596",
   measurementId: "G-ZZ8JRVEJXS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;