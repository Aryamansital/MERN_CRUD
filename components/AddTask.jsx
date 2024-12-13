"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title:
        </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder="Topic Title"
      />

<label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description:
        </label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        type="text"
        placeholder="Topic Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
