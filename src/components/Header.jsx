import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-[#101a23]/70">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#223649] h-20">
                    <div className="flex items-center gap-4">
                        <Link className="flex items-center gap-3" to="/">
                            <svg className="text-[#0d7ff2]" fill="none" height="28" viewBox="0 0 48 48" width="28" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_6_330)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6_330">
                                        <rect fill="white" height="48" width="48" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Chukwuemeka Anyanwu</h2>
                        </Link>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-white text-sm font-medium leading-normal transition-colors duration-300 hover:text-[#0d7ff2]" to="/">Home</Link>
                        <Link className="text-[#0d7ff2] text-sm font-bold leading-normal transition-colors duration-300 hover:text-[#0d7ff2]" to="/about">About</Link>
                        <Link className="text-white text-sm font-medium leading-normal transition-colors duration-300 hover:text-[#0d7ff2]" to="#">Projects</Link>
                        <Link className="text-white text-sm font-medium leading-normal transition-colors duration-300 hover:text-[#0d7ff2]" to="#">Contact</Link>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Link className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a2632] text-white transition-colors duration-300 hover:bg-[#0d7ff2] hover:text-white" to="#">
                            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z" />
                            </svg>
                        </Link>
                        <Link className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a2632] text-white transition-colors duration-300 hover:bg-[#0d7ff2] hover:text-white" to="#">
                            <svg fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                            </svg>
                        </Link>
                        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#1a2632] text-white transition-colors duration-300 hover:bg-[#0d7ff2] hover:text-white">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header
