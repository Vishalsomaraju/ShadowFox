import React from "react";
import about_avatar from "../../assets/about_avatar.png";
import { IoArrowForward } from "react-icons/io5";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-16"
    >
      <div className="text-white flex flex-col md:flex-row items-center justify-center bg-gradient-to-tl from-[#1e293b] via-[#334155] to-[#475569] bg-opacity-90 shadow-inner border-t border-slate-600 rounded-2xl p-6 sm:p-12 max-w-6xl w-full gap-8">
        <div className="w-full text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-cyan-400 transition-transform hover:scale-105">
            About
          </h2>
          <div className="flex justify-center md:justify-end w-full md:w-auto">
            <img
              className="w-60 sm:w-72 md:w-80 rounded-xl"
              src={about_avatar}
              alt="About Avatar"
            />
          </div>
          <ul className="space-y-6">
            <li>
              <div className="flex gap-4 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
                <IoArrowForward size={28} className="mt-1 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend Developer
                  </h3>
                  <p className="text-sm text-gray-300">
                    Building responsive, dynamic UI experiences using modern web
                    technologies.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex gap-4 p-6 rounded-xl transition-transform hover:scale-105 hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
                <IoArrowForward size={28} className="mt-1 text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-sm text-gray-300">
                    Designing secure and scalable server-side applications and
                    APIs.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
