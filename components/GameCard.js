
import React from 'react';

const GameCard = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-slate-700 hover:border-blue-500"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
      </div>
      
      <div className="absolute top-2 right-2">
        <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white rounded shadow-lg">
          {game.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-gaming text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
          {game.title}
        </h3>
        <p className="mt-1 text-xs text-slate-400 line-clamp-2">
          {game.description}
        </p>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl pointer-events-none" />
    </div>
  );
};

export default GameCard;
