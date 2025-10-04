// components/CustomCursor.js
"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState("default"); // "default" | "hover" | "hidden"
  const [isMobile, setIsMobile] = useState(false);

  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const mobileCheck = window.innerWidth < 768 || "ontouchstart" in window;
    setIsMobile(mobileCheck);
    if (mobileCheck) return;

    const ease = 0.1;

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

    const handleMouseOver = (e) => {
      const target = e.target;

      if (target.classList.contains("no-cursor-effect") || target.closest(".no-cursor-effect")) {
        setCursorState("hidden");
      } else if (target.classList.contains("cursor-effect-text") || target.closest(".cursor-effect-text")) {
        setCursorState("hover");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseOut = (e) => {
      const relatedTarget = e.relatedTarget;

      if (relatedTarget && relatedTarget.closest(".no-cursor-effect")) {
        setCursorState("hidden");
      } else if (relatedTarget && relatedTarget.closest(".cursor-effect-text")) {
        setCursorState("hover");
      } else {
        setCursorState("default");
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

  if (isMobile) return null;

  const scale = cursorState === "hover" ? "translate(-50%, -50%) scale(1.3)" : "translate(-50%, -50%) scale(1)";

  return (
    <div
      ref={cursorRef}
      className='fixed pointer-events-none z-[9999]'
      style={{
        left: 0,
        top: 0,
        width: "40px",
        height: "40px",
        transform: scale,
        transition: "transform 0.4s ease-out",
        willChange: "transform, left, top",
      }}
    >
      {/* Base cursor */}
      <img
        src='/assets/blue-bubble-cursor.svg'
        alt='cursor'
        className={`absolute w-full h-full transition-opacity duration-300 ease-out ${cursorState === "default" ? "opacity-100" : "opacity-0"}`}
      />

      {/* Hover cursor */}
      <img
        src='/assets/cursor-hover.svg'
        alt='cursor hover'
        className={`absolute w-full h-full transition-opacity duration-300 ease-out ${cursorState === "hover" ? "opacity-100" : "opacity-0"}`}
      />

      {/* Hide both when no-cursor-effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-out ${cursorState === "hidden" ? "opacity-100" : "opacity-0"}`}
        style={{ background: "transparent" }}
      />
    </div>
  );
};

export default CustomCursor;
