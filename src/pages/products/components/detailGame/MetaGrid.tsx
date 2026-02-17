import { RawgGameDetail } from "../../../../api/rawg/types";
import MetaBlock from "./MetaBlock";

interface MetaGridProps {
  game: RawgGameDetail;
}

export function MetaGrid({ game }: MetaGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <MetaBlock label="Rating" value={`${game.rating.toFixed(2)} / 5`} />
      <MetaBlock
        label="Avg Playtime"
        value={game.playtime > 0 ? `~${game.playtime} hours` : null}
      />
      <MetaBlock
        label="Achievements"
        value={game.achievements_count > 0 ? game.achievements_count : null}
      />
      <MetaBlock
        label="Screenshots"
        value={game.screenshots_count > 0 ? game.screenshots_count : null}
      />
      <MetaBlock
        label="Developers"
        value={game.developers?.map((d) => d.name).join(", ")}
      />
      <MetaBlock
        label="Publishers"
        value={game.publishers?.map((p) => p.name).join(", ")}
      />
      <MetaBlock
        label="Genres"
        value={
          <div className="flex flex-wrap gap-1">
            {game.genres.map((g) => (
              <span
                key={g.id}
                className="text-xs px-1.5 py-0.5 rounded bg-indigo-600/20 text-indigo-400"
              >
                {g.name}
              </span>
            ))}
          </div>
        }
      />
      <MetaBlock
        label="Platforms"
        value={
          <div className="flex flex-wrap gap-1">
            {game.parent_platforms?.map(({ platform: p }) => (
              <span
                key={p.id}
                className="text-xs px-1.5 py-0.5 rounded bg-slate-700 text-slate-300"
              >
                {p.name}
              </span>
            ))}
          </div>
        }
      />
    </div>
  );
}
