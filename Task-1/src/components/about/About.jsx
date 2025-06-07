import React from "react";
import about_avatar from "../../assets/about_avatar.png";
import { IoArrowForward } from "react-icons/io5";

export default function About() {
  return (
    <div className="text-white md:flex items-center md:flex-wrap md:justify-center bg-gradient-to-tl from-[#1e293b] via-[#334155] to-[#475569] bg-opacity-90 shadow-inner border-t border-slate-600 mx-0 md:mx-20 rounded-lg p-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-cyan-400 transition transform hover:scale-105">
        About
      </h2>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-8">
        <img className="md:h-80 m-4" src={about_avatar} alt="Idea Avatar" />
        <ul className="space-y-6">
          <li>
            <div className="flex gap-4 p-6 w-[22rem] rounded-xl transition transform hover:scale-105 hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
              <IoArrowForward size={28} className="mt-1 text-purple-500" />
              <div>
                <h1 className="text-xl font-semibold text-white">
                  Frontend Developer
                </h1>
                <p className="text-sm text-gray-300">
                  Building responsive, dynamic UI experiences using modern web
                  technologies.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-6 w-[22rem] rounded-xl transition transform hover:scale-105 hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
              <IoArrowForward size={28} className="mt-1 text-purple-500" />
              <div>
                <h1 className="text-xl font-semibold text-white">
                  Backend Developer
                </h1>
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
  );
}
