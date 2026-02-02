import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen})=>{

   {/* constantly checking if the menu is open or closed based on 
    this logic that is implemented
    */} 
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);
    //You are checking everytime menuOpen changes...When should it change? When user clicks on the menu icon, so you will have to add an onClick event to the menu icon....Think of the logic implementation
    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    Iniobong <span className="text-blue-500">Oscar</span>
                </a>

                {/*Mobile menu icon*/}
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                      onClick={()=>setMenuOpen((prev)=>!prev)}>
                    &#9776;
                </div>

                {/*Desktop menu icon*/}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-1xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120">
                        Home
                    </a>

                    <a href="#about" className="text-1xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120">
                        About
                    </a>

                    <a href="#projects" className="text-1xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120">
                        Projects
                    </a>

                    <a href="#contact" className="text-1xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120">
                        Contact
                    </a>

                </div>
            </div>
        </div>
    </nav>
}