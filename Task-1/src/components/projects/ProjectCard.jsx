import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function ProjectCard({
  title,
  main,
  image,
  demoLink,
  codeLink,
}) {
  return (
    <div className="flex flex-col bg-slate-950 bg-opacity-45 rounded-xl shadow-xl max-w-md transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
      {image && (
        <img
          className="rounded-t-xl object-cover w-full h-48"
          src={image}
          alt={title}
        />
      )}

      <div className="p-4 flex flex-col items-center text-center gap-4">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-md text-justify">{main}</p>

        <div className="flex justify-center gap-4 mt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} Live Demo`}
            >
              <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                <FiExternalLink /> Demo
              </button>
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} Source Code`}
            >
              <button className="flex items-center gap-2 text-white py-2 px-4 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                <FiGithub /> Code
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
