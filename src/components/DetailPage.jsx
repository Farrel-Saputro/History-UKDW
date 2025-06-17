import React, { useEffect } from "react";

export default function DetailPage({ events }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div>
      {/* Content Section */}
      <main className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
        {events.year.map((year, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={index}
              className={`mb-24 flex flex-col md:flex-row items-center justify-between gap-12 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Tahun */}
              <div className="md:w-1/3 text-center md:text-right md:order-1">
                <h2
                  className="text-7xl md:text-9xl font-extrabold leading-none tracking-tight drop-shadow-sm"
                  style={{ color: "#FF9100" }}
                >
                  {year}
                </h2>
              </div>

              {/* Gambar & Konten */}
              <div className="md:w-2/3 flex flex-col gap-6 md:order-2">
                <img
                  src={events.image[index]}
                  alt={`Gambar tahun ${year}`}
                  className="w-full max-h-[375px] object-cover rounded-2xl shadow-lg"
                />
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-semibold mb-2"
                    style={{ color: "#33372C" }}
                  >
                    {events.pagTitle[index]}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {events.paragraph[index]}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
