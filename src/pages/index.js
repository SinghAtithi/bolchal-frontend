import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import Cards from '../components/Cards'

function index() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://tasty-newt-suit.cyclic.app/api/getAllPosts").then((res) => {
      setPosts(res.data);
    });
  }, [])


  return (
    <div className='flex flex-wrap justify-evenly'>
      {posts.map((post) => {
        return <Cards content={post.content} author={post.userName} />;
      })}
    </div>
  )
}

export default index