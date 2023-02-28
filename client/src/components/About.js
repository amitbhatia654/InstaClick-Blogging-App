import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function About() {
  const [mylist,setMyList]=useState([])

  useEffect(()=>{
    getPosts()
  },[])

  const getPosts=async()=>{
    const {data}=await axios.get('https://dummyjson.com/posts')
    console.log(data.posts,'th data os ')
    setMyList(data.posts)
  }
  return (
    <div>
      this is about page 
      {mylist?.map((data)=>{
        return (
          <>
<div className='mx-5 my-2'>{data.title}</div>
<div className='mx-5 my-2'>{data.body}</div>

          </>
        )
      })}
    </div>
  )
}
