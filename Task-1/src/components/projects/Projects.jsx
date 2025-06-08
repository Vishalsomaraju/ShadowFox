import React from "react";
import ProjectCard from "./ProjectCard";

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
            image="/ecommerce-preview.png"
            demoLink="https://ecommerce-demo.com"
            codeLink="https://github.com/your-repo"
          />
          <ProjectCard
            title="Portfolio Website"
            main="A sleek personal portfolio built with React and TailwindCSS, showcasing projects, skills, and contact integration."
            image="/portfolio-preview.png"
            demoLink="https://vishal-portfolio.com"
            codeLink="https://github.com/your-username/portfolio"
          />
        </div>
      </div>
    </section>
  );
}
