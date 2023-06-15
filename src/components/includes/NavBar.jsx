import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { useState,useContext } from 'react';
import {loggedIn } from '../../App';
import {useEffect} from'react'

function NavBar() {
  // const { isSignedIn } = useContext(loggedIn);
  let SignedIn=(JSON.parse(localStorage.getItem('Users')))
  // const {SignedIn ,setSignedIn} =useState([])
  // useEffect(()=>{
  
      
  // }, [])
  const handleScrollToBottom = () => {
    scroll.scrollTo(0, {
      duration: 500,
      smooth: 'easeInOutQuart',
      containerId: 'Body',
    });
  };
  // let userData = JSON.parse(localStorage.getItem('Users'))
   
// console.log(loggedIn)
  return (
    <div>
      <header id="header">
        <h1 className="banner">Kabir's News Blog</h1>
        <p className="banner"><i>Your one stop site for daily news</i></p>
        <nav className="navbar navbar-expand-sm navbar-dark">
          <div className="container-fluid collapseBox">
            <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-bg-dark" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item px-5">
                  <Link className="nav-link text-white" to="/" onClick={handleScrollToBottom}>Home</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link text-white" to="/blog" onClick={handleScrollToBottom}>Blog</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link text-white" to="/about" onClick={handleScrollToBottom}>About</Link>
                </li>
                <li className="nav-item px-5">
                  <Link className="nav-link text-white" to="/contact" onClick={handleScrollToBottom}>Contact</Link>
                </li>
                {!SignedIn ? (
                  <>
                    <li className="nav-item px-5">
                      <Link className="nav-link text-white" to="/login" onClick={handleScrollToBottom}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item px-5">
                      <Link className="nav-link text-white" to="/register" onClick={handleScrollToBottom}>
                        Register
                      </Link>
                    </li>
                  </>
                ) : 
                <>
                <li className="nav-item px-5">
                <Link className="nav-link text-white" to="/login" onClick={handleScrollToBottom}>
                  Logout
                </Link>
              </li>
              </>
                }
                <li className="nav-item px-5">
                  <Link className="nav-link text-white" to="/admin"></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
