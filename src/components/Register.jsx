import {useState} from 'react'
function Register() {
  const [user, setUser]=useState({
    Email:"",
    Phone:"",
    Password:""
  })
  const [errors, setErrors]=useState([])
  const registerUser=(e)=>{
    e.preventDefault()
    if(user.Email==""){
      setErrors((err)=>{
        return{...err,EmailErr:'Your Email is is needed'}
      })
    }
    if(user.Password==""){
      setErrors((err)=>{
        return {...err,PasswordErr:'Password is required'}
      })
    }
    else if(user.Password.length<6){
      setErrors((err)=>{
        return {...err,PasswordErr:'Password must be six(6) or more characters'}
      })
    }
    if(errors.length==0){
      const allData=JSON.stringify(user)
      const userKey=JSON.stringify(user.Email)
      localStorage.setItem(userKey,allData)
      console.log('Saved, No Errors')
    }
  }
  return (
    <div>
    
   <div id="registerPage">
   <h1 className="banner">Register</h1>
   <section className="d-flex justify-content-center">
    {/* <h4>{JSON.stringify(user)}</h4> */}
    {/* <h5>{JSON.stringify(errors)}</h5> */}
    <form action="" method="post" onSubmit={registerUser} className="attributecolor text-bg-light form-control-md w-50" id="register">
         
          <div className="my-3 p-3">
            <label htmlFor="Email" className="mx-4">Email</label>
            <input type="text" name="Email" id="Email" className="form-control-sm text-bg-light"  onChange={(e)=>{
                setUser({...user,Email:e.target.value})
            }}/>
          
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Phone" className="mx-4">Phone</label>
            <input type="text" name="Phone" id="Phone" className="form-control-sm text-bg-light" onChange={(e)=>{
              setUser({...user,Phone:e.target.value})
            }}/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Password" className="mx-4">Password</label>
            <input type="password" name="Password" id="Password" className="form-control-sm text-bg-light" onChange={(e)=>{
              setUser({...user,Password:e.target.value})
            }}/>
          </div>

          <div className="my-3 p-3">
            <label htmlFor="Password" className="mx-2">Confirm Password</label>
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