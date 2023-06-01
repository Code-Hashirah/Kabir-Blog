import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Blog() {
  const [Blogs, setBlogs]= useState([])
  function Blog(){
    axios.get('https://dummyjson.com/posts')
    .then(blog=>{
      setBlogs(blog.data.posts)
    }).catch(err=>{
      console.log(err)
    })
   
    console.log('heeloo')
  }
  useEffect(()=>{
    Blog()
  }, [])
  return (
    <div id="blogPage">
    <h1 className="banner">Latest News</h1>
    <section className="text-area">
    {
      Blogs.length > 0 ?
      Blogs.map((value, index)=>{
        return(
          <div key={index} className="col-6">
            <p>{value.title}</p>
            <p>{value.body}</p>
            <p>Tags{value.tags}</p>
            <p>Reactions{value.reactions}</p>
            <Link className='btn btn-outline-warning'><span className='fas fa-eye'></span></Link>
          </div>
        )
      }):
      <p>Post Loading</p>

     }
    </section>
    </div>
  )
}

export default Blog