import { useEffect, useRef } from "react";
//Use children to specify which part of website you want to reveal
export const RevealOnScroll = ({children}) =>{
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    ref.current.classList.add("visible");
                }
            },
            {threshold: 0.2, rootMargin: "0px 0px -50px 0px"}
        );
        if(ref.current) observer.observe(ref.current);

        //this avoids memory leaks
        return () => observer.disconnect();
    }, );
    //the div as wrapper that helps to determine if we want to reveal that information or not
    //Use ref to detect if we are scrolling on that specific div or not
    //Use effect to help us determine if the current ref is intesection the section we are scrolling through
    return (<div ref={ref} className="reveal">
        {children}
    </div>
    );
};

//then you go and style reveal and visible classes