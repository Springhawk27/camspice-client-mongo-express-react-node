import { useEffect } from "react";
import { useState } from "react"


// useAccessories hook 
const useAccessories = () => {
    const [accessories, setAccessories] = useState([]);
    useEffect(() => {
        fetch('https://scary-demon-31223.herokuapp.com/guides')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, [])

    return [accessories, setAccessories];
}

export default useAccessories;