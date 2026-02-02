import { useEffect } from "react";


//You will be conditonally styling your website, so you will have to use backticks to inject js since it is based on menuOpen or not
export const MobileMenu = ({menuOpen, setMenuOpen})=>{
    return (
        //The idea here is that you leverage opacity and openMenu state based on on-off rules to display menu or not. The idea remains the same, userinput(PRESSING BUTTON); Function(THE INTERNAL SETTINGS AND CONTROL); Display(SHOWING THE RESULT OF EVERYTHING)
        <div className={`fixed top-0 left-0 w-full bg-blue-900 z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${
                            menuOpen 
                            ? "h-screen opacity-100 pointer-events-auto" 
                            : "h-0 opacity-0 pointer-events-none"}
        `}
        >
            {/*Normally, this is where the user input comes from and then you direct that to a function that toggles 
            THIS ONE IS A WAY TO CLOSE THE MENU
            */}
            <button onClick={()=> setMenuOpen(false)} 
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
            aria-label="Close Menu" 
            >
                &times;
            </button>

        
        <a 
        href="#home"
        //You are doing this because when user clicks on any of the menu items, you want the menu to close
        onClick={()=>setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        >
                        Home
        </a>

        <a 
        href="#about"
        onClick={()=>setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        >
            About
        </a>

        <a 
        href="#projects" 
        onClick={()=>setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        >
            Projects
        </a>

        <a 
        href="#contact" 
        onClick={()=>setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 hover:scale-120
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
        `}
        >
            Contact
        </a>
        </div>
    );      
};  


//You are using pointer-events-none to disable any interaction with the menu when it is closed. This prevents users from clicking on invisible elements.
//When menuOpen is true, the menu takes full height of the screen (h-screen), is fully opaque (opacity-100), and allows pointer events (pointer-events-auto), making it visible and interactive.
//When menuOpen is false, the menu height is set to 0 (h-0), fully transparent (opacity-0), and disables pointer events (pointer-events-none), effectively hiding it and preventing any interaction.
//The transform and transition classes are used to create smooth animations for the menu items when they appear and disappear based on the menuOpen state.
//You are really using conditional rendering and CSS transitions to create a responsive and interactive mobile menu experience and css properties to manage visibility and interactivity.