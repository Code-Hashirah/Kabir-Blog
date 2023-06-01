import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
function Home() {
  const [blogs, setBlogs]= useState([])
  function homeBlog(){
    axios.get('https://dummyjson.com/posts?limit=10&skip=10')
    .then(blog=>{
      setBlogs(blog.data.posts)
    }).catch(err=>{
      console.log(err)
    })
    console.log(blogs)
    console.log('heeloo')
  }
  useEffect(()=>{
    homeBlog()
  }, [])
  return (
    <div id="homePage">
      <h1 className="banner">Home</h1>
    <section className="text-area row">
    
     {
      blogs.length > 0 ?
      blogs.map((value, index)=>{
        return(
          <div key={index} className="col-md-5 bg-light mx-2">
            <p>{value.title}</p>
            <p>{value.body}</p>
            <p className='text-align-justify'>Tags{value.tags}</p>
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

export default Home