import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Cubes */}
        <div className="floating-cube cube-1"></div>
        <div className="floating-cube cube-2"></div>
        <div className="floating-cube cube-3"></div>
        <div className="floating-cube cube-4"></div>
        <div className="floating-cube cube-5"></div>
        
        {/* 3D Spheres */}
        <div className="floating-sphere sphere-1"></div>
        <div className="floating-sphere sphere-2"></div>
        <div className="floating-sphere sphere-3"></div>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 transform hover:scale-105 transition-transform duration-300 border border-white/20">
        <div className="text-center mb-8">
          {/* 3D Animated Logo */}
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="logo-3d">
              <div className="logo-face logo-front">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>
              <div className="logo-face logo-back">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-16 h-16 object-contain rounded-lg opacity-80"
                />
              </div>
              <div className="logo-face logo-right">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-12 h-12 object-contain rounded-lg opacity-60"
                />
              </div>
              <div className="logo-face logo-left">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-12 h-12 object-contain rounded-lg opacity-60"
                />
              </div>
              <div className="logo-face logo-top">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-12 h-12 object-contain rounded-lg opacity-40"
                />
              </div>
              <div className="logo-face logo-bottom">
                <img 
                  src="/logo.webp" 
                  alt="Task Tracker Logo" 
                  className="w-12 h-12 object-contain rounded-lg opacity-40"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Task Tracker</h1>
          <p className="text-gray-600">Organize your tasks with style</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 bg-white/80 backdrop-blur-sm transform focus:scale-105"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden group btn-3d"
          >
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Made by Siddhant Bhagat
          </p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* CSS for 3D animations */}
      <style jsx>{`
        .floating-cube {
          position: absolute;
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3));
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 8px;
          animation: float 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }

        .cube-1 { top: 10%; left: 10%; animation-delay: 0s; transform: rotateX(45deg) rotateY(45deg); }
        .cube-2 { top: 20%; right: 15%; animation-delay: 1s; transform: rotateX(30deg) rotateY(60deg); }
        .cube-3 { bottom: 30%; left: 20%; animation-delay: 2s; transform: rotateX(60deg) rotateY(30deg); }
        .cube-4 { bottom: 20%; right: 25%; animation-delay: 3s; transform: rotateX(75deg) rotateY(45deg); }
        .cube-5 { top: 50%; left: 5%; animation-delay: 4s; transform: rotateX(15deg) rotateY(75deg); }

        .floating-sphere {
          position: absolute;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
          border-radius: 50%;
          animation: sphere-float 8s ease-in-out infinite;
        }

        .sphere-1 { top: 15%; right: 10%; animation-delay: 0.5s; }
        .sphere-2 { bottom: 25%; left: 15%; animation-delay: 2.5s; }
        .sphere-3 { top: 60%; right: 20%; animation-delay: 4.5s; }

        .logo-3d {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto;
          transform-style: preserve-3d;
          animation: logo-rotate 10s linear infinite;
        }

        .logo-face {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-front { background: linear-gradient(45deg, #3b82f6, #8b5cf6); transform: translateZ(40px); }
        .logo-back { background: linear-gradient(45deg, #8b5cf6, #3b82f6); transform: rotateY(180deg) translateZ(40px); }
        .logo-right { background: linear-gradient(45deg, #6366f1, #a855f7); transform: rotateY(90deg) translateZ(40px); }
        .logo-left { background: linear-gradient(45deg, #a855f7, #6366f1); transform: rotateY(-90deg) translateZ(40px); }
        .logo-top { background: linear-gradient(45deg, #4f46e5, #9333ea); transform: rotateX(90deg) translateZ(40px); }
        .logo-bottom { background: linear-gradient(45deg, #9333ea, #4f46e5); transform: rotateX(-90deg) translateZ(40px); }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255,255,255,0.6);
          border-radius: 50%;
          animation: particle-float 4s ease-in-out infinite;
        }

        .btn-3d {
          transform-style: preserve-3d;
          transition: transform 0.2s;
        }

        .btn-3d:hover {
          transform: translateY(-2px) scale(1.05);
        }

        .btn-3d:active {
          transform: translateY(1px) scale(1.02);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          33% { transform: translateY(-20px) rotateX(120deg) rotateY(120deg); }
          66% { transform: translateY(-10px) rotateX(240deg) rotateY(240deg); }
        }

        @keyframes sphere-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-30px) scale(1.1); opacity: 1; }
        }

        @keyframes logo-rotate {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }

        @keyframes particle-float {
          0%, 100% { transform: translateY(0px); opacity: 0; }
          50% { transform: translateY(-50px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Login;