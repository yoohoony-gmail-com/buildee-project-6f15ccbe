import { MOCK_SEASONS, MOCK_PHOTOS } from './mockData';

const SIMULATED_DELAY_MS = 500;

// A simple regex to parse /seasons/:id/photos
const seasonPhotosRegex = /^\/seasons\/([^/]+)\/photos$/;

const apiClient = {
  get: <T>(endpoint: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`[API MOCK] GET ${endpoint}`);
        if (endpoint === '/seasons') {
          resolve(MOCK_SEASONS as T);
          return;
        }

        const seasonPhotosMatch = endpoint.match(seasonPhotosRegex);
        if (seasonPhotosMatch) {
          const seasonId = seasonPhotosMatch[1];
          const photos = MOCK_PHOTOS.filter(p => p.seasonId === seasonId);
          
          const seasonExists = MOCK_SEASONS.some(s => s.id === seasonId);
          if (seasonExists) {
            resolve(photos as T);
          } else {
            reject(new Error(`Not Found: Season with id "${seasonId}" does not exist.`));
          }
          return;
        }

        reject(new Error(`Not Found: No mock data for endpoint "${endpoint}"`));
      }, SIMULATED_DELAY_MS);
    });
  },
};

export default apiClient;