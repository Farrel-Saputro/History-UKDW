import React from "react";

export default function About({ member }) {
  return (
    <div className="font-inter flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Main container for the team section */}
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 rounded-md">
          Meet our team
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-12 rounded-md">
          Meet our exceptional team at Digital Humanities!
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {member.map((member, index) => (
            <div
              key={index} // Using index as key, consider a unique ID if available for better performance
              className="rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out"
              style={{ backgroundColor: "#F7F2DE" }}
            >
              {/* Member Image */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/150x150/cccccc/333333?text=No+Image";
                  }} // Fallback for broken images
                />
              </div>
              {/* Member Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              {/* Member Title */}
              <p className="text-gray-600 text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
