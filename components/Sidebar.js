"use client";

import getData from "@/utils/getData";
import { useAuthContext } from "@/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Separator } from "./ui/separator";
import Link from "next/link";
import AddSheet from "./addSheet";

export default function Sidebar() {
  const { user } = useAuthContext();
  const router = useRouter();

  const { data, error, isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: () => getData("notes", user.email, "usernotes"),
  });

  console.log(data);

  if (error) {
    router.push("/error");
  }

  // const { result, error } = await getData("notes", user.email, "usernotes");
  // console.log(result);

  return (
    <div className=" px-10 w-1/6 border-x-2 min-h-screen">
      <AddSheet />
      {data &&
        data.map((note) => (
          <div key={note.id} className="mt-2">
            <Link href={`/${note.id}`} className="cursor-pointer">
              {note.title}
            </Link>
            <Separator />
          </div>
        ))}
    </div>
  );
}
