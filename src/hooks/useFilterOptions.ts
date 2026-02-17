import { useState, useEffect } from "react";
import { apiGetGenres, apiGetPlatforms, apiGetTags } from "../api/rawg";
import { RawgFilterOption } from "../api/rawg/types";

export interface FilterOptions {
  genres: RawgFilterOption[];
  platforms: RawgFilterOption[];
  tags: RawgFilterOption[];
  loading: boolean;
}

const useFilterOptions = (): FilterOptions => {
  const [genres, setGenres] = useState<RawgFilterOption[]>([]);
  const [platforms, setPlatforms] = useState<RawgFilterOption[]>([]);
  const [tags, setTags] = useState<RawgFilterOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([apiGetGenres(), apiGetPlatforms(), apiGetTags()])
      .then(([g, p, t]) => {
        setGenres(g.data.results);
        setPlatforms(p.data.results);
        setTags(t.data.results);
      })
      .finally(() => setLoading(false));
  }, []);

  return { genres, platforms, tags, loading };
};

export default useFilterOptions;
