import { Season, Photo } from '../types';

export const SEASONS: Season[] = [
  {
    id: 'autumn-hues',
    title: 'Autumn Hues',
    description: 'A collection of vibrant colors from a fall expedition through misty forests and sun-drenched valleys.',
    coverPhotoUrl: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=1920&h=1080&fit=crop',
  },
  {
    id: 'urban-jungle',
    title: 'Urban Jungle',
    description: 'Exploring the concrete landscapes and hidden life within the city, from towering skyscrapers to quiet alleyways.',
    coverPhotoUrl: 'https://images.unsplash.com/photo-1542973742-1615f2343452?q=80&w=1920&h=1080&fit=crop',
  },
  {
    id: 'coastal-dreams',
    title: 'Coastal Dreams',
    description: 'Serene moments captured by the endless sea, where the sky meets the ocean in a symphony of colors.',
    coverPhotoUrl: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1920&h=1080&fit=crop',
  },
];

export const PHOTOS: Photo[] = [
  // Autumn Hues
  {
    id: 'photo-1',
    seasonId: 'autumn-hues',
    title: 'Golden Leaves',
    description: 'Sunlight filtering through the canopy, setting the forest ablaze with color.',
    url: 'https://images.unsplash.com/photo-1476842634003-7dcca8f832de?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Sony A7III',
      lens: '85mm f/1.8',
      iso: 100,
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
    },
    order: 1,
  },
  {
    id: 'photo-2',
    seasonId: 'autumn-hues',
    title: 'Misty Morning',
    description: 'Fog rolling over the hills at dawn, shrouding the landscape in mystery.',
    url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Sony A7III',
      lens: '24-70mm f/2.8',
      iso: 400,
      aperture: 'f/4.0',
      shutterSpeed: '1/100s',
    },
    order: 2,
  },
  {
    id: 'photo-3',
    seasonId: 'autumn-hues',
    title: 'Forest Path',
    description: 'A quiet walk through the woods, with fallen leaves carpeting the ground.',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Sony A7III',
      lens: '24-70mm f/2.8',
      iso: 200,
      aperture: 'f/5.6',
      shutterSpeed: '1/125s',
    },
    order: 3,
  },
  // Urban Jungle
  {
    id: 'photo-4',
    seasonId: 'urban-jungle',
    title: 'City Lights',
    description: 'The city that never sleeps, viewed from a rooftop vantage point.',
    url: 'https://images.unsplash.com/photo-1542973742-1615f2343452?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Canon EOS R',
      lens: '50mm f/1.2',
      iso: 1600,
      aperture: 'f/1.8',
      shutterSpeed: '1/60s',
    },
    order: 1,
  },
  {
    id: 'photo-5',
    seasonId: 'urban-jungle',
    title: 'Subway Stories',
    description: 'Fleeting moments and diverse faces captured in the motion of the underground.',
    url: 'https://images.unsplash.com/photo-1533562238295-e35a6b063333?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Canon EOS R',
      lens: '35mm f/1.4',
      iso: 3200,
      aperture: 'f/2.0',
      shutterSpeed: '1/125s',
    },
    order: 2,
  },
  // Coastal Dreams
  {
    id: 'photo-6',
    seasonId: 'coastal-dreams',
    title: 'Sunset Wave',
    description: 'The sun dips below the horizon, painting the sky and sea in fiery hues.',
    url: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Nikon Z6',
      lens: '70-200mm f/2.8',
      iso: 100,
      aperture: 'f/8.0',
      shutterSpeed: '1/500s',
    },
    order: 1,
  },
  {
    id: 'photo-7',
    seasonId: 'coastal-dreams',
    title: 'Rocky Shore',
    description: 'Powerful waves relentlessly crashing against the ancient, steadfast rocks.',
    url: 'https://images.unsplash.com/photo-1507525428034-b723a9ce6890?q=80&w=1920&h=1080&fit=crop',
    details: {
      camera: 'Nikon Z6',
      lens: '14-30mm f/4',
      iso: 100,
      aperture: 'f/11',
      shutterSpeed: '2s',
    },
    order: 2,
  },
];