import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback({ type: "error", message: "Please fill all fields." });
      return;
    }

    setSending(true);
    setFeedback(null);

    emailjs
      .send(
        "service_ujvsxwg",
        "template_b66952p",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "LdwMav0bc7v3NITqb"
      )
      .then(
        () => {
          setFeedback({
            type: "success",
            message: "Message sent successfully!",
          });
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error(error);
          setFeedback({
            type: "error",
            message: "Failed to send message. Try again.",
          });
          setSending(false);
        }
      );
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("vishalsomaraju9@gmail.com").then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-screen flex items-center justify-center bg-[#1e293b] text-white px-4 py-16"
    >
      <div className="w-full max-w-6xl bg-[#334155] rounded-2xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row gap-12">
        {/* Left - Form */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold text-cyan-400 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-6">
            Let's work together on something cool.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#1e293b] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#1e293b] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#1e293b] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className={`bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 ${
                sending ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>

          {feedback && (
            <p
              className={`mt-4 font-semibold transition-opacity duration-500 ${
                feedback.type === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {feedback.message}
            </p>
          )}
        </div>

        {/* Right - Info */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Mail Icon"
            className="w-28 h-28 md:w-32 md:h-32"
          />
          <div className="space-y-2 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2 justify-center">
              <FaEnvelope className="text-cyan-400" /> vishalsomaraju9@gmail.com
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaPhoneAlt className="text-cyan-400" /> +91-8985046331
            </div>
            <div className="flex items-center gap-2 justify-center">
              <FaMapMarkerAlt className="text-cyan-400" /> Hyderabad, India
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-cyan-400 text-2xl">
            <a
              href="https://www.linkedin.com/in/vishalsomaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Vishalsomaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 transition-transform"
            >
              <FaGithub />
            </a>
            <button
              onClick={copyEmailToClipboard}
              className="hover:scale-125 transition-transform focus:outline-none"
              aria-label="Copy email to clipboard"
              type="button"
            >
              <FaEnvelope />
            </button>
          </div>

          {/* Copied Email Message */}
          {emailCopied && (
            <div className="fixed bottom-20 right-6 bg-cyan-500 text-white px-4 py-2 rounded shadow-lg animate-fadeInOut">
              Email copied to clipboard!
            </div>
          )}
        </div>
      </div>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          ↑
        </button>
      )}
    </section>
  );
}
