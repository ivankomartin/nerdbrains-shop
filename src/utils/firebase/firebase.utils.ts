import {
  User,
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";
import {
  DocumentReference,
  Firestore,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
/* eslint-disable */

const firebaseConfig = {
  apiKey: "AIzaSyCVh6WQqwrRWoIxdc9puZkFbKIei13ZBlQ",
  authDomain: "commerce-nextjs-mui.firebaseapp.com",
  projectId: "commerce-nextjs-mui",
  storageBucket: "commerce-nextjs-mui.appspot.com",
  messagingSenderId: "275282128871",
  appId: "1:275282128871:web:9a0db52abbaf8ef2ad5742",
  measurementId: "G-0MFKQM3985",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth: Auth = getAuth();
export const signInWithGooglePopup = (): Promise<any> =>
  signInWithPopup(auth, provider);
export const db: Firestore = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth: User | null,
  addictionalInformation: Record<string, any> = {},
): Promise<DocumentReference | undefined> => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...addictionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", (error as Error).message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<any> => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (
  email: string,
  password: string,
): Promise<any> => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);

export const onAuthStateChangedListener = (
  callback: (user: User | null) => void,
) => onAuthStateChanged(auth, callback);
