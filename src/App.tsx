
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import MyProj from './components/pages/project-new'
import AboutMe from './components/pages/AboutMe'
import ScrollToTop from './components/ScrollToTop'

function App() {
 


  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/aboutMe' Component={AboutMe} />
          <Route path='/project-new' Component={MyProj} />
        </Routes>
      </Router>

    </>
  )
}

export default App
