
function Login() {
  return (
    <div>
       <div id="loginPage">
    <h1 className="banner">Login</h1>
    <section className="d-flex justify-content-center" id="Login">
        <form action="" method="post" id="login" className="attributecolor text-bg-light form-control-md">
         
          <div className="py-3">
            <label htmlFor="Email" className="">Email</label>
            <input type="text" name="Email" id="Email" className=" text-bg-light"/>
          </div>

          <div className="py-3">
            <label htmlFor="Password" className="">Password</label>
            <input type="password" name="Password" id="Password" className=" text-bg-light"/>
          </div>

          <div className="py-3">
            <button type="submit" className="btn btn-danger px-5">Login</button>
          </div>

        </form>
    </section>
    </div>  
    </div>
  )
}

export default Login