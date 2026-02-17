import { useRef } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search..." }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
        ⌕
      </span>
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full pl-8 pr-4 py-2 text-sm
          bg-slate-700/60 border border-slate-600 rounded-lg
          text-white placeholder-slate-400
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          transition
        "
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
