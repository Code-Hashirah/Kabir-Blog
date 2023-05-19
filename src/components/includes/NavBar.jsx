import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <header id="header">
          <h1 className="banner">Kabir's News Blog  </h1>
          <p className="banner"><i>Your one stop site for daily news</i></p>
            <nav id="navbar" >
                <ul id="ul">
                    <li className="navList"> <Link className="navLinks" to="/">Home</Link> </li>
                    <li className="navList"> <Link className="navLinks" to="/blog">Blog</Link> </li>
                    <li className="navList"> <Link className="navLinks" to="/about">About</Link> </li>
                    <li className="navList"> <Link className="navLinks" to="/contact">Contact</Link> </li>
                    {/* <li className="navList"> <Link className="navLinks" to={`/login/${item.id}`}>Login</Link></li> */}
                    <li className="navList"> <Link className="navLinks" to="/login">Login</Link></li>
                    <li className="navList"> <Link className="navLinks" to="/register">Register</Link></li>
                    <li className="navList"> <Link className="navLinks" to="/admin"></Link></li>
                </ul>
            </nav>
          
        </header>
    </div>
  )
}

export default NavBar