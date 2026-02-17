const ORDERING_OPTIONS = [
  { value: "-rating", label: "Rating (High → Low)" },
  { value: "rating", label: "Rating (Low → High)" },
  { value: "-metacritic", label: "Metacritic" },
  { value: "-released", label: "Release Date" },
  { value: "-added", label: "Popularity" },
  { value: "name", label: "Name (A → Z)" },
];

interface OrderSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function OrderSelect({ value, onChange }: OrderSelectProps) {
  return (
    <div className="relative pt-5">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1 absolute -top-0 left-0">
        Sort By
      </p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-3 py-2 rounded-xl text-sm
          bg-slate-800 border border-slate-700 text-slate-300
          focus:outline-none focus:ring-1 focus:ring-indigo-500
          cursor-pointer hover:border-slate-500 transition
        "
      >
        {ORDERING_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
