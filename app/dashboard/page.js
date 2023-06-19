"use client";
import { useAuthContext } from "@/context/AuthContext";
import Sidebar from "@/components/Sidebar";
import AddNote from "@/components/AddNote";

export default function dashboard() {
  const { user } = useAuthContext();

  return (
    <div className=" flex justify-center items-center">
      <Sidebar user={user} />
      <div className="w-5/6  min-h-screen">
        <AddNote />
      </div>
    </div>
  );
}
