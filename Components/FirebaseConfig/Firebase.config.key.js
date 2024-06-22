// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYEM7CwtDP8Qd7v2KK1dadlymNOKAW2JM",
  authDomain: "donor-system-20d39.firebaseapp.com",
  projectId: "donor-system-20d39",
  storageBucket: "donor-system-20d39.appspot.com",
  messagingSenderId: "235077691235",
  appId: "1:235077691235:web:ce30e25c2c9bdaea295556"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);