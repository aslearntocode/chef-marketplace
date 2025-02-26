'use client';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Add some debug logging
if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
    console.error('Firebase API key is missing. Please check your .env.local file');
}

let auth;

try {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} catch (error) {
    console.error('Error initializing Firebase:', error);
    throw error;
}

export { auth }; 