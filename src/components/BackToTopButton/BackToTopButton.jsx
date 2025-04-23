import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
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
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white text-black shadow-lg transition-all duration-300 hover:bg-[#6a2226] hover:scale-110 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <FaArrowUp size={18} className="hover:text-white" />
    </button>
  );
};

export default BackToTopButton;
