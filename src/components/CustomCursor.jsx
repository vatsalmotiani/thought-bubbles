// components/CustomCursor.js
"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [isHoveringText, setIsHoveringText] = useState(false);

  // live mouse position
  const mouse = useRef({ x: 0, y: 0 });
  // smoothed follower position
  const follower = useRef({ x: 0, y: 0 });

  const cursorRef = useRef(null);

  useEffect(() => {
    const ease = 0.1; // smaller = more lag

    const updateMouse = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const dx = mouse.current.x - follower.current.x;
      const dy = mouse.current.y - follower.current.y;

      follower.current.x += dx * ease;
      follower.current.y += dy * ease;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${follower.current.x}px`;
        cursorRef.current.style.top = `${follower.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    // hover text check
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.classList.contains("cursor-effect-text") || target.closest(".cursor-effect-text")) {
        setIsHoveringText(true);
      }
    };

    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget;
      if (!relatedTarget || !relatedTarget.closest(".cursor-effect-text")) {
        setIsHoveringText(false);
      }
    };

    document.addEventListener("mousemove", updateMouse);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      document.removeEventListener("mousemove", updateMouse);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className='fixed pointer-events-none z-[9999]'
      style={{
        transform: isHoveringText ? "translate(-50%, -50%) scale(2)" : "translate(-50%, -50%) scale(1)",
        width: "24px",
        height: "24px",
        backgroundColor: isHoveringText ? "rgba(0,182,231,0.25)" : "#00B6E7",
        borderRadius: "50%",
        border: isHoveringText ? "1px solid #00B6E7" : "0px",
        mixBlendMode: "multiply",
        transition: "transform 0.6s ease-out, background-color 0.3s ease-out, border 0.3s ease-out",
      }}
    />
  );
};

export default CustomCursor;
