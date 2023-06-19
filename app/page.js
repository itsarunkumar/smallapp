"use client";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="  min-w-screen min-h-screen flex justify-center items-center flex-col mt-10">
      <h1 className="uppercase text-8xl font-thin">Hash</h1>
      <p className="w-2/4 text-center mt-10 ">
        "Unlock your productivity and unleash your creativity with our
        cutting-edge notes storing app, your ultimate second brain! Capture,
        organize, and effortlessly retrieve information, freeing up your mental
        space for the important stuff."
      </p>
      <div className="mt-4">
        <Link href={user ? "/dashboard" : "/login"}>
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
