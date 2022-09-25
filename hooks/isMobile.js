import { useState, useEffect } from 'react';

export default function IsMobile() {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.width);
    }, []);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return width <= 768;
}
