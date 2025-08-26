import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -10,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const projects = [
        {
            id: 1,
            title: "Shoppy Rad",
            description: "A full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment gateway integration.",
            link: "https://shoppy-rad.netlify.app/",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_111123_la7gfl.png"
        },
        {
            id: 2,
            title: "Chidi Okoroafor Ministries",
            description: "A personal blog with a clean and responsive design, featuring life and ministriy of Rev.Dr Chidi Okoroafor",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203279/Screenshot_2025-08-26_111425_cb54kp.png",
            link: "https://chidiokoroaforministry.netlify.app/",
        },
        {
            id: 3,
            title: "MobiHolder",
            description: "An event management application with features for creating, organizing, and tracking events, built with React.js.",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_110927_tljh8a.png",
            link: "https://mobi-holder.netlify.app/",
        },
        {
            id: 4,
            title: "TopBridge Homes",
            description: "A real estate website designed for TopBridge Homes",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203835/Screenshot_2025-08-26_112341_zxo9ir.png",
            link: "https://topbridgehomes.ng/",
        },
        {
            id: 5,
            title: "5M Logistics",
            description: "An advanced platform designed to optimize and simplify global logistics operations.",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_111016_hfp0hg.png",
            link: "http://5mlog.netlify.app/",
        },
        {
            id: 6,
            title: "KuduMart",
            description: "A modern e-commerce website featuring built-in auction capabilities for dynamic buying and selling.",
            image: "https://res.cloudinary.com/campnet/image/upload/v1756203221/Screenshot_2025-08-26_110208_gh2qzf.png",
            link: "https://kuduwebv2.netlify.app/",
        }
    ];

    return (
        <div className="bg-[#101a23] text-white min-h-screen overflow-hidden">
            <Header />
            <motion.main
                className="flex flex-1 justify-center py-10 sm:py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full max-w-6xl">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
                        <motion.p
                            className="text-[#90adcb] text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            A selection of my recent web development projects, showcasing my skills and experience in creating modern and responsive web applications.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {projects.map((project) => (
                            <a className="block" key={project.id} target='_blank' href={project.link}>
                                <motion.div
                                    className="group flex flex-col bg-[#1a2632] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                                    variants={cardVariants}
                                    whileHover="hover"
                                >
                                    <div className="relative overflow-hidden">
                                        <div
                                            className="w-full h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        ></div>
                                        <div className="absolute inset-0 bg-black/20 bg-opacity-50 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                            <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300">View Project</span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-[#90adcb] text-sm">{project.description}</p>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </motion.main>
        </div>
    );
};

export default Projects;