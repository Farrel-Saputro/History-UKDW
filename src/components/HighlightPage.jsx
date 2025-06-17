import React from "react";
import IMAGES from "../assets/images";

function HighlightPage() {
  return (
    <section className="p-20 flex flex-col-reverse lg:flex-row items-center justify-between">
      <div className="max-w-xl text-center lg:text-left">
        <h1 className="text-4xl font-bold text-black leading-tight mb-6">
          SEJARAH
          <br />
          UNIVERSITAS KRISTEN
          <br />
          DUTA WACANA
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Website ini menampilkan perjalanan sejarah Universitas Kristen Duta
          Wacana (UKDW), mulai dari berdiri pada tahun 1962 hingga saat ini. Di
          dalamnya berisi berbagai informasi penting, tonggak sejarah, dan
          pencapaian-pencapaian yang diraih UKDW selama bertahun-tahun.
        </p>
      </div>
      <div className="mb-12 lg:mb-0">
        <img src={IMAGES.onlylogo} alt="IDRX Logo" className="w-64 h-auto" />
      </div>
    </section>
  );
}

export default HighlightPage;
