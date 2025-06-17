import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import IMAGES from "../assets/images";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrNavigate = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#00712D] shadow-sm py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center w-full sm:w-auto mt-2 sm:mt-0">
        <img
          src={IMAGES.logoukdw}
          alt="UKDW Logo"
          className="h-10 mr-4 cursor-pointer"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/100x40/CCCCCC/000000?text=UKDW+Logo`;
          }}
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
            } else {
              // Scroll ke paling atas jika sudah di halaman utama
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        />
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-6 items-center mt-4 sm:mt-0 text-white">
        <button
          onClick={() => handleScrollOrNavigate("history-section")}
          className="hover:text-gray-200 transition-colors duration-200"
        >
          History
        </button>
        <button
          onClick={() => handleScrollOrNavigate("rektor-section")}
          className="hover:text-gray-200 transition-colors duration-200"
        >
          Rektor UKDW
        </button>
        <Link
          to="/about"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          Our Team
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
