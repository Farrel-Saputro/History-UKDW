import React from "react";
import { useNavigate } from "react-router-dom";

function SectionEventCard({ event, id }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/detailPage/${id}`);
      }}
      className="bg-[#FFFBE6] rounded-xl shadow-lg overflow-hidden flex flex-col h-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group
             hover:bg-[#33372C] hover:text-gray-100 border border-gray-200"
    >
      <div className="bg-[#FFFBE6] text-black text-center p-6 rounded-t-xl transition-colors duration-300 group-hover:bg-[#33372C] group-hover:text-white">
        <span className="block text-6xl font-extrabold">{event.sec}</span>
      </div>
      <div className="p-5 flex-grow flex flex-col justify-between text-center">
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="text-2xl font-semibold leading-tight flex items-center justify-center flex-grow transition-colors duration-300 group-hover:text-gray-100">
            {event.title}
          </h3>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="w-24 border-t-2 border-[#FF9100]" />
            <p className="text-gray-500 text-xl transition-colors duration-300 group-hover:text-gray-100">
              {event.year[0]}
            </p>
          </div>
        </div>
      </div>
      {event.image && (
        <div className="w-full h-50 overflow-hidden">
          <img
            src={event.thumbnail}
            alt={event.imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/150x150/CCCCCC/000000?text=Gambar+Tidak+Tersedia`;
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SectionEventCard;
