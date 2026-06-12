import { Outlet } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-jj-black text-white">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default MainLayout