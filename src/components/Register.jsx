import { all } from 'axios';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll';
// import { animateScroll as scroll } from 'react-scroll';
function Register() {
  // const handleScrollToBottom = () => {
  //   scroll.scrollTo("Body");
  // };
  const navigate = useNavigate();
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
      let User=[];
      // const allData=JSON.stringify(user)
      // const userKey=JSON.stringify(user.Email)
      if(localStorage.getItem('Users')){
       let localData=localStorage.getItem('Users')
        User= JSON.parse(localData)
        localStorage.setItem('User',User)
        navigate('/login')
      }
      User.push(user)
      const userData=JSON.stringify(User)
      localStorage.setItem('Users',userData)
      console.log('Saved, No Errors')
      navigate('/login')
    }
  }
  return (
    <div  id="Body">
    
   <div id="registerPage">
   <h1 className="banner">Register</h1>
   <section className="d-flex justify-content-center">
  
    <form action="" method="post" onSubmit={registerUser} className="attributecolor text-bg-light form-control-md" id="register">
         
          <div className="py-2">
            <label htmlFor="Email" className="">Email</label>
            <input type="text" name="Email" id="Email" className="text-bg-light"  onChange={(e)=>{
                setUser({...user,
                  Email:e.target.value})
            }}/>
          
          </div>

          <div className="py-2">
            <label htmlFor="Phone" className="">Phone</label>
            <input type="text" name="Phone" id="Phone" className=" text-bg-light" onChange={(e)=>{
              setUser({...user,Phone:e.target.value})
            }}/>
          </div>

          <div className="py-2">
            <label htmlFor="Password" className="">Password</label>
            <input type="password" name="Password" id="Password" className="text-bg-light" onChange={(e)=>{
              setUser({...user,Password:e.target.value})
            }}/>
          </div>

          <div className="py-2">
            <label htmlFor="Password" className="">Confirm Password</label>
            <input type="password" name="Password" id="CPassword" className="text-bg-light"/>
          </div>

          <div className="py-2my-2">
            <button type="submit" className="btn btn-danger px-5">Register</button>
          </div>

        </form>
    </section>
   </div>
    </div>
  )
}

export default Register