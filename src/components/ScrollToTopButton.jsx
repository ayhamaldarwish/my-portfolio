import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "10px 13px",
            fontSize: "18px",
            backgroundColor: "#38BDF8",
            color: "black",
            border: "none",
            borderRadius: "11px",
            cursor: "pointer",
          }}
        >
          <GoArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
