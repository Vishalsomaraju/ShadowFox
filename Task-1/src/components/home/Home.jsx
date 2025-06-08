import React from "react";
import home_avatar from "../../assets/home_avatar.png";
import { PiArrowUpRightBold } from "react-icons/pi";

const letters = "Hello! I Am VISHAL".split("");

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navbarHeight = 64;
      const y =
        contactSection.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen">
      <div className="text-white mt-10 flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 gap-8">
        <div className="md:w-2/4 pt-5">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight text-cyan-400 drop-shadow-md flex">
            {letters.map((char, i) => (
              <span
                key={i}
                className="animate-waveLetter"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-2xl mt-4 text-gray-300 tracking-tight">
            Turning ideas into interactive experiences.
          </p>
          <p className="text-base md:text-2xl mt-4 text-gray-300 tracking-tight">
            “Innovate. Code. Repeat.”
          </p>

          <button
            aria-label="Hire me"
            role="button"
            onClick={scrollToContact}
            className="mt-6 px-6 py-3 rounded-full text-lg font-semibold text-white flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            Contact Me
            <PiArrowUpRightBold className="text-lg" />
          </button>
        </div>

        <div className="md:w-2/4 flex justify-center">
          <img
            src={home_avatar}
            alt="Home Avatar"
            className="max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
