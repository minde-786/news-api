import React from "react"
import { NewsItem } from "@/type/type"
import Link from "next/link"

type newsProps = {
  item?: NewsItem[] 
}

function Card({ item = [] }: newsProps) { 
  return (
    <div className="md:grid grid-cols-3 lg:gap-3 mt-6 px-4">
      {item.length === 0 && <p className="col-span-3 text-center">No news available</p>}
      {item.map((curItem, index) => {
        if (!curItem.urlToImage) return null
        return (
          <div
            key={index}
            className="border border-slate-300 rounded mt-2 shadow-lg hover:shadow-2xl flex flex-col justify-between"
          >
            {curItem.urlToImage && <img src={curItem.urlToImage} alt={curItem.title} />}
            <div className="font-sans p-1">
              <Link
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline"
              >
                {curItem.title}
              </Link>
              <p className="mt-3">{curItem.description}</p>
              <Link
                href={curItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center font-extrabold hover:underline mb-2 bg-red-500 rounded px-2 lg:mx-14 mt-2"
              >
                Read more →
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Card
