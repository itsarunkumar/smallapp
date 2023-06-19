"use client";
import Sidebar from "@/components/Sidebar";
import { doc, getDoc, collection, query, where } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import { db } from "@/lib/firebase";
import { useAuthContext } from "@/context/AuthContext";

export default function SingleNote(url) {
  const { user } = useAuthContext();

  const { data, isLoading } = useQuery({
    queryKey: ["single-note", url.params.single_note],
    queryFn: async () => {
      const docRef = doc(
        db,
        `notes/${user.email}/usernotes/`,
        url.params.single_note
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      }

      return null;
    },
  });

  console.log(data);

  return (
    <div className="flex justify-center items-center">
      <Sidebar />
      <div className="w-5/6  min-h-screen">
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
          </>
        )}
      </div>
    </div>
  );
}
