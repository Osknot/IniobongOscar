/*On first visit to site, you will see this*/
/*All this contains style for the loading screen*/
/*Use useState and useEffect in the loading screen to keep animation and track of the text taht is displaying on screen*/

import { useEffect, useState } from "react"

export const LoadingScreen = ({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "<light>OSKNOT<light/>"

    //this keeps track of each of the letter in its index
    useEffect(()=>{
        let index = 0;
        const interval = setInterval(()=>{
            setText(fullText.substring(0, index));
            index++;

            if(index > fullText.length){
                clearInterval(interval);

                setTimeout(()=>{
                    onComplete();
                }, 1000);
            }
        }, 100);

        //avoid memory leaks
        return ()=> clearInterval(interval);
    }, [onComplete])


    return <div className="fixed inset-0 z-50 bg-black text-grey-100 flex flex-col items-center justify-center">
        <div className="mb-4 text-2xl font-mono font-bold md:text-4xl"> {text} <span className="animate-blink ml-1">|</span></div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

            </div>
        </div>
    </div>
}

/*You will then have to go to the index.css file to add the animation for the loading bar*/