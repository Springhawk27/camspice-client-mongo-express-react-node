import { useEffect } from "react";
import { useState } from "react"


// useAccessories hook 
const useAccessories = () => {
    const [accessories, setAccessories] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-refuge-82973.herokuapp.com/accessories')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, [])

    return [accessories, setAccessories];
}

export default useAccessories;