import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class FirebaseAPI {
  constructor() {
    this.notesCollection = 'notes';
    this.usersCollection = 'users';
  }

  signInUser(username, password) {
    return auth().signInWithEmailAndPassword(username, password);
  }

  signOutUser() {
    return auth().signOut();
  }

  getNotesCollection(userId) {
    return firestore()
      .collection(this.usersCollection)
      .doc(userId)
      .collection(this.notesCollection);
  }
}

export default new FirebaseAPI();
