import { RawgGameDetail } from "../../../../api/rawg/types";

interface GameHeroProps {
  game: RawgGameDetail;
}

export function GameHero({ game }: GameHeroProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
      {game.background_image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-20 scale-110"
            style={{ backgroundImage: `url(${game.background_image})` }}
          />

          <img
            src={game.background_image}
            alt={game.name}
            className="relative z-10 w-full max-h-80 object-cover"
          />
        </>
      )}

      <div className="relative z-10 p-6 bg-gradient-to-t from-slate-950/90 to-transparent -mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white leading-tight">
              {game.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {game.released && (
                <span className="text-sm text-slate-400">
                  {new Date(game.released).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              )}
              {game.esrb_rating && (
                <span className="text-xs px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-medium">
                  {game.esrb_rating.name}
                </span>
              )}
            </div>
          </div>

          {game.metacritic && <MetacriticBadge score={game.metacritic} />}
        </div>
      </div>
    </div>
  );
}

// ── Metacritic badge (only used by GameHero) ───────────
function MetacriticBadge({ score }: { score: number }) {
  const colorClass =
    score >= 75
      ? "border-emerald-500 text-emerald-400 bg-emerald-500/10"
      : score >= 50
        ? "border-yellow-500 text-yellow-400 bg-yellow-500/10"
        : "border-red-500 text-red-400 bg-red-500/10";

  return (
    <div
      className={`shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold border-2 ${colorClass}`}
    >
      <span className="text-2xl">{score}</span>
      <span className="text-[10px] opacity-60">META</span>
    </div>
  );
}
