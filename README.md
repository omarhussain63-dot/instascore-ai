# InstaScore AI — Instagram Profile Scoring Platform

A deploy-ready MVP for scoring and ranking Instagram creator/business profiles.

## What is included

- Next.js product landing page
- Creator dashboard
- Public profile analytics page
- Creator rankings page
- Profile scoring engine
- Mock creator dataset
- API routes:
  - `GET /api/profiles/:username`
  - `GET /api/rankings?category=Travel&country=Sri Lanka&tier=Micro`
- PostgreSQL Prisma schema
- Dockerfile
- Meta API environment placeholders
- Static dummy demo in `/public/demo.html`

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production deployment

### Vercel

1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

### Docker

```bash
docker build -t instascore-ai .
docker run -p 3000:3000 instascore-ai
```

## Instagram data strategy

This product is designed for compliant analytics:

- Use official Meta/Instagram APIs.
- Ask creators to connect professional accounts.
- Use Business Discovery where approved for public professional accounts.
- Do not scrape private data.
- Do not promise exact fake-follower detection.

## Scoring formula

```text
Total Score =
  30% Engagement
+ 20% Growth
+ 20% Reach
+ 15% Consistency
+ 15% Audience Quality Estimate
```

## Next production tasks

1. Add real authentication.
2. Complete Meta OAuth flow.
3. Encrypt and rotate access tokens.
4. Replace mock profiles with database-backed profiles.
5. Add daily jobs for metric snapshots.
6. Add billing and admin moderation.
7. Submit app for Meta App Review.
