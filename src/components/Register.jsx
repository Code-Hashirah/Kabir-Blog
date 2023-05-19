import {useState} from 'react'
function Register() {
  const [user, setUser]=useState({
    Email:"",
    Password:""

  })
  return (
    <div>
    
   <div id="registerPage">
   <h1 className="banner">Register</h1>
   <section className="d-flex justify-content-center">
    <form action="" method="post" className="attributecolor text-bg-light form-control-md w-50" id="register">
         
          <div className="my-3 p-3">
            <label htmlFor="Email" className="mx-4">Email</label>
            <input type="text" name="Email" id="Email" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Password" className="mx-4">Password</label>
            <input type="password" name="Password" id="Password" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Password" className="mx-4">Confirm Password</label>
            <input type="password" name="Password" id="Password" className="form-control-sm text-bg-light"/>
          </div>

          <div className="my-3 p-3">
            <button type="submit" className="btn btn-danger px-5">Register</button>
          </div>

        </form>
    </section>
   </div>
    </div>
  )
}

export default Register