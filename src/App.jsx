import './App.css'
import './NavBar.css'
import './Home.css'
import './Blog.css'
import './Login.css'
import './Register.css'
import './Admin.css'
import './Contact.css'
import './About.css'
import './bootstrap.min.css'
import {Route, Routes} from 'react-router-dom'
import NavBar from './components/includes/NavBar'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import Index from './pages/Index'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
   <main>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
   </main>
  )
}

export default App
