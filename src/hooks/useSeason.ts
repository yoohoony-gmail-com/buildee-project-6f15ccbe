import { useState, useEffect } from 'react';
import { Season } from '../types';
import { getSeasonById } from '../api';

/**
 * A custom hook to fetch a single season by its ID.
 * @param seasonId The ID of the season to fetch.
 * @returns An object containing the season, loading state, and any errors.
 */
export function useSeason(seasonId: string | undefined) {
  const [season, setSeason] = useState<Season | null >(null);
  const [isLoading, setIsLoading] = useState<boolean >(true);
  const [error, setError] = useState<Error | null >(null);

  useEffect(() => {
    if (!seasonId) {
      setSeason(null);
      setIsLoading(false);
      return;
    }

    const fetchSeason = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getSeasonById(seasonId);
        if (data) {
            setSeason(data);
        } else {
            setError(new Error('Season not found'));
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching the season'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchSeason();
  }, [seasonId]);

  return { season, isLoading, error };
}
