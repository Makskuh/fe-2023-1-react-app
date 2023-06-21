import { useEffect, useState } from 'react';

function useCoords(elementRef) {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // console.log(elementRef);
    const elem = elementRef.current;
    if (elem) {
      elem.addEventListener('mousemove', handleMouseMove);
    }
    // window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (elem) {
        elem.removeEventListener('mousemove', handleMouseMove);
      }
      // window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [elementRef]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCoords({
      x: clientX,
      y: clientY,
    });
  };

  return coords;
}

export default useCoords;
