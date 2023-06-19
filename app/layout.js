"use client";

import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-white">
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <Navbar />
            {children}
            <Toaster />
          </QueryClientProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
