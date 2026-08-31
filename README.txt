ALIMANPOWERSG - ONLINE MULTI-PHOTO GALLERY SETUP

The Firebase web config has already been inserted into firebase-config.js.

ONE-TIME FIREBASE STEPS

1. Open Firebase Console: https://console.firebase.google.com/
2. Open the project: alimanpowersg
3. Authentication -> Sign-in method -> enable Anonymous.
4. Firestore Database -> Create database. Start in production mode.
5. Firestore -> Rules: publish the rules below.
6. Storage -> Get started. If Firebase asks you to upgrade to Blaze, complete that step in your own Firebase account. Storage billing/plan requirements are controlled by Firebase.
7. Storage -> Rules: publish the rules below.

FIRESTORE RULES
----------------
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{projectId} {
      allow read, write: if request.auth != null;
    }
  }
}

STORAGE RULES
----------------
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /projects/{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

HOW TO UPLOAD MANY PHOTOS
----------------
1. Open admin.html.
2. Login with the existing admin credentials.
3. Project Gallery -> enter a title/description.
4. Click Choose File and select multiple images at once (up to 10).
5. Click Upload Selected Photos.
6. The photos are uploaded to Firebase Storage and their public-to-authenticated URLs are saved in Firestore.
7. Open/refresh index.html; everyone visiting the website will see the same online gallery.

IMPORTANT
----------------
- The website's admin username/password is currently client-side demo protection. It is NOT secure authentication. For a real production admin system, replace it with Firebase Authentication and admin-only rules.
- Do not paste Firebase service-account/private keys into the website. The web config above is intended for browser use.
