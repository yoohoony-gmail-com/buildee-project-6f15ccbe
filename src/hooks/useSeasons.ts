import { useState, useEffect } from 'react';
import { Season } from '../types';
import { getSeasons } from '../api';

type SeasonsState = Season[];
type IsLoadingState = boolean;
type ErrorState = Error | null;

export function useSeasons() {
  const [seasons, setSeasons] = useState<SeasonsState>([]);
  const [isLoading, setIsLoading] = useState<IsLoadingState>(true);
  const [error, setError] = useState<ErrorState>(null);

  useEffect(() => {
    const fetchSeasons = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getSeasons();
        setSeasons(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching seasons'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeasons();
  }, []);

  return { seasons, isLoading, error };
}
