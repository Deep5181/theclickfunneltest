import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import "./index.css";
import App from "./App.jsx";

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // Smoothness factor, lower value makes it smoother and slower
    });

    const scrollFn = (time) => {
      lenis.raf(time + 100); // Adjust delay (in milliseconds)
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    console.log("creativemadness");
  }, []);

  return children;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SmoothScrollWrapper>
      <App />
    </SmoothScrollWrapper>
  </StrictMode>
);
