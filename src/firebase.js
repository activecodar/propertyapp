import {auth as firebaseAuth, firestore, functions, storage, initializeApp} from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "xxxx",
	authDomain: "xxx",
	databaseURL: "xxx",
	projectId: "xxx",
	storageBucket: "xxx",
	messagingSenderId: "xx",
	appId: "xx",
	measurementId: "xx",
};
// Initialize firebase
initializeApp(firebaseConfig);
export const auth = firebaseAuth()
export const firebaseStorage = storage()
export const firebaseFirestore = firestore()
export const firebaseFunctions = functions()