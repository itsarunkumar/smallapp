import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function getData(collectionName, id, where) {
  try {
    const querySnapshot = await getDocs(
      collection(db, `${collectionName}/${id}/${where}`)
    );
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  } catch (e) {
    console.log(e);
  }
}
