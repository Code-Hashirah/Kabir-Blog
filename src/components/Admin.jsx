

function Admin() {
  return (
    <div id="adminPage">
    <h1 className="banner">Admin</h1>
   
    <section className="d-flex justify-content-center">
        <form action="" method="post" className="attributecolor text-bg-light form-control-md w-50">
         
          <div className="my-3 p-3">
            <label htmlFor="Email" className="mx-2">Title</label>
            <input type="text" name="Email" id="Email" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="blogNews" className="mx-2">News</label> <br />
          <textarea name="blogNews" id="blogNews" cols="50" rows="15">

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