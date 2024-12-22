//Copilot yazdı...

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

// Function to upload image
export const uploadImage = async (file) => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    // Save image URL to Firestore
    await addDoc(collection(db, "images"), {
        url: downloadURL,
        name: file.name,
        createdAt: new Date()
    });

    return downloadURL;
};

// Function to get all images
export const getImages = async () => {
    const querySnapshot = await getDocs(collection(db, "images"));
    const images = [];
    querySnapshot.forEach((doc) => {
        images.push(doc.data());
    });
    return images;
};