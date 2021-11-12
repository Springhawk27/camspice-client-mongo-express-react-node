import { useEffect } from "react";
import { useState } from "react"


// useAccessories hook 
const useAccessories = () => {
    const [accessories, setAccessories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/accessories')
            .then(res => res.json())
            .then(data => setAccessories(data))
    }, [])

    return [accessories, setAccessories];
}

export default useAccessories;