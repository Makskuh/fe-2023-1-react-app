import { useEffect, useState } from 'react';

function useCoords() {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
