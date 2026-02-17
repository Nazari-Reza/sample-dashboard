import { useState, useEffect } from "react";
import { apiGetGameDetail } from "../api/rawg";
import { RawgGameDetail } from "../api/rawg/types";

export function useGameDetail(id: string | undefined) {
  const [game, setGame] = useState<RawgGameDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    apiGetGameDetail(id)
      .then(({ data }) => setGame(data))
      .catch(() => setError("Game not found."))
      .finally(() => setLoading(false));
  }, [id]);

  return { game, loading, error };
}
