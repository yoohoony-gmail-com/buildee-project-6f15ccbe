/**
 * A collection of photos, like an album or an exhibition.
 */
export interface Season {
  id: string;
  title: string;
  description: string;
  /**
   * A representative photo for the season.
   */
  coverPhotoUrl: string;
}

/**
 * A single photo or artwork.
 */
export interface Photo {
  id: string;
  seasonId: string;
  title: string;
  description: string;
  url: string;
  /**
   * EXIF data or similar details.
   */
  details: {
    camera?: string;
    lens?: string;
    iso?: number;
    aperture?: string;
    shutterSpeed?: string;
  };
  /**
   * The order in which it appears in a season.
   */
  order: number;
}