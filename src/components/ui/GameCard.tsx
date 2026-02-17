import { useNavigate } from "react-router-dom";
import { RawgGame } from "../../api/rawg/types";

function RatingDot({ rating }: { rating: number }) {
  const color =
    rating >= 4.0
      ? "bg-emerald-500"
      : rating >= 3.0
        ? "bg-yellow-500"
        : rating >= 2.0
          ? "bg-orange-500"
          : "bg-red-500";
  return (
    <span
      className={`inline-block w-2 h-2 rounded-full ${color} mr-1.5 shrink-0`}
    />
  );
}

export default function GameCard({ game }: { game: RawgGame }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/products/${game.id}`)}
      className="
        group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden
        cursor-pointer hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-900/20
        transition-all duration-200 flex flex-col
      "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-44 bg-slate-800">
        {game.background_image ? (
          <img
            src={game.background_image}
            alt={game.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600 text-3xl">
            game
          </div>
        )}

        {/* Metacritic badge */}
        {game.metacritic && (
          <div
            className={`
            absolute top-2 right-2 px-2 py-0.5 rounded-md text-xs font-bold
            ${
              game.metacritic >= 75
                ? "bg-emerald-500 text-white"
                : game.metacritic >= 50
                  ? "bg-yellow-500 text-black"
                  : "bg-red-500 text-white"
            }
          `}
          >
            {game.metacritic}
          </div>
        )}

        {/* ESRB */}
        {game.esrb_rating && (
          <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/60 rounded text-[10px] text-slate-300 font-medium">
            {game.esrb_rating.name}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Platforms */}
        <div className="flex flex-wrap gap-1 mb-2">
          {game.platforms?.slice(0, 4).map(({ platform }) => (
            <span
              key={platform.id}
              className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700"
            >
              {platform.name}
            </span>
          ))}
          {(game.platforms?.length ?? 0) > 4 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-500">
              +{(game.platforms?.length ?? 0) - 4}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 line-clamp-2 flex-1">
          {game.name}
        </h3>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-3">
          {game.genres.slice(0, 2).map((g) => (
            <span
              key={g.id}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-600/15 text-indigo-400 border border-indigo-600/20"
            >
              {g.name}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-800">
          <div className="flex items-center text-xs text-slate-300">
            <RatingDot rating={game.rating} />
            <span className="font-medium">{game.rating.toFixed(1)}</span>
            <span className="text-slate-500 ml-1">/ 5</span>
          </div>
          <div className="text-xs text-slate-500">
            {game.released ? new Date(game.released).getFullYear() : "—"}
          </div>
          {game.playtime > 0 && (
            <div className="text-xs text-slate-500">~{game.playtime}h</div>
          )}
        </div>
      </div>
    </article>
  );
}
