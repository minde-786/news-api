"use client"
import { NewsItem } from "../type/type"
import { FaSearch } from "react-icons/fa";
import React, {  useEffect, useState } from 'react'
import Card from './Card'
import Link from "next/link"
function News() {
 
  const[item,setData]=useState<NewsItem[]>([])
  const[search,setSearch]=useState("pakistan")
  const API_KEY=  process.env.NEXT_PUBLIC_NEWS_API_KEY;

  const searchHundler=(event: { target: { value: React.SetStateAction<string>; }; })=>{
    console.log(event.target.value);
    setSearch(event.target.value)
  }
  useEffect(()=>{
    getData()
  },[])
  const getData= async ()=>{
  const res=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
  const jsonData=await res.json();
  console.log(jsonData.articles)
  setData(jsonData.articles)

  }
  const [activeTab, setActiveTab] = useState("all")
  const userInput = (value: string) => {
  setSearch(value)
   setActiveTab(value)
  getData()   
}

  return (
    <div>
  <nav className="bg-slate-100 shadow-lg px-4 py-3 flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center">
  
  <h1 className="font-bold text-lg text-center lg:text-left">Trendy News</h1>

 
  <div className="flex justify-center gap-6">
    <Link
      href="#"
      onClick={() => userInput("all")}
      className={`cursor-pointer ${
        activeTab === "all" ? "font-bold bg-amber-400 rounded px-2 py-1" : ""
      }`}
    >
      All News
    </Link>
    <Link
      href="#"
      onClick={() => userInput("trending")}
      className={`cursor-pointer ${
        activeTab === "trending"
          ? "font-bold bg-amber-400 rounded px-2 py-1"
          : ""
      }`}
    >
      Trending
    </Link>
  </div>

  
  <div className="flex justify-center lg:justify-end gap-2">
    <input
      type="text"
      placeholder="Search News"
      onChange={searchHundler}
      value={search}
      className="border border-slate-300 shadow-lg rounded-2xl px-3 py-1 w-48 sm:w-64"
    />
    <button
      onClick={getData}
      className="bg-blue-500 rounded-full p-2 flex items-center justify-center text-white hover:bg-blue-600"
    >
      <FaSearch className="size-5" />
    </button>
  </div>
</nav>

<h1 className='m-4 text-2xl text-center font-semibold'> Stay Update with trendy News</h1>
  < div  className='flex justify-center lg:gap-16 mt-8 gap-2 px-2'>
  <Link   href="#"  onClick={() => userInput("sport")}   className='bg-red-500 rounded-lg px-2 py-1 w-32 text-center'>Sport</Link>
  <Link href="#"    onClick={() => userInput("Health")}   className='bg-red-500 rounded-lg px-2 py-1 w-32 text-center'>Health              </Link>
  <Link href="#"    onClick={() => userInput("Entertainment")}   className='bg-red-500 rounded-lg px-2 py-1 w-32 text-center'>Entertainment</Link>
  <Link href="#"    onClick={() => userInput("Fitness")}   className='bg-red-500 rounded-lg px-2 py-1 w-32 text-center'>Fitness            </Link>
  <Link href="#"    onClick={() => userInput("Politics")}   className='bg-red-500 rounded-lg px-2 py-1 w-32 text-center'>Politics          </Link>
</div>
      <Card item={item}/>
    </div>
  )
}

export default News
