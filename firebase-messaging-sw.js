// Import the Firebase libraries for service workers
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVz9R96cCA8OntoZQRUzo8B3ehs2a7vKU",
  authDomain: "gdrnotificationhandler.firebaseapp.com",
  projectId: "gdrnotificationhandler",
  storageBucket: "gdrnotificationhandler.firebasestorage.app",
  messagingSenderId: "77384173551",
  appId: "1:77384173551:web:c19db532459fc62e45581a",
  measurementId: "G-9EXZBVKC18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background push notifications
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  // Customize notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
