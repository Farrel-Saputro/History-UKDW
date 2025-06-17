import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import data from "../data";

function RektorSection({ id }) {
  const rector = data.rector;
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    if (direction === "right") {
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      if (isAtEnd) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 400,
          behavior: "smooth",
        });
      }
    } else {
      container.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={id} className="p-20">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold uppercase tracking-wide">
              Rektor UKDW
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded hover:bg-gray-200"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded hover:bg-gray-200"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300"></div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth custom-scroll-hide"
      >
        {rector.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFBE6] border border-gray-200 rounded-xl px-4 py-3 shadow-sm w-[260px] flex-shrink-0"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
              {item.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Periode: {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RektorSection;
