import useGames from "../../hooks/useGames";
import useFilterOptions from "../../hooks/useFilterOptions";
import Pagination from "../../components/ui/Pagination";
import { PageHeader } from "./components/PageHeader";
import { FilterBar } from "./components/FilterBar";
import { GameGrid } from "./components/GameGrid";

const Products = () => {
  const {
    games,
    total,
    page,
    totalPages,
    filters,
    loading,
    error,
    goToPage,
    updateFilter,
    resetFilters,
    activeCount,
    PAGE_SIZE,
  } = useGames();

  const {
    genres,
    platforms,
    tags,
    loading: filtersLoading,
  } = useFilterOptions();

  return (
    <div className="space-y-6">
      <PageHeader
        total={total}
        activeCount={activeCount}
        onResetFilters={resetFilters}
      />

      <FilterBar
        search={filters.search}
        genres={genres}
        platforms={platforms}
        tags={tags}
        ordering={filters.ordering}
        selectedGenres={filters.genres}
        selectedPlatforms={filters.platforms}
        selectedTags={filters.tags}
        onSearchChange={(v) => updateFilter("search", v)}
        onGenresChange={(v) => updateFilter("genres", v)}
        onPlatformsChange={(v) => updateFilter("platforms", v)}
        onTagsChange={(v) => updateFilter("tags", v)}
        onOrderingChange={(v) => updateFilter("ordering", v)}
        filtersLoading={filtersLoading}
      />

      <GameGrid
        games={games}
        loading={loading}
        error={error}
        pageSize={PAGE_SIZE}
        onResetFilters={resetFilters}
      />

      {!loading && totalPages > 1 && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={goToPage}
            totalItems={total}
            pageSize={PAGE_SIZE}
          />
        </div>
      )}
    </div>
  );
};

export default Products;
