"use client";
import React, { useState } from "react";
import signIn from "@/lib/auth/signin";
import signUp from "@/lib/auth/signup";
import { useRouter } from "next/navigation";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      router.push("/");
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-1/4 flex justify-center items-start gap-3 flex-col bg-white rounded-lg shadow p-6"
      >
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-slate-900"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full text-slate-900"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md mt-4">
          Login
        </button>
      </form>
    </div>
  );
}
