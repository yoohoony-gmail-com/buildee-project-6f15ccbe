import type { Season, Photo } from '../types';

export const MOCK_SEASONS: Season[] = [
  {
    id: 'autumn-in-seoul',
    title: 'Autumn in Seoul',
    description: 'Capturing the vibrant colors of Seoul during the fall season.',
    coverPhotoUrl: '/photos/autumn-01.jpg',
  },
  {
    id: 'tokyo-nights',
    title: 'Tokyo Nights',
    description: 'The electrifying energy of Tokyo after dark.',
    coverPhotoUrl: '/photos/tokyo-01.jpg',
  },
];

export const MOCK_PHOTOS: Photo[] = [
  // Photos for 'Autumn in Seoul'
  {
    id: 'p01',
    seasonId: 'autumn-in-seoul',
    title: 'Gyeongbok Palace Maple',
    description: 'A fiery red maple tree standing guard at the palace entrance.',
    url: '/photos/autumn-01.jpg',
    details: {
      camera: 'Sony A7 III',
      lens: 'FE 24-70mm F2.8 GM',
      iso: 100,
      aperture: 'f/8',
      shutterSpeed: '1/125s',
    },
    order: 1,
  },
  {
    id: 'p02',
    seasonId: 'autumn-in-seoul',
    title: 'Namsan Tower Sunset',
    description: 'The city bathed in the warm glow of an autumn sunset, viewed from Namsan.',
    url: '/photos/autumn-02.jpg',
    details: {
      camera: 'Sony A7 III',
      lens: 'FE 70-200mm F2.8 GM',
      iso: 200,
      aperture: 'f/11',
      shutterSpeed: '1/250s',
    },
    order: 2,
  },
  {
    id: 'p03',
    seasonId: 'autumn-in-seoul',
    title: 'Samcheong-dong Alley',
    description: 'A quiet alleyway lined with ginkgo trees, their leaves a brilliant yellow.',
    url: '/photos/autumn-03.jpg',
    details: {
      camera: 'Sony A7 III',
      lens: 'FE 35mm F1.4 GM',
      iso: 400,
      aperture: 'f/2.8',
      shutterSpeed: '1/100s',
    },
    order: 3,
  },

  // Photos for 'Tokyo Nights'
  {
    id: 'p04',
    seasonId: 'tokyo-nights',
    title: 'Shibuya Crossing',
    description: 'The iconic scramble of Shibuya, a river of light and people.',
    url: '/photos/tokyo-01.jpg',
    details: {
      camera: 'Canon EOS R5',
      lens: 'RF 15-35mm F2.8 L IS USM',
      iso: 1600,
      aperture: 'f/4',
      shutterSpeed: '1/60s',
    },
    order: 1,
  },
  {
    id: 'p05',
    seasonId: 'tokyo-nights',
    title: 'Shinjuku Gyoen Lanterns',
    description: 'Paper lanterns casting a soft, warm light in the tranquil Shinjuku Gyoen.',
    url: '/photos/tokyo-02.jpg',
    details: {
      camera: 'Canon EOS R5',
      lens: 'RF 50mm F1.2 L USM',
      iso: 800,
      aperture: 'f/1.8',
      shutterSpeed: '1/80s',
    },
    order: 2,
  },
  {
    id: 'p06',
    seasonId: 'tokyo-nights',
    title: 'Omoide Yokocho',
    description: 'Steam and smoke rise from the tiny yakitori stalls of "Piss Alley".',
    url: '/photos/tokyo-03.jpg',
    details: {
      camera: 'Canon EOS R5',
      lens: 'RF 24-70mm F2.8 L IS USM',
      iso: 3200,
      aperture: 'f/2.8',
      shutterSpeed: '1/125s',
    },
    order: 3,
  },
];
