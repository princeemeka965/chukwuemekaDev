import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 300);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-[#101a23] flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Chukwuemeka Anyanwu</h1>
        <p className="text-lg text-blue-200">Software Developer (Web & Mobile Applications)</p>
      </div>

      <div className="w-80 max-w-full bg-gray-800 rounded-full h-4 mb-4">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-8 flex space-x-4">
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
      </div>
    </div>
  );
}

function Home() {
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



function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;