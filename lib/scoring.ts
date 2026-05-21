export type ProfileMetricInput = {
  followers: number;
  avgLikes: number;
  avgComments: number;
  avgReach?: number;
  followerGrowth30d?: number;
  postsLast30d: number;
  audienceQualityEstimate?: number;
};

const clamp = (value: number, min = 0, max = 100) => Math.max(min, Math.min(max, value));

export function calculateProfileScore(input: ProfileMetricInput) {
  const engagementRate = input.followers ? ((input.avgLikes + input.avgComments) / input.followers) * 100 : 0;
  const engagementScore = clamp(engagementRate * 12);

  const growthRate = input.followers && input.followerGrowth30d !== undefined ? (input.followerGrowth30d / input.followers) * 100 : 0;
  const growthScore = clamp(growthRate * 20);

  const reachRate = input.avgReach && input.followers ? (input.avgReach / input.followers) * 100 : engagementScore * 0.75;
  const reachScore = clamp(reachRate);

  const consistencyScore = clamp((input.postsLast30d / 20) * 100);
  const audienceQualityScore = clamp(input.audienceQualityEstimate ?? 60);

  const totalScore =
    engagementScore * 0.3 +
    growthScore * 0.2 +
    reachScore * 0.2 +
    consistencyScore * 0.15 +
    audienceQualityScore * 0.15;

  return {
    totalScore: Math.round(totalScore),
    engagementScore: Math.round(engagementScore),
    growthScore: Math.round(growthScore),
    reachScore: Math.round(reachScore),
    consistencyScore: Math.round(consistencyScore),
    audienceQualityScore: Math.round(audienceQualityScore),
    engagementRate: Number(engagementRate.toFixed(2)),
    reachRate: Number(reachRate.toFixed(2))
  };
}

export function getFollowerTier(followers: number) {
  if (followers < 10000) return 'Nano';
  if (followers < 100000) return 'Micro';
  if (followers < 500000) return 'Mid';
  if (followers < 1000000) return 'Macro';
  return 'Mega';
}
