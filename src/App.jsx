import React, { useState } from "react";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import { useRoutes } from "react-router";
import DetailPage from "./components/DetailPage";
import data from "./data";
import About from "./components/About";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AnimatedPage from "./components/AnimatedPage";

function App() {
  const location = useLocation();
  const routes = [
    {
      path: "/",
      element: (
        <AnimatedPage>
          <MainSection event={data.events} />
        </AnimatedPage>
      ),
    },
    ...Object.entries(data.events).map(([id, event]) => ({
      path: `/detailPage/${id}`,
      element: <DetailPage events={event} />,
    })),
    {
      path: "/about",
      element: (
        <AnimatedPage>
          <About member={data.team} />
        </AnimatedPage>
      ),
    },
  ];
  const section = useRoutes(routes, location);

  return (
    <div className="flex flex-col min-h-screen bg-[#FFFBE6] font-['Inter'] text-gray-800">
      <Navbar />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8 flex-grow">
        <AnimatePresence mode="wait">{section}</AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
