import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'
import {loggedIn} from '../App'
function Login() {
  let [isSignedIn, setIsSignedIn]=useContext(loggedIn)
  let navigate =useNavigate()
  const [user, setUser] = useState({
    email:'',
    password:''
  })
  function getUser(e){
    let name =e.target.name;
    let value =e.target.value
    setUser({
      ...user,
      [name]:value
    })
  }
  const submitData = (e)=>{
    e.preventDefault()
    if(localStorage.getItem('Users')){
      let users=JSON.parse(localStorage.getItem('Users'))
      let validatedUser=users.filter((value, index)=>{
        return value.Email== user.email && value.Password ==user.password
      })
      if(validatedUser.length==0){
        alert('invalid details')
      }
      else{
        setIsSignedIn(true)
        navigate('/')
        console.log(isSignedIn)
      }
    }
  }
  return (
    <div  id="Body">
    <div>
       <div id="loginPage">
    <h1 className="banner">Login</h1>
    <section className="d-flex justify-content-center" id="Login">
        <form onSubmit={submitData} id="login" className="attributecolor text-bg-light form-control-md">
         
          <div className="py-3">
            <label htmlFor="Email" className="">Email</label>
            <input type="text" onChange={getUser} name="Email" id="Email" className=" text-bg-light"/>
          </div>

          <div className="py-3">
            <label htmlFor="Password" className="">Password</label>
            <input type="password" onChange={getUser} name="Password" id="Password" className=" text-bg-light"/>
          </div>

          <div className="py-3">
            <button type="submit" className="btn btn-danger px-5">Login</button>
          </div>

        </form>
    </section>
    </div>  
    </div>
    </div>
  )
}

export default Login