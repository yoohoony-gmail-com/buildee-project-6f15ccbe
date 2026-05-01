import { useState, useEffect } from 'react';
import { Photo } from '../types';
import { getPhotosBySeason } from '../api';

type PhotosState = Photo[];
type IsLoadingState = boolean;
type ErrorState = Error | null;

export function usePhotos(seasonId: string | undefined) {
  const [photos, setPhotos] = useState<PhotosState>([]);
  const [isLoading, setIsLoading] = useState<IsLoadingState>(true);
  const [error, setError] = useState<ErrorState>(null);

  useEffect(() => {
    if (!seasonId) {
      setPhotos([]);
      setIsLoading(false);
      return;
    }

    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getPhotosBySeason(seasonId);
        setPhotos(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred while fetching photos'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [seasonId]);

  return { photos, isLoading, error };
}
