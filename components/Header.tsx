
import React from 'react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange, onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div 
        onClick={onHomeClick}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </div>
        <h1 className="font-gaming text-2xl font-bold tracking-tighter text-white">
          NEXUS<span className="text-blue-500">GAMES</span>
        </h1>
      </div>

      <div className="relative w-full md:w-96">
        <input
          type="text"
          placeholder="Search for games..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-slate-800 border border-slate-700 text-slate-100 px-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
        />
        <svg 
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-white transition-colors">Popular</a>
        <a href="#" className="hover:text-white transition-colors">New</a>
        <a href="#" className="hover:text-white transition-colors">Random</a>
      </div>
    </header>
  );
};

export default Header;
