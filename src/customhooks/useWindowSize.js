import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const defaultWindowSize = {
        width: "0px",
        height: "0px"
    }
    const [windowSize, setWindowSize] = useState(defaultWindowSize);
    const handleResize = () => {
        const { innerWidth, innerHeight } = window;
        const newWindowSize = {
            width: innerWidth,
            height: innerHeight
        }
        setWindowSize(newWindowSize);
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

export default useWindowSize;
