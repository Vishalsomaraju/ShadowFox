import React from "react";
import ProjectCard from "./ProjectCard";
import portfolio from "../../assets/Screenshot 2025-07-02 051149.png";
import ecommerce from "../../assets/Screenshot 2025-07-02 051229.png";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen text-white bg-transparent">
      <div className="bg-gradient-to-tl from-[#1e293b] via-[#334155] to-[#475569] bg-opacity-90 shadow-inner border-t border-slate-600 mx-4 sm:mx-8 md:mx-20 rounded-lg px-6 py-14 sm:px-10 md:px-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 font-bold transition-transform transform hover:scale-105 mb-12 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ProjectCard
            title="E-commerce"
            main="A full-stack e-commerce website featuring user authentication, cart management, and Stripe payments."
            image={ecommerce}
            imageAlt="E-commerce Website Screenshot"
            demoLink="https://Vishalsomaraju.github.io/Ecommerce/"
            codeLink="https://github.com/Vishalsomaraju/Ecommerce"
          />
          <ProjectCard
            title="Portfolio Website"
            main="A sleek personal portfolio built with React and TailwindCSS, showcasing projects, skills, and contact integration."
            image={portfolio}
            imageAlt="Portfolio Website Screenshot"
            demoLink="https://Vishalsomaraju.github.io/Portfolio/"
            codeLink="https://github.com/Vishalsomaraju/Portfolio"
          />
        </div>
      </div>
    </section>
  );
}
