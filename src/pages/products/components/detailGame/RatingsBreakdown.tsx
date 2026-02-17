import { RawgRating } from "../../../../api/rawg/types";

interface RatingsBreakdownProps {
  ratings: RawgRating[];
  ratingsCount: number;
}

const RATING_COLOR: Record<string, string> = {
  exceptional: "bg-emerald-500",
  recommended: "bg-blue-500",
  meh: "bg-yellow-500",
  skip: "bg-red-500",
};

export function RatingsBreakdown({
  ratings,
  ratingsCount,
}: RatingsBreakdownProps) {
  if (ratings.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
        <span>★</span>
        <span>Player Ratings</span>
        <span className="text-sm text-slate-500 font-normal">
          ({ratingsCount.toLocaleString()} ratings)
        </span>
      </h2>
      <div className="space-y-2.5">
        {ratings.map((r) => (
          <div key={r.id} className="flex items-center gap-3">
            <span className="text-xs text-slate-400 w-24 capitalize">
              {r.title}
            </span>
            <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className={`h-2 rounded-full transition-all duration-700 ${RATING_COLOR[r.title] ?? "bg-slate-500"}`}
                style={{ width: `${r.percent}%` }}
              />
            </div>
            <span className="text-xs text-slate-500 w-10 text-right">
              {r.percent.toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
