import {useState} from 'react'

function Admin() {
  const [blog,setBlog]=useState({
   Title:"",
    Blog:""
  })
  const [error,setError]=useState([])
  const addBlog=(e)=>{
    e.preventDefault()
    if(blog.Title==""){
      setError((err)=>{
        return{...err,TitleErr:'Title cannot be blank'}
      })
    }
    if(blog.Blog==""){
      setError((err)=>{
        return {...err, BlogErr:'Blog cannot be empty'}
      })
    }
    if(error.length==0){
      const blogDetails=JSON.stringify(blog)
      localStorage.setItem(blog,blogDetails)
      console.log('Blog saved successfully!')
    }
  }
  return (
    <div id="adminPage">
    <h1 className="banner">Admin</h1>
    {/* <h5>{JSON.stringify(blog)}</h5> */}
   {/* <h5>{JSON.stringify(error)}</h5> */}
    <section className="d-flex justify-content-center" onSubmit={addBlog}>
        <form action="" method="post" className="attributecolor text-bg-light form-control-md w-50">
         
          <div className="my-3 p-3">
            <label htmlFor="Title" className="mx-2">Title</label>
            <input type="text" name="Title" id="Title" className="form-control-sm text-bg-light" onChange={(e)=>{
              setBlog({...blog,Title:e.target.value})
            }}/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Blog" className="mx-2">News</label> <br />
          <textarea name="Blog" id="Blog" cols="50" rows="15" onChange={(e)=>{
            setBlog({...blog,Blog:e.target.value})
          }}>
          </textarea>
          </div>

          <div className="my-3 p-3">
            <button type="submit" className="btn btn-danger px-5">Post</button>
          </div>

        </form>
    </section>
  
    </div>
  )
}

export default Admin