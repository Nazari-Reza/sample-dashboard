import GameCard from "../../../components/ui/GameCard";
import { GameGridSkeleton } from "./GameGridSkeleton";
import { EmptyState } from "./EmptyState";
import { RawgGame } from "../../../api/rawg/types";

interface GameGridProps {
  games: RawgGame[];
  loading: boolean;
  error: string | null;
  pageSize: number;
  onResetFilters: () => void;
}

export function GameGrid({
  games,
  loading,
  error,
  pageSize,
  onResetFilters,
}: GameGridProps) {
  if (error) {
    return <div className="text-center py-20 text-red-400">{error}</div>;
  }

  if (loading) {
    return <GameGridSkeleton count={pageSize} />;
  }

  if (games.length === 0) {
    return <EmptyState onResetFilters={onResetFilters} />;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
