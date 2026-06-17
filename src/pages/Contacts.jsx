import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        botcheck: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
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
                staggerChildren: 0.1,
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

    const buttonVariants = {
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
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        },
        tap: {
            scale: 0.95
        }
    };

    // Web3Forms access key — get yours by entering anyanwue4@gmail.com at
    // https://web3forms.com (it's emailed to you instantly). Submissions are
    // delivered to the email the key is registered with. This key is safe to
    // expose in client-side code. Can also be set via VITE_WEB3FORMS_ACCESS_KEY.
    const WEB3FORMS_ACCESS_KEY =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: formData.name,
                    replyto: formData.email,
                    // Honeypot field — bots fill this, humans never see it
                    botcheck: formData.botcheck
                })
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' });
            } else {
                throw new Error(data.message || 'Submission failed');
            }

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#101a23] text-white min-h-screen overflow-hidden flex flex-col">
            <Header />

            <motion.div
                className="flex-1 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-full max-w-2xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-4">
                            Get in Touch
                        </h1>
                        <motion.p
                            className="text-lg text-[#90adcb] max-w-xl mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            I'm always open to discussing new projects, creative ideas, or opportunities.
                            Feel free to reach out using the form below or connect with me on social media.
                        </motion.p>
                    </motion.div>

                    <motion.form
                        className="w-full space-y-6 bg-[#1a2632] p-8 rounded-2xl shadow-2xl shadow-black/20"
                        onSubmit={handleSubmit}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Honeypot anti-spam field — hidden from real users */}
                        <input
                            type="checkbox"
                            name="botcheck"
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                            checked={!!formData.botcheck}
                            onChange={handleChange}
                        />

                        <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2" variants={itemVariants}>
                            <div className="relative">
                                <label className="sr-only" htmlFor="name">Your Name</label>
                                <input
                                    className="w-full rounded-lg border-2 border-transparent bg-[#223649] p-4 text-base text-white placeholder:text-[#90adcb] transition-colors focus:border-[#0d7ff2] focus:bg-transparent focus:outline-none"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="relative">
                                <label className="sr-only" htmlFor="email">Your Email</label>
                                <input
                                    className="w-full rounded-lg border-2 border-transparent bg-[#223649] p-4 text-base text-white placeholder:text-[#90adcb] transition-colors focus:border-[#0d7ff2] focus:bg-transparent focus:outline-none"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </motion.div>

                        <motion.div className="relative" variants={itemVariants}>
                            <label className="sr-only" htmlFor="subject">Subject</label>
                            <input
                                className="w-full rounded-lg border-2 border-transparent bg-[#223649] p-4 text-base text-white placeholder:text-[#90adcb] transition-colors focus:border-[#0d7ff2] focus:bg-transparent focus:outline-none"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                type="text"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </motion.div>

                        <motion.div className="relative" variants={itemVariants}>
                            <label className="sr-only" htmlFor="message">Your Message</label>
                            <textarea
                                className="w-full rounded-lg border-2 border-transparent bg-[#223649] p-4 text-base text-white placeholder:text-[#90adcb] transition-colors focus:border-[#0d7ff2] focus:bg-transparent focus:outline-none"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </motion.div>

                        <motion.div
                            className="flex justify-end"
                            variants={buttonVariants}
                        >
                            <motion.button
                                className="flex items-center justify-center cursor-pointer gap-2 rounded-lg bg-[#0d7ff2] px-6 py-3 text-base font-bold text-white disabled:opacity-70 disabled:cursor-not-allowed"
                                type="submit"
                                disabled={isSubmitting}
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="truncate">Sending...</span>
                                        <span className="material-symbols-outlined animate-spin">autorenew</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="truncate">Send Message</span>
                                        <span className="material-symbols-outlined">send</span>
                                    </>
                                )}
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="mt-4"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: submitStatus ? 1 : 0,
                                height: submitStatus ? 'auto' : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-800 text-green-100 rounded-lg text-center">
                                    Thank you! Your message has been sent successfully.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-800 text-red-100 rounded-lg text-center">
                                    Sorry, there was an error sending your message. Please try again.
                                </div>
                            )}
                        </motion.div>
                    </motion.form>

                    <motion.div
                        className="text-center pt-8 mt-8 border-t border-[#223649]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <p className="text-[#90adcb] mb-4">Or connect with me on social media:</p>
                        <div className="flex justify-center space-x-4">

                            {/* Facebook */}
                            <motion.a
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223649] text-white transition-colors hover:bg-[#1877F2]"
                                href="https://web.facebook.com/prince.emeka.965/"
                                target="_blank"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 
          23.403.597 24 1.326 24H12.82v-9.294H9.692V11.41h3.128V8.692c0-3.1 
          1.894-4.788 4.659-4.788 1.325 0 2.463.099 
          2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
          1.763v2.31h3.587l-.467 3.296h-3.12V24h6.116C23.403 
          24 24 23.403 24 22.674V1.326C24 .597 23.403 0 
          22.675 0z"/>
                                </svg>
                            </motion.a>

                            {/* Instagram */}
                            <motion.a
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223649] text-white transition-colors hover:bg-[#E4405F]"
                                href="https://www.instagram.com/mranyanwuemeka/"
                                target="_blank"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 
          4.85.07 1.366.062 2.633.35 
          3.608 1.325.975.975 1.263 
          2.242 1.325 3.608.058 1.266.069 
          1.646.069 4.85s-.012 3.584-.07 
          4.85c-.062 1.366-.35 2.633-1.325 
          3.608-.975.975-2.242 1.263-3.608 
          1.325-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 
          15.747 2.163 15.367 2.163 
          12s.012-3.584.07-4.85c.062-1.366.35-2.633 
          1.325-3.608C4.533 2.583 5.8 2.295 7.166 
          2.233 8.432 2.175 8.812 2.163 12 
          2.163zm0 1.837c-3.17 0-3.548.012-4.795.07-1.042.048-1.612.218-1.986.363-.5.194-.86.427-1.236.803-.376.376-.61.736-.803 
          1.236-.145.374-.315.944-.363 1.986-.058 1.247-.07 
          1.625-.07 4.795s.012 3.548.07 
          4.795c.048 1.042.218 1.612.363 
          1.986.194.5.427.86.803 
          1.236.376.376.736.61 1.236.803.374.145.944.315 
          1.986.363 1.247.058 1.625.07 
          4.795.07s3.548-.012 
          4.795-.07c1.042-.048 1.612-.218 
          1.986-.363.5-.194.86-.427 
          1.236-.803.376-.376.61-.736.803-1.236.145-.374.315-.944.363-1.986.058-1.247.07-1.625.07-4.795s-.012-3.548-.07-4.795c-.048-1.042-.218-1.612-.363-1.986a3.592 
          3.592 0 0 0-.803-1.236 3.592 3.592 0 0 
          0-1.236-.803c-.374-.145-.944-.315-1.986-.363-1.247-.058-1.625-.07-4.795-.07zm0 
          3.905a5.933 5.933 0 1 0 0 
          11.866A5.933 5.933 0 0 0 12 
          7.905zm0 9.8a3.867 3.867 0 1 1 0-7.734 3.867 
          3.867 0 0 1 0 7.734zm6.406-10.845a1.44 
          1.44 0 1 1-2.881 0 1.44 
          1.44 0 0 1 2.881 0z"/>
                                </svg>
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223649] text-white transition-colors hover:bg-[#25D366]"
                                href="https://wa.me/+2348163276826"
                                target="_blank"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M20.52 3.48A11.91 11.91 0 0 0 12.07 0C5.45 
          0 .02 5.43.02 12.07c0 2.13.56 4.2 
          1.63 6.03L0 24l6.07-1.58a11.93 11.93 0 0 0 
          6.01 1.61h.01c6.63 0 12.06-5.43 
          12.06-12.07 0-3.22-1.25-6.24-3.52-8.51zm-8.45 
          17.3c-1.9 0-3.76-.51-5.37-1.48l-.39-.23-3.59.94.96-3.5-.25-.36a9.44 
          9.44 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.47-9.47 
          2.53 0 4.91.99 6.71 2.78a9.44 9.44 0 0 1 
          2.76 6.72c0 5.22-4.25 9.47-9.47 
          9.47zm5.25-7.11c-.29-.15-1.73-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 
          1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.44-1.73-1.61-2.02-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.29-1.04 
          1.01-1.04 2.46s1.07 2.86 1.22 3.06c.15.2 2.11 3.22 5.11 4.52.71.31 
          1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 
          1.73-.71 1.97-1.4.24-.68.24-1.26.17-1.39-.07-.13-.27-.2-.57-.34z"/>
                                </svg>
                            </motion.a>

                            {/* Twitter (X) */}
                            <motion.a
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#223649] text-white transition-colors hover:bg-[#1DA1F2]"
                                href="https://x.com/mr_anyanwu"
                                target="_blank"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 
          1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 
          1.195-.897-.959-2.178-1.555-3.594-1.555-2.72 
          0-4.924 2.204-4.924 4.924 0 .39.045.765.127 
          1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.667 
          1.577-.667 2.475 0 1.708.87 3.216 2.188 
          4.099-.807-.026-1.566-.248-2.229-.616v.061c0 
          2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 
          0-.626-.03-.928-.086.627 1.956 2.444 3.377 
          4.6 3.419-1.68 1.318-3.809 2.105-6.102 
          2.105-.397 0-.788-.023-1.175-.069 2.179 1.397 
          4.768 2.21 7.557 2.21 9.054 0 14.002-7.496 
          14.002-13.986 0-.21-.005-.423-.014-.634.962-.694 
          1.8-1.562 2.46-2.549z"/>
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;