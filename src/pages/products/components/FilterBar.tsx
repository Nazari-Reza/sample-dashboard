import { useMemo } from "react";
import SearchBar from "../../../components/ui/SearchBar";

import { OrderSelect } from "./OrderSelect";
import { RawgFilterOption } from "../../../api/rawg/types";
import MultiSelect, { SelectGroup } from "./multiselect";

interface FilterBarProps {
  search: string;
  genres: RawgFilterOption[];
  platforms: RawgFilterOption[];
  tags: RawgFilterOption[];
  ordering: string;
  selectedGenres: RawgFilterOption[];
  selectedPlatforms: RawgFilterOption[];
  selectedTags: RawgFilterOption[];
  onSearchChange: (v: string) => void;
  onGenresChange: (v: RawgFilterOption[]) => void;
  onPlatformsChange: (v: RawgFilterOption[]) => void;
  onTagsChange: (v: RawgFilterOption[]) => void;
  onOrderingChange: (v: string) => void;
  filtersLoading: boolean;
}

export function FilterBar({
  search,
  genres,
  platforms,
  tags,
  ordering,
  selectedGenres,
  selectedPlatforms,
  selectedTags,
  onSearchChange,
  onGenresChange,
  onPlatformsChange,
  onTagsChange,
  onOrderingChange,
  filtersLoading,
}: FilterBarProps) {
  const tagGroups: SelectGroup[] = useMemo(
    () => [
      { label: "Popular", items: tags.slice(0, 15) },
      { label: "Others", items: tags.slice(15) },
    ],
    [tags],
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
      <div className="mb-6">
        <SearchBar
          value={search}
          onChange={onSearchChange}
          placeholder="Search games by name…"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 mt-6">
        <div className="relative pt-5">
          <MultiSelect
            label="Genres"
            placeholder="All genres"
            options={genres}
            value={selectedGenres}
            onChange={onGenresChange}
            disabled={filtersLoading}
          />
        </div>

        <div className="relative pt-5">
          <MultiSelect
            label="Platforms"
            placeholder="All platforms"
            options={platforms}
            value={selectedPlatforms}
            onChange={onPlatformsChange}
            disabled={filtersLoading}
          />
        </div>

        <div className="relative pt-5">
          <MultiSelect
            label="Tags"
            placeholder="All tags"
            options={tags}
            groups={tagGroups}
            value={selectedTags}
            onChange={onTagsChange}
            disabled={filtersLoading}
          />
        </div>

        <OrderSelect value={ordering} onChange={onOrderingChange} />
      </div>
    </div>
  );
}
