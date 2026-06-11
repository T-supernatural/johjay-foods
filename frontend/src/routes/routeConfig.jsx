import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Gallery from '../pages/Gallery.jsx'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login.jsx'
import Register from '../pages/Register.jsx'
import RequestQuote from '../pages/RequestQuote.jsx'
import Services from '../pages/Services.jsx'
import Testimonials from '../pages/Testimonials.jsx'

export const publicRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/gallery', element: <Gallery /> },
  { path: '/testimonials', element: <Testimonials /> },
  { path: '/contact', element: <Contact /> },
  { path: '/request-quote', element: <RequestQuote /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]