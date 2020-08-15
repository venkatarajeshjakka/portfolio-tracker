import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyBUcdUbP4oi4jahcCqsqrllVtzMZe9XX1g",
  authDomain: "portfoliotracker-4e17a.firebaseapp.com",
  databaseURL: "https://portfoliotracker-4e17a.firebaseio.com",
  projectId: "portfoliotracker-4e17a",
  storageBucket: "portfoliotracker-4e17a.appspot.com",
  messagingSenderId: "700425761470",
  appId: "1:700425761470:web:76231cafd95f1b0abee4ef"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.firestore().settings({ timestampsInSnapshots: true });

    console.log(this.auth);
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    console.log("register:");

    return await this.auth.createUserWithEmailAndPassword(email, password);

    //return this.auth.currentUser.updateProfile({
    //displayName: name
    //});
  }

  addQuote(quote) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }

    return this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .set({
        quote
      });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserQuote() {
    const quote = await this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .get();
    return quote.get("quote");
  }
}

export default new Firebase();
