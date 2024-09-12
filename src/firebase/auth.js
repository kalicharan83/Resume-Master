import { createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from 'firebase/auth';
import { auth } from './firebaseConfig';

export async function doCreateUserWithEmailAndPassword(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function doSignInWithEmailAndPassword(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function doSignOut()
{
    return signOut(auth);
}