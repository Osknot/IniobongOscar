import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css" 
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/sections/ MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  //I WANT TO TRACK IF MENU IS OPEN OR NOT SO I CAN DISPLAY THE MOBILE NAV BAR: IT ALL DEPENDS
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/> } 
    <div className={`min-h-screen transition-fade duration-1000 ${isLoaded ? "fade-in" : "opacity-0"} bg-black text-grey-100`} >
      
       <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Home/>
       <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  </>  
  )
}


export default App
