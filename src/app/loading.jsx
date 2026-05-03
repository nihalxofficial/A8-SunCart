"use client";

import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-linear-to-br from-white via-amber-50/20 to-sky-50/30'>
      
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-linear-to-r from-sky-500 to-cyan-400 flex items-center justify-center shadow-lg animate-bounce">
          <span className="text-3xl text-white">🛍️</span>
        </div>
      </div>
      
      <div className="w-64 bg-stone-200 rounded-full h-1.5 overflow-hidden">
        <div className="h-full bg-linear-to-r from-sky-500 to-amber-500 rounded-full animate-loading-bar"></div>
      </div>
      
      <p className="mt-4 text-stone-500 text-sm font-medium">Loading your experience...</p>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;