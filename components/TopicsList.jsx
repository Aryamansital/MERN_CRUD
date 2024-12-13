'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { HiPencilAlt } from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"

const getTopics = async () => {
  try {
    const res = await fetch("/api/topics", {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch topics")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading topics: ", error)
  }
}

export default function TopicsList() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchTopics = async () => {
      const { topics } = await getTopics()
      setTopics(topics)
    }
    fetchTopics()
  }, [])

  return (
    <ul className="space-y-4 mt-8">
      {topics.map((t) => (
        <li key={t._id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{t.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t.description}</p>
            </div>
            <div className="flex gap-2">
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`} className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600">
                <HiPencilAlt size={20} />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}