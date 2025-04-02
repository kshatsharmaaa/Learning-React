import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // input: check if online
    // we'll use an event listener
    // we want to use this event listener just once - so useffect with []
    // output: return boolean value

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;

// implement in body component
// it is not mandatory but recommended to use use in crate a customHook