import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative min-h-screen flex bg-[#101a23] items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 via-transparent to-transparent"></div>
      </div>
      <main className="relative z-10 text-center px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 animate-fade-in-down">
            Chukwuemeka Anyanwu
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Welcome to my portfolio! I’m a web developer passionate about building intuitive, responsive, and modern digital experiences that bring ideas to life.
          </p>
          <Link
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 animate-fade-in"
            to="about"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
}
