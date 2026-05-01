import { useState, useEffect } from 'react';
import type { Photo } from '@/types';
import apiClient from '@/api/client';

interface UseSeasonPhotosResult {
  photos: Photo[];
  isLoading: boolean;
  error: Error | null;
}

export function useSeasonPhotos(seasonId: string | null): UseSeasonPhotosResult {
  const [photos, setPhotos] = useState<Photo[] >([]);
  const [isLoading, setIsLoading] = useState<boolean >(true);
  const [error, setError] = useState<Error | null >(null);

  useEffect(() => {
    if (!seasonId) {
      setPhotos([]);
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);
      setPhotos([]); // Clear previous photos
      try {
        const data = await apiClient.get<Photo[] >(`/seasons/${seasonId}/photos`);
        if (isMounted) {
          setPhotos(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, [seasonId]);

  return { photos, isLoading, error };
}
