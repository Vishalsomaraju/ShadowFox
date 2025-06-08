import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGoogle,
} from "react-icons/fa";
import { SiMysql, SiFlask, SiFastapi } from "react-icons/si";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen">
      <div id="Experience" className="p-10 md:p-24 text-white">
        <h1 className="inline-block text-2xl md:text-4xl text-cyan-400 font-bold transition-transform duration-300 transform hover:scale-105 origin-center mb-8">
          Skills/Experience
        </h1>

        <div className="flex flex-wrap items-center justify-around">
          <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10 justify-center">
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <FaHtml5 color="#E34F26" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <FaCss3 color="#1572B6" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <FaJs color="#F7DF1E" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <FaReact color="#61DAFB" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <FaNodeJs color="#547b41" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <SiMysql color="#4f6e90" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <SiFlask color="#fff" size={50} />
            </span>
            <span className="p-3 bg-zinc-950 flex items-center rounded-2xl transition duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]">
              <SiFastapi color="#4e9186" size={50} />
            </span>
          </div>

          <div>
            <div className="flex flex-col gap-2 bg-slate-950 bg-opacity-45 rounded-xl p-6 shadow-xl max-w-md transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30">
              <div className="flex items-center gap-4 ">
                <FaGoogle color="#4285f4" size={50} />
                <div>
                  <h2 className="text-xl font-semibold text-purple-400">
                    Example
                  </h2>
                  <p className="text-sm text-gray-400 italic">
                    Duration: xxxx – May !xxxx
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside mt-4 text-sm text-gray-200 leading-relaxed pl-2">
                <li>Worked on projects involving x, y, z</li>
                <li>Collaborated in a team of n developers</li>
                <li>Optimized APIs for better performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
