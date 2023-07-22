import { useState } from "react";

const useOnline = () => {
    const [isOnline , setOnline] = useState(true)

    window.addEventListener("online",() =>{
        console.log("Person is online");
        setOnline(true);
        
    });
    window.addEventListener("offline",() =>{
        console.log("Person is offline");
        setOnline(false);
    });
    return isOnline;

}
export default useOnline