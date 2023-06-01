import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <header id="header">
          <h1 className="banner">Kabir's News Blog  </h1>
          <p className="banner"><i>Your one stop site for daily news</i></p>
 <nav className="navbar navbar-expand-sm  navbar-dark">
    <div className="container-fluid collapseBox">
      <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse text-bg-dark" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/blog">Blog</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/login">Login</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/register">Register</Link>
          </li>
          <li className="nav-item px-5">
            <Link className="nav-link text-white" to="/admin"></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </header>
    </div>
  )
}

export default NavBar