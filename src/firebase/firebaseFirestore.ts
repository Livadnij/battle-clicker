import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  Firestore,
  setDoc,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebaseConfig";
import { UserType } from "types/types";

const db: Firestore = getFirestore(firebaseApp);

/**
 * Add a document to a Firestore collection
 */
export const addUser = async (
  collectionName: string,
  user: UserType,
  userID: string
) => {
  try {
    await setDoc(doc(db, collectionName, userID), user);
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

/**
 * Get all documents from a Firestore collection
 */
export const getUsers = async (collectionName: string) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

/**
 * Update a document in a Firestore collection
 */
export const updateUser = async (
  collectionName: string,
  updatedUser: UserType
) => {
  try {
    const docRef = doc(db, collectionName, `${updatedUser.id}`);
    await updateDoc(docRef, updatedUser);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

/**
 * Delete a document from a Firestore collection
 */
export const deleteUser = async (collectionName: string, userID: string) => {
  try {
    const docRef = doc(db, collectionName, userID);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};

/**
 * Get a single document from Firestore by ID
 */
export const getUserById = async (collectionName: string, userID: string) => {
  try {
    const docRef = doc(db, collectionName, userID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as UserType;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
    throw error;
  }
};
