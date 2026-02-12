
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GameView from './components/GameView';
import { GAMES } from './data/games';
import { Game, GameCategory } from './types';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<GameCategory>(GameCategory.ALL);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const categories = Object.values(GameCategory);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetView = () => {
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        onHomeClick={resetView} 
      />

      <main className="flex-1">
        {selectedGame ? (
          <GameView game={selectedGame} onBack={resetView} />
        ) : (
          <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Category Filter */}
            <div className="mb-10 flex flex-wrap gap-3 items-center justify-center sm:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
                    activeCategory === category 
                      ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105' 
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Featured Section (Optional/Static for visual appeal) */}
            {searchTerm === '' && activeCategory === GameCategory.ALL && (
              <div className="mb-12 rounded-3xl overflow-hidden relative aspect-[21/9] sm:aspect-[25/9] group cursor-pointer shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/gamers/1600/600" 
                  alt="Featured" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-12">
                  <span className="text-blue-500 font-bold tracking-widest uppercase mb-2">Featured Game</span>
                  <h2 className="font-gaming text-4xl sm:text-6xl font-bold text-white mb-4">MOTO X3M</h2>
                  <p className="max-w-md text-slate-300 mb-6 hidden sm:block">Experience the thrill of motorcycle stunts and challenging courses in this addictive racing adventure.</p>
                  <button 
                    onClick={() => handleGameSelect(GAMES.find(g => g.id === 'moto-x3m') || GAMES[0])}
                    className="w-fit px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-all transform hover:translate-y-[-2px]"
                  >
                    PLAY NOW
                  </button>
                </div>
              </div>
            )}

            {/* Game Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    onClick={handleGameSelect} 
                  />
                ))
              ) : (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-slate-500">
                  <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-medium">No games found</h3>
                  <p>Try searching for something else or change categories.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                 <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <span className="font-gaming text-xl font-bold">NEXUS<span className="text-blue-500">GAMES</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              The ultimate destination for premium browser gaming. No downloads, no blocked access. Just pure fun.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Explore</h4>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Action</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Racing</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Puzzle</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Sports</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold uppercase tracking-wider text-xs">Support</h4>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">FAQ</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">DMCA</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2024 Nexus Unblocked Games. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500">Twitter</a>
            <a href="#" className="hover:text-blue-500">Discord</a>
            <a href="#" className="hover:text-blue-500">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
