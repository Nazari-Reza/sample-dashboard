import { useState, useEffect, useCallback, useRef } from "react";
import { apiGetGames } from "../api/rawg";
import { GamesFilters, RawgGame } from "../api/rawg/types";

const PAGE_SIZE = 10;

const DEFAULT_FILTERS: GamesFilters = {
  search: "",
  genres: [],
  platforms: [],
  tags: [],
  ordering: "-rating",
};

const useGames = () => {
  const [games, setGames] = useState<RawgGame[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<GamesFilters>(DEFAULT_FILTERS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Debounce search to avoid firing on every keystroke
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fetchGames = useCallback(async (p: number, f: GamesFilters) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await apiGetGames(p, PAGE_SIZE, f);
      setGames(data.results);
      setTotal(data.count);
    } catch {
      setError("Failed to load games. Check your API key or network.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames(page, filters);
  }, [page, filters, fetchGames]);

  const goToPage = (p: number) => setPage(p);

  const updateFilter = <K extends keyof GamesFilters>(
    key: K,
    value: GamesFilters[K],
  ) => {
    if (key === "search") {
      if (searchTimer.current) clearTimeout(searchTimer.current);
      searchTimer.current = setTimeout(() => {
        setPage(1);
        setFilters((prev) => ({ ...prev, search: value as string }));
      }, 400);
    } else {
      setPage(1);
      setFilters((prev) => ({ ...prev, [key]: value }));
    }
  };

  const resetFilters = () => {
    setPage(1);
    setFilters(DEFAULT_FILTERS);
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);
  const activeCount =
    filters.genres.length +
    filters.platforms.length +
    filters.tags.length +
    (filters.search ? 1 : 0) +
    (filters.ordering !== "-rating" ? 1 : 0);

  return {
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
  };
};
export default useGames;
