
function Login() {
  return (
    <div>
       <div id="loginPage">
    <h1 className="banner">Login</h1>
    <section className="d-flex justify-content-center" id="Login">
        <form action="" method="post" className="attributecolor text-bg-light form-control-md w-50">
         
          <div className="my-3 p-3">
            <label htmlFor="Email" className="mx-2">Email</label>
            <input type="text" name="Email" id="Email" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Password" className="mx-2">Password</label>
            <input type="password" name="Password" id="Password" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <button type="submit" className="btn btn-danger px-5">Login</button>
          </div>

        </form>
    </section>
    </div>  
    </div>
  )
}

export default Login