import React, { useState } from 'react';

export default function JokeComponent({ joke }: { joke: { setup: string; punchline: string } }) {
  const [showPunchline, setShowPunchline] = useState(false);
  


  return (
    <div className="h-full bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
           
            <div className="text-6xl mb-4">🐻</div>
          </div>

          {/* Setup */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              {joke.setup}
            </h2>
          </div>

          {/* Punchline Button/Reveal */}
          <div className="text-center">
            {!showPunchline ? (
              <button
                onClick={() => setShowPunchline(true)}
                className="px-8 py-4 bg-gray-950 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reveal Punchline 🎯
              </button>
            ) : (
              <div className="animate-fade-in">
                <p className="text-xl md:text-2xl text-green-400 font-bold mb-6">
                  {joke.punchline}
                </p>
                <button
                  onClick={() => setShowPunchline(false)}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-200"
                >
                  Hide Punchline
                </button>
              </div>
            )}
          </div>

         
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}