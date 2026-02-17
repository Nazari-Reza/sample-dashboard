import { useNavigate, useParams } from "react-router-dom";
import { useGameDetail } from "../../../../hooks/useGameDetail";
import { GameDetailSkeleton } from "./GameDetailSkeleton";
import { GameDetailError } from "./GameDetailError";
import { GameHero } from "./GameHero";
import { RatingsBreakdown } from "./RatingsBreakdown";
import { MetaGrid } from "./MetaGrid";
import { StoreLinks } from "./StoreLinks";
import { GameDescription } from "./GameDescription";
import { GameTags } from "./GameTags";

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { game, loading, error } = useGameDetail(id);

  if (loading) return <GameDetailSkeleton />;
  if (error || !game)
    return <GameDetailError message={error} onBack={() => navigate(-1)} />;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          ←
        </span>
        Back to games
      </button>

      <GameHero game={game} />

      <RatingsBreakdown
        ratings={game.ratings}
        ratingsCount={game.ratings_count}
      />

      <MetaGrid game={game} />

      <StoreLinks stores={game.stores ?? []} />

      <GameDescription description={game.description_raw} />

      <GameTags tags={game.tags ?? []} />
    </div>
  );
};

export default GameDetails;
