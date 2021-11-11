import { useEffect } from "react";
import { useState } from "react"


// useSpots hook 
const useCameras = () => {
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        fetch('https://scary-demon-31223.herokuapp.com/picnicSpots')
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])

    return [cameras, setCameras];
}

export default useCameras;