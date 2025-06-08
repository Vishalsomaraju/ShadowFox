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
    <section id="experience" className="min-h-screen bg-transparent">
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 py-16 text-white max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-bold mb-10 text-center transition-transform transform hover:scale-105">
          Skills / Experience
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
          {/* Skills Section */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {[
              FaHtml5,
              FaCss3,
              FaJs,
              FaReact,
              FaNodeJs,
              SiMysql,
              SiFlask,
              SiFastapi,
            ].map((Icon, i) => (
              <span
                key={i}
                className="p-3 bg-zinc-950 rounded-2xl transition-transform duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)]"
              >
                <Icon
                  size={50}
                  color={
                    Icon === FaHtml5
                      ? "#E34F26"
                      : Icon === FaCss3
                      ? "#1572B6"
                      : Icon === FaJs
                      ? "#F7DF1E"
                      : Icon === FaReact
                      ? "#61DAFB"
                      : Icon === FaNodeJs
                      ? "#547b41"
                      : Icon === SiMysql
                      ? "#4f6e90"
                      : Icon === SiFastapi
                      ? "#4e9186"
                      : "#ffffff"
                  }
                />
              </span>
            ))}
          </div>

          {/* Experience Card */}
          <div className="w-full max-w-md">
            <div className="flex flex-col gap-2 bg-slate-950 bg-opacity-45 rounded-xl p-6 shadow-xl transition duration-300 transform hover:scale-105 hover:shadow-purple-500/30">
              <div className="flex items-center gap-4">
                <FaGoogle color="#4285f4" size={50} />
                <div>
                  <h2 className="text-xl font-semibold text-purple-400">
                    Example
                  </h2>
                  <p className="text-sm text-gray-400 italic">
                    Duration: xxxx – May xxxx
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
