import React, { useEffect, useState, useCallback }  from "react";
  
  //размеры
  function useScreenSize() {
    const getScreenWidth = useCallback(() => window.innerWidth, []);
    const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  
    useEffect(() => {
  
      function handleResize() {
        setScreenWidth(getScreenWidth());
      };
  
      window.addEventListener('resize', handleResize, false);
  
      return () => window.removeEventListener('resize', handleResize);
    }, [getScreenWidth]);
  
    return screenWidth;
  }

  export default useScreenSize;