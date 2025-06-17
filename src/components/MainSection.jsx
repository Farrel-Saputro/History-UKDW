import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import SectionEventCard from "./SectionEventCard";
import HighlightPage from "./HighlightPage";
import RektorSection from "./RektorSection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MainSection({ event }) {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location.state?.scrollTo) {
        const target = document.getElementById(location.state.scrollTo);
        if (target) {
          setTimeout(() => {
            target.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (document.readyState === "complete") {
      handleScroll();
    } else {
      window.addEventListener("load", handleScroll);
    }

    return () => {
      window.removeEventListener("load", handleScroll);
    };
  }, [location.key]);

  return (
    <div>
      <HighlightPage />
      <div className="p-15 scroll-mt-15" id="history-section">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {Object.entries(event).map(([id, event]) => (
            <div key={id} data-aos="fade-up" className="flex h-full">
              <SectionEventCard id={id} event={event} />
            </div>
          ))}
        </div>
      </div>
      <div id="rektor-section" data-aos="fade-up">
        <RektorSection />
      </div>
    </div>
  );
}
