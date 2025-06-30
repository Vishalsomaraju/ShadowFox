import React from "react";
import about_avatar from "../../assets/about_avatar.png";
import { IoArrowForward } from "react-icons/io5";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-10 sm:py-16"
    >
      <div className="text-white flex flex-col md:flex-row-reverse items-center justify-center bg-gradient-to-tr from-[#1e293b] via-[#334155] to-[#475569] shadow-xl border border-slate-700 rounded-2xl p-6 sm:p-12 max-w-6xl w-full gap-10">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <img
            className="w-52 sm:w-64 md:w-72 rounded-2xl shadow-lg"
            src={about_avatar}
            alt="Developer Avatar"
          />
        </div>
        {/* About Text */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>

          <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
            I’m a passionate and curious web developer who enjoys building
            functional, user-friendly applications. I focus on writing clean,
            readable code while constantly learning and improving my skills.
            Currently exploring full-stack development through real-world
            projects.
          </p>

          <ul className="space-y-5">
            <li>
              <div className="flex gap-4 p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
                <IoArrowForward size={24} className="mt-1 text-purple-400" />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Frontend Development
                  </h3>

                  <p className="text-sm text-gray-300">
                    Creating responsive layouts and engaging user interfaces
                    with React, Tailwind CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="flex gap-4 p-5 rounded-xl transition hover:scale-[1.02] hover:shadow-purple-500/30 hover:shadow-2xl bg-[#1e1e2f]/60 backdrop-blur-sm">
                <IoArrowForward size={24} className="mt-1 text-purple-400" />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Backend Basics
                  </h3>

                  <p className="text-sm text-gray-300">
                    Learning to build REST APIs using tools like FastAPI and
                    Flask, with MySQL for database management.
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
