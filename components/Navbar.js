import Link from "next/link";
import { useAuthContext } from "../context/AuthContext";
import { app } from "../lib/firebase";
import { getAuth, signOut } from "firebase/auth";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const auth = getAuth(app);
  const { user } = useAuthContext();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" px-10 flex justify-between items-center h-16">
        <h4 className="uppercase text-2xl text-main-blue">
          <Link href={"/"}>hash</Link>
        </h4>

        <Link href={"/dashboard"} className="text-main-black">
          Dashboard
        </Link>

        {user ? (
          <Link href={"/profile"} className="text-main-black">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          <Link href={"/login"} className="text-green-600">
            Login
          </Link>
        )}
      </div>
      <Separator />
    </>
  );
}
