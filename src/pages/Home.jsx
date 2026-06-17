import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";

const ROLES = [
  "Web Developer",
  "Mobile App Developer",
  "React & React Native Engineer",
  "Full-Stack Problem Solver",
];

const SKILLS = [
  "React",
  "Next.js",
  "Vue.js",
  "React Native",
  "Node.js",
  "Python",
  "TypeScript",
  "Tailwind CSS",
];

const STATS = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "100%", label: "Client Focused" },
];

const FEATURED = [
  {
    title: "Ocare Phinas Electronics",
    description:
      "A modern e-commerce store for genuine gadgets — phones, laptops, tablets and audio — with nationwide delivery.",
    link: "https://ocare-phinas.vercel.app/",
    image: "/projects/ocare-phinas.png",
  },
  {
    title: "BOG — Build on the Go",
    description:
      "A platform that lets structure owners monitor and manage building projects across borders, on web and mobile.",
    link: "https://bog-project.netlify.app/",
    image: "/projects/bog.png",
  },
  {
    title: "KuduMart",
    description:
      "A modern e-commerce site with built-in auction capabilities for dynamic buying and selling.",
    link: "https://kuduwebv2.netlify.app/",
    image:
      "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_110208_gh2qzf.png",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/princeemeka965",
    path: "M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chukwuemeka-anyanwu-73b881a5/",
    path: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
  },
  {
    label: "X",
    href: "https://x.com/mr_anyanwu",
    path: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.31,99.79,102.75,36.05A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.77-64.66,40.56,63.74A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29l101.86,160Z",
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// Typewriter hook for the rotating role text
function useTypewriter(words, typingSpeed = 90, deletingSpeed = 45, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}

export default function Home() {
  const typed = useTypewriter(ROLES);

  return (
    <div className="bg-[#101a23] text-white min-h-screen overflow-hidden flex flex-col">
      <Header />

      {/* Decorative animated background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#0d7ff2]/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative z-10 flex-1">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: intro */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                className="inline-flex items-center gap-2 rounded-full border border-[#223649] bg-[#1a2632] px-4 py-1.5 text-sm font-medium text-[#90adcb]"
                variants={fadeUp}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400"></span>
                </span>
                Available for new projects
              </motion.span>

              <motion.h1
                className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
                variants={fadeUp}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-[#0d7ff2] to-purple-500 bg-clip-text text-transparent">
                  Chukwuemeka
                </span>
              </motion.h1>

              <motion.div
                className="mt-4 h-9 sm:h-12 text-2xl sm:text-4xl font-semibold text-[#90adcb]"
                variants={fadeUp}
              >
                <span className="text-white">{typed}</span>
                <span className="ml-1 inline-block w-0.5 animate-pulse bg-[#0d7ff2] align-middle h-7 sm:h-9" />
              </motion.div>

              <motion.p
                className="mt-6 max-w-xl text-lg text-[#90adcb] mx-auto lg:mx-0"
                variants={fadeUp}
              >
                I build intuitive, responsive, and modern web & mobile experiences
                that turn ideas into products people love to use.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                variants={fadeUp}
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 px-7 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-105"
                >
                  View My Work
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#223649] bg-[#1a2632] px-7 py-3 text-base font-bold text-white transition-colors hover:border-[#0d7ff2] hover:text-[#0d7ff2]"
                >
                  Get in Touch
                  <span className="material-symbols-outlined">mail</span>
                </Link>
              </motion.div>

              {/* Socials */}
              <motion.div
                className="mt-8 flex items-center justify-center lg:justify-start gap-3"
                variants={fadeUp}
              >
                {SOCIALS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1a2632] text-white transition-colors hover:bg-[#0d7ff2]"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: portrait */}
            <motion.div
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative w-60 h-60 sm:w-80 sm:h-80">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0d7ff2] to-purple-600 blur-2xl scale-105"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="relative h-full w-full rounded-full border-4 border-[#101a23] bg-[#1a2632] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      'url("https://res.cloudinary.com/campnet/image/upload/v1756165715/WhatsApp_Image_2025-08-05_at_10.02.27_bca6b3f7-removebg-preview_1_1_ziw7dt.png")',
                  }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto lg:mx-0"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-[#223649] bg-[#1a2632]/60 p-5 text-center"
                variants={fadeUp}
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#0d7ff2]">{stat.value}</p>
                <p className="mt-1 text-xs sm:text-sm text-[#90adcb]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Tech stack */}
        <motion.section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm uppercase tracking-widest text-[#90adcb]">
            Tech I work with
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <motion.span
                key={skill}
                className="rounded-full bg-[#1a2632] px-5 py-2 text-sm font-medium text-[#90adcb] transition-colors hover:bg-[#0d7ff2] hover:text-white cursor-default"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Featured projects */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
              <p className="mt-2 text-[#90adcb]">A few projects I'm proud of.</p>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-[#0d7ff2] font-semibold"
            >
              View all projects
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {FEATURED.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-xl bg-[#1a2632] shadow-lg transition-shadow hover:shadow-2xl"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-lg bg-[#0d7ff2] px-4 py-2 text-sm font-bold text-white">
                      View Project
                    </span>
                  </div>
                </div>
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-[#90adcb]">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>

        {/* CTA banner */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-[#223649] bg-gradient-to-br from-[#1a2632] to-[#101a23] p-10 sm:p-14 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[#90adcb]">
              Let's build something great together. I'm always open to new ideas,
              collaborations, and opportunities.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-105"
            >
              Let's Talk
              <span className="material-symbols-outlined">arrow_outward</span>
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
