import React, { useCallback } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const targetPosition = React.useRef({ x: null, y: null });

  React.useEffect(() => {
    const updateMousePosition = (ev) => {
      targetPosition.current = { x: ev.clientX, y: ev.clientY };
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = useCallback((time) => {
    if (previousTimeRef.current !== undefined) {
      setMousePosition((prevPos) => {
        return {
          x: prevPos.x + (targetPosition.current.x - prevPos.x) * 0.04,
          y: prevPos.y + (targetPosition.current.y - prevPos.y) * 0.04,
        };
      });
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, []);

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]); // Make sure the effect runs only once

  return mousePosition;
};
export default useMousePosition;
