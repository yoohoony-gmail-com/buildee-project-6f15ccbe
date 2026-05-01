import { Season, Photo } from '../types';
import { SEASONS, PHOTOS } from './mock';

const MOCK_DELAY = 500; // ms

/**
 * Fetches a list of all seasons.
 */
export const getSeasons = (): Promise<Season[] > => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(SEASONS);
    }, MOCK_DELAY);
  });
};

/**
 * Fetches a single season by its ID.
 */
export const getSeasonById = (id: string): Promise<Season | undefined > => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const season = SEASONS.find(s => s.id === id);
            resolve(season);
        }, MOCK_DELAY);
    });
};

/**
 * Fetches all photos belonging to a specific season, sorted by order.
 */
export const getPhotosBySeason = (seasonId: string): Promise<Photo[] > => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const photos = PHOTOS.filter((photo) => photo.seasonId === seasonId).sort(
        (a, b) => a.order - b.order
      );
      resolve(photos);
    }, MOCK_DELAY);
  });
};
