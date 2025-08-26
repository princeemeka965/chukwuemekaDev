import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
  };

  // Ref and controls for scroll-triggered animations
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-[#101a23] text-white min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1">
        <motion.section 
          className="py-10 sm:py-24 lg:py-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
                variants={slideInFromLeft}
              >
                <motion.div 
                  className="relative w-48 h-48 sm:w-64 sm:h-64 mb-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0d7ff2] to-purple-600 transform scale-105 blur-xl"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <motion.div
                    className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full w-full h-full border-4 border-[#101a23]"
                    style={{ backgroundImage: 'url("https://res.cloudinary.com/campnet/image/upload/v1756165715/WhatsApp_Image_2025-08-05_at_10.02.27_bca6b3f7-removebg-preview_1_1_ziw7dt.png")' }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  />
                </motion.div>
                
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
                  variants={fadeIn}
                >
                  I'm Chukwuemeka Anyanwu.
                </motion.h1>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl font-medium text-[#0d7ff2] mb-4"
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                >
                  A Web Developer based in Enugu, Nigeria.
                </motion.h2>
                
                <motion.p 
                  className="text-lg text-[#90adcb] max-w-xl"
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                >
                  Passionate about crafting dynamic, responsive, and user-centric web applications that are both visually appealing and functionally robust.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-7"
                variants={slideInFromRight}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="bg-[#1a2632] p-8 sm:p-12 rounded-2xl shadow-2xl shadow-black/20"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-6 flex items-center gap-3"
                    variants={fadeIn}
                  >
                    <motion.span 
                      className="material-symbols-outlined text-[#0d7ff2] text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      person
                    </motion.span>
                    About Me
                  </motion.h3>
                  
                  <motion.p 
                    className="text-[#90adcb] text-base leading-relaxed mb-8"
                    variants={fadeIn}
                    transition={{ delay: 0.6 }}
                  >
                    With over 5 years of experience, I specialize in both front-end and back-end development. My toolkit includes React, Next, React Native and Vue.js for creating engaging user interfaces, complemented by Node.js and Python for building powerful server-side logic. I thrive on solving complex problems and collaborating with teams to transform innovative ideas into reality. My goal is to always build applications that not only meet technical requirements but also provide an exceptional user experience.
                  </motion.p>
                  
                  <motion.h3 
                    className="text-3xl font-bold mb-6 flex items-center gap-3"
                    variants={fadeIn}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.span 
                      className="material-symbols-outlined text-[#0d7ff2] text-4xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                    >
                      code
                    </motion.span>
                    Skills
                  </motion.h3>
                  
                  <motion.div 
                    className="flex gap-3 flex-wrap"
                    variants={staggerContainer}
                    initial="hidden"
                    ref={ref}
                    animate={controls}
                  >
                    {['React', 'Next Js', 'Vue.js', 'React Native', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SQL', 'Git'].map((skill, index) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center justify-center h-9 px-4 rounded-full bg-[#1a2632] text-sm font-medium text-[#90adcb] transition-all duration-300 hover:bg-[#0d7ff2] hover:text-white cursor-pointer"
                        variants={scaleUp}
                        whileHover={{ scale: 1.1, backgroundColor: "#0d7ff2", color: "white" }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default About;