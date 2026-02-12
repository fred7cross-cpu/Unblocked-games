
import React, { useState } from 'react';

const GameView = ({ game, onBack }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.getElementById('game-iframe');
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen().catch(err => {
          alert(`Error attempting to enable full-screen mode: ${err.message}`);
        });
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-slate-900 animate-in fade-in duration-500">
      <div className="flex items-center justify-between px-6 py-4 bg-slate-800 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-700 rounded-full transition-colors text-slate-300 hover:text-white"
            title="Back to home"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <div>
            <h2 className="font-gaming text-xl font-bold text-white">{game.title}</h2>
            <p className="text-xs text-slate-400">{game.category} • Nexus Unblocked</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
           <button 
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors shadow-lg shadow-blue-900/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </button>
        </div>
      </div>

      <div className="flex-1 relative bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-5xl h-full shadow-2xl shadow-blue-500/10 rounded-xl overflow-hidden">
          <iframe
            id="game-iframe"
            src={game.iframeUrl}
            title={game.title}
            className="w-full h-full border-none rounded-xl"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="bg-slate-800 p-6 border-t border-slate-700">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-white mb-2">Description</h3>
          <p className="text-slate-300 leading-relaxed text-sm">
            {game.description}
          </p>
          <div className="mt-4 flex gap-2">
            <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">#unblocked</span>
            <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">#gaming</span>
            <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">#{game.category.toLowerCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;
