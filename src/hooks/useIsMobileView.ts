import { useState, useEffect } from 'react';

const useIsMobileView = () => {
    const [ isMobileView, setIsMobileView ] = useState<boolean>(false);

    function onResizeHandler() {
        setIsMobileView(window.innerWidth <= 650);
    };

    useEffect(() => {
        window.addEventListener('resize', onResizeHandler);

        return () => { window.removeEventListener('resize', onResizeHandler); }
    });

    return isMobileView;
};

export default useIsMobileView;