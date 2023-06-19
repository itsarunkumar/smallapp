"use client";

import { useState } from "react";
import addData from "@/utils/addData";
import { useAuthContext } from "@/context/AuthContext";
import { useQueryClient, useMutation } from "@tanstack/react-query";
// import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

export default function AddSheet() {
  const { user } = useAuthContext();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const mutation = useMutation({
    mutationKey: ["data"],
    mutationFn: (data) => addData(user.email, data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(data);

    mutation.mutate(data);
    setData({
      title: "",
      content: "",
    });
  };

  return (
    <Sheet>
      <SheetTrigger>
        <Button className="px-8 mt-3">Add +</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
        </SheetHeader>
        <form className="max-w-lg mx-auto" onSubmit={handleForm}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="text-lg font-medium text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              placeholder="Enter the topic"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:text-base"
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  title: e.target.value,
                }));
              }}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="text-lg font-medium text-gray-800"
            >
              Describe
            </label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={data.content}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 sm:text-base"
              onChange={(e) => {
                setData((prevState) => ({
                  ...prevState,
                  content: e.target.value,
                }));
              }}
            ></textarea>
          </div>
          <Button
            className="bg-blue-500 px-5 hover:bg-blue-700"
            onClick={() => {
              toast({
                title: "Added",
                description: "Note is added to list",
              });
            }}
          >
            Save
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
