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
    {/* Show when the screen is not fully loaded and then on complete, you set it to true */}
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

//One of the use cases of useState is that you are tracking state so that you do something when that state changes.
//Everytime, the variable has to be dynamic, meaning that it will change at some point