import { calculateProfileScore, getFollowerTier } from '@/lib/scoring';

export const rawProfiles = [
  { username: 'travelwithnavi', name: 'Navi Jay', category: 'Travel', country: 'Sri Lanka', followers: 84200, avgLikes: 4380, avgComments: 146, avgReach: 36800, followerGrowth30d: 5200, postsLast30d: 18, audienceQualityEstimate: 86 },
  { username: 'fitwithmaya', name: 'Maya Perera', category: 'Fitness', country: 'Sri Lanka', followers: 57600, avgLikes: 2810, avgComments: 96, avgReach: 25100, followerGrowth30d: 2800, postsLast30d: 22, audienceQualityEstimate: 82 },
  { username: 'ceylonfoodie', name: 'Ceylon Foodie', category: 'Food', country: 'Sri Lanka', followers: 128000, avgLikes: 5200, avgComments: 210, avgReach: 48100, followerGrowth30d: 6100, postsLast30d: 16, audienceQualityEstimate: 78 },
  { username: 'stylebyanika', name: 'Anika Silva', category: 'Fashion', country: 'Sri Lanka', followers: 39200, avgLikes: 1760, avgComments: 82, avgReach: 16400, followerGrowth30d: 1800, postsLast30d: 14, audienceQualityEstimate: 74 },
  { username: 'techlkdaily', name: 'Tech LK Daily', category: 'Technology', country: 'Sri Lanka', followers: 94000, avgLikes: 3190, avgComments: 188, avgReach: 31500, followerGrowth30d: 7700, postsLast30d: 25, audienceQualityEstimate: 84 },
  { username: 'beautybytara', name: 'Tara Beauty', category: 'Beauty', country: 'Sri Lanka', followers: 22300, avgLikes: 1310, avgComments: 54, avgReach: 11200, followerGrowth30d: 1300, postsLast30d: 20, audienceQualityEstimate: 88 }
];

export const profiles = rawProfiles.map((profile) => ({
  ...profile,
  tier: getFollowerTier(profile.followers),
  score: calculateProfileScore(profile)
}));

export const growthSeries = [
  { day: 'Apr 22', followers: 79000, reach: 30200 },
  { day: 'Apr 27', followers: 80300, reach: 32800 },
  { day: 'May 02', followers: 81600, reach: 34100 },
  { day: 'May 07', followers: 82900, reach: 35200 },
  { day: 'May 12', followers: 83700, reach: 36100 },
  { day: 'May 17', followers: 84200, reach: 36800 }
];

export const topPosts = [
  { title: 'Hidden beaches in Trincomalee', type: 'Reel', likes: 7600, comments: 220, reach: 64200 },
  { title: '48 hours in Ella', type: 'Carousel', likes: 6100, comments: 180, reach: 50800 },
  { title: 'Budget travel guide: Galle', type: 'Post', likes: 4800, comments: 126, reach: 39400 }
];
