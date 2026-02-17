import { RawgTag } from "../../../../api/rawg/types";

interface GameTagsProps {
  tags: RawgTag[];
}

export function GameTags({ tags }: GameTagsProps) {
  const englishTags = tags.filter((t) => t.language === "eng").slice(0, 30);

  if (englishTags.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-base font-semibold text-white mb-4">Tags</h2>
      <div className="flex flex-wrap gap-1.5">
        {englishTags.map((tag) => (
          <span
            key={tag.id}
            className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 border border-slate-700"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
