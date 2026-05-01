import { MOCK_SEASONS, MOCK_PHOTOS } from './mockData';
import type { Season, Photo } from '../types';

const mockFetch = <T>(data: T, delay = 300): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(data), delay));

const mockFetchWithError = <T>(message: string, status: number, delay = 300): Promise<T> =>
  new Promise((_, reject) =>
    setTimeout(() => {
      const error = new Error(message) as Error & { status?: number };
      error.status = status;
      reject(error);
    }, delay)
  );

export const galleryApi = {
  async getSeasons(options?: { signal?: AbortSignal }): Promise<Season[]> {
    console.log('[API] Fetching seasons...');
    if (options?.signal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }
    return mockFetch(MOCK_SEASONS);
  },

  async getPhotosBySeason(seasonId: string, options?: { signal?: AbortSignal }): Promise<Photo[]> {
    console.log(`[API] Fetching photos for season: ${seasonId}`);
    if (options?.signal?.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }

    const seasonExists = MOCK_SEASONS.some(s => s.id === seasonId);
    if (!seasonExists) {
      return mockFetchWithError(`Season with id '${seasonId}' not found.`, 404);
    }

    const photos = MOCK_PHOTOS.filter(photo => photo.seasonId === seasonId);
    return mockFetch(photos);
  },
};