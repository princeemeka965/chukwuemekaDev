import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const projects = [
    {
        id: 1,
        title: "Ocare Phinas Electronics",
        description: "A modern e-commerce store for genuine gadgets — phones, laptops, tablets and audio — with brand browsing, manual payment confirmation, and nationwide delivery.",
        link: "https://ocare-phinas.vercel.app/",
        image: "/projects/ocare-phinas.png",
        tags: ["React", "E-commerce", "Tailwind CSS"],
        featured: true,
    },
    {
        id: 2,
        title: "BOG — Build on the Go",
        description: "A platform that lets structure owners monitor and manage their building projects across borders, available on web, iOS and Android.",
        link: "https://bog-project.netlify.app/",
        image: "/projects/bog.png",
        tags: ["React", "SaaS", "Project Management"],
        featured: true,
    },
    {
        id: 3,
        title: "Chidi Okoroafor Ministries",
        description: "A clean, responsive personal blog featuring the life and ministry of Rev. Dr. Chidi Okoroafor.",
        link: "https://chidiokoroaforministry.netlify.app/",
        image: "https://res.cloudinary.com/campnet/image/upload/v1756203279/Screenshot_2025-08-26_111425_cb54kp.png",
        tags: ["React", "Blog", "Responsive"],
    },
    {
        id: 4,
        title: "MobiHolder",
        description: "An event management application for creating, organizing, and tracking events, built with React.js.",
        image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_110927_tljh8a.png",
        link: "https://mobi-holder.netlify.app/",
        tags: ["React", "Events", "Dashboard"],
    },
    {
        id: 5,
        title: "5M Logistics",
        description: "An advanced platform designed to optimize and simplify global logistics operations.",
        image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_111016_hfp0hg.png",
        link: "http://5mlog.netlify.app/",
        tags: ["React", "Logistics", "Web App"],
    },
    {
        id: 6,
        title: "KuduMart",
        description: "A modern e-commerce website featuring built-in auction capabilities for dynamic buying and selling.",
        image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_110208_gh2qzf.png",
        link: "https://kuduwebv2.netlify.app/",
        tags: ["React", "E-commerce", "Auctions"],
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { y: 24, opacity: 0, scale: 0.96 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const ProjectCard = ({ project }) => (
    <motion.a
        className="group relative flex flex-col overflow-hidden rounded-xl bg-[#1a2632] shadow-lg transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/40"
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        variants={cardVariants}
        whileHover={{ y: -10 }}
    >
        {project.featured && (
            <span className="absolute right-4 top-4 z-10 rounded-full bg-[#0d7ff2] px-3 py-1 text-xs font-bold text-white shadow-lg">
                Featured
            </span>
        )}
        <div className="relative h-52 overflow-hidden">
            <div
                className="h-full w-full bg-cover bg-top transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-lg bg-[#0d7ff2] px-4 py-2 text-sm font-bold text-white">
                    View Project
                    <span className="material-symbols-outlined text-base">open_in_new</span>
                </span>
            </div>
        </div>
        <div className="flex flex-grow flex-col p-6">
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#0d7ff2]">
                {project.title}
            </h3>
            <p className="mt-2 flex-grow text-sm text-[#90adcb]">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-[#223649] bg-[#101a23] px-3 py-1 text-xs font-medium text-[#90adcb]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.a>
);

const Projects = () => {
    return (
        <div className="bg-[#101a23] text-white min-h-screen overflow-hidden">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <motion.div
                    className="mx-auto max-w-3xl text-center"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <span className="inline-block rounded-full border border-[#223649] bg-[#1a2632] px-4 py-1.5 text-sm font-medium text-[#0d7ff2]">
                        Portfolio
                    </span>
                    <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl">
                        Projects I've{" "}
                        <span className="bg-gradient-to-r from-[#0d7ff2] to-purple-500 bg-clip-text text-transparent">
                            built
                        </span>
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-[#90adcb]">
                        A selection of my recent work — modern, responsive web and mobile
                        applications crafted with care. Click any card to explore it live.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Projects;
