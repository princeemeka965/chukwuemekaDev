import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contacts';

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
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-[#101a23] flex flex-col items-center justify-center text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Chukwuemeka Anyanwu</h1>
        <p className="text-lg text-blue-200">Software Developer (Specializing in Web & Mobile Applications)</p>
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;