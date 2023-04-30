import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

function index() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5005/api/getAllPosts')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPosts(data)
      })
  }, [])


  return (
    <div className='flex w-full flex-wrap justify-evenly'>
      {posts.map((post) => {
        return <Cards content={post.content} author={post.userName} />;
      })}
    </div>
  )
}

export default index