import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function addDataToNotes(user, data) {
  try {
    const docRef = await addDoc(
      collection(db, `notes/${user}/usernotes`),
      data
    );
    console.log("Document written with ID: ", docRef.id);
    return {
      result: {
        id: docRef.id,
        ...data,
      },
      error: null,
    };
  } catch (e) {
    console.log(e);
  }
}
