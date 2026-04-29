'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from '@nipsys/lsd';
import {
  Export,
  GitFork,
  List,
  Medal,
  type Icon as PhosphorIcon,
  Star,
  Trophy,
} from '@phosphor-icons/react';
import { type Platform, platforms } from '@/data/platforms';

export default function LeaderboardCreative2() {
  // Get the top platform (#1)
  const topPlatform = platforms.find(p => p.rank === 1) || platforms[0];

  // Calculate global stats
  const totalPlatforms = platforms.length;
  const totalStars = platforms.reduce((sum, p) => sum + p.stars, 0);
  const totalForks = platforms.reduce((sum, p) => sum + p.forks, 0);

  // Filter to show all 10 platforms (skip #1 since it's shown prominently above)
  const displayPlatforms = platforms.filter(p => p.rank !== 1);

  return (
    <main className="min-h-screen bg-[var(--lsd-background)] p-[var(--lsd-spacing-largest)]">
      <div className="mx-auto max-w-7xl">
        {/* Page Container Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-[var(--lsd-spacing-small)]">
              <Trophy size={24} className="text-[var(--lsd-primary)]" weight="fill" />
              Creative Leaderboard
              <Badge variant="outlined" className="font-mono">
                v2.0
              </Badge>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-[var(--lsd-spacing-large)]">
            {/* Stats Overview Section */}
            <section>
              <div className="grid gap-[var(--lsd-spacing-base)] md:grid-cols-3">
                <StatCard label="Total Platforms" value={totalPlatforms.toString()} Icon={Trophy} />
                <StatCard label="Total Stars" value={totalStars.toLocaleString()} Icon={Star} />
                <StatCard label="Total Forks" value={totalForks.toLocaleString()} Icon={GitFork} />
              </div>
            </section>

            {/* Alert for Top Platform (#1 OpenClaw) */}
            <Alert>
              <AlertTitle className="flex items-center gap-[var(--lsd-spacing-small)]">
                <Trophy size={20} className="text-[var(--lsd-primary)]" weight="fill" />
                Champion: {topPlatform.name}
                <Badge variant="filled" className="font-bold">
                  #{topPlatform.rank}
                </Badge>
              </AlertTitle>
              <AlertDescription className="mt-[var(--lsd-spacing-base)] space-y-[var(--lsd-spacing-small)]">
                <div className="flex flex-wrap gap-[var(--lsd-spacing-base)]">
                  <div className="flex items-center gap-[var(--lsd-spacing-smallest)]">
                    <Star size={16} weight="fill" className="text-[var(--lsd-primary)]" />
                    <span className="font-mono font-bold">
                      {topPlatform.stars.toLocaleString()} stars
                    </span>
                  </div>
                  <div className="flex items-center gap-[var(--lsd-spacing-smallest)]">
                    <GitFork size={16} className="text-[var(--lsd-primary)]" />
                    <span className="font-mono font-bold">
                      {topPlatform.forks.toLocaleString()} forks
                    </span>
                  </div>
                  <div className="flex items-center gap-[var(--lsd-spacing-smallest)]">
                    <Badge variant="dot" className="font-mono text-xs">
                      {topPlatform.language}
                    </Badge>
                  </div>
                </div>
                <div className="text-[var(--lsd-text-secondary)]">{topPlatform.description}</div>
              </AlertDescription>
            </Alert>

            {/* Separator */}
            <Separator />

            {/* Platform List Grid */}
            <section>
              <div className="flex items-center gap-[var(--lsd-spacing-small)] mb-[var(--lsd-spacing-base)]">
                <List size={20} className="text-[var(--lsd-primary)]" />
                <h3 className="font-bold text-lg">Full Rankings</h3>
                <Badge variant="outlined" className="font-mono">
                  #{displayPlatforms[0]?.rank}-#{platforms[platforms.length - 1]?.rank}
                </Badge>
              </div>

              <div className="grid gap-[var(--lsd-spacing-base)] sm:grid-cols-2 lg:grid-cols-3">
                {displayPlatforms.map(platform => (
                  <PlatformCard key={platform.rank} platform={platform} />
                ))}
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

function StatCard({ label, value, Icon }: { label: string; value: string; Icon: PhosphorIcon }) {
  return (
    <Card>
      <CardContent className="pt-[var(--lsd-spacing-base)]">
        <div className="text-center space-y-[var(--lsd-spacing-small)]">
          <div className="flex justify-center text-[var(--lsd-primary)]">
            <Icon size={28} />
          </div>
          <div className="font-mono text-2xl font-bold text-[var(--lsd-text-primary)]">{value}</div>
          <div className="text-xs uppercase tracking-wider text-[var(--lsd-text-secondary)] font-medium">
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function PlatformCard({ platform }: { platform: Platform }) {
  // Determine rank badge variant
  const getRankBadgeVariant = (): 'filled' | 'outlined' | 'dot' => {
    if (platform.rank === 2) return 'filled';
    if (platform.rank === 3) return 'outlined';
    return 'outlined';
  };

  // Get rank icon for top 3 positions
  const getRankIcon = () => {
    if (platform.rank === 2) return <Medal size={16} weight="fill" className="text-white" />;
    if (platform.rank === 3) return <Medal size={16} weight="fill" />;
    return null;
  };

  return (
    <Card className="h-full">
      <CardContent className="pt-[var(--lsd-spacing-base)] space-y-[var(--lsd-spacing-base)]">
        {/* Rank Badge and Header */}
        <div className="flex items-start justify-between gap-[var(--lsd-spacing-smallest)]">
          <Badge variant={getRankBadgeVariant()} className="font-mono font-bold">
            {getRankIcon()}
            <span className="ml-1">#{platform.rank}</span>
          </Badge>
          <Badge variant="dot" className="font-mono text-xs">
            {platform.language}
          </Badge>
        </div>

        {/* Platform Name */}
        <div className="space-y-[var(--lsd-spacing-smallest)]">
          <h4 className="font-bold text-base leading-tight">{platform.name}</h4>
          <p className="text-xs text-[var(--lsd-text-secondary)] line-clamp-2">
            {platform.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-[var(--lsd-spacing-smallest)]">
          <Badge variant="outlined" className="font-mono text-xs">
            <Star size={12} weight="fill" className="mr-1 text-[var(--lsd-primary)]" />
            {platform.stars.toLocaleString()}
          </Badge>
          <Badge variant="outlined" className="font-mono text-xs">
            <GitFork size={12} className="mr-1 text-[var(--lsd-primary)]" />
            {platform.forks.toLocaleString()}
          </Badge>
        </div>

        {/* Channel Tags */}
        <div className="flex flex-wrap gap-[var(--lsd-spacing-smallest)]">
          {platform.channels.slice(0, 4).map(channel => (
            <Badge key={channel} variant="outlined" className="text-xs">
              {channel}
            </Badge>
          ))}
          {platform.channels.length > 4 && (
            <Badge variant="outlined" className="text-xs font-mono">
              +{platform.channels.length - 4}
            </Badge>
          )}
        </div>

        {/* Repository Link Badge */}
        <a href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
          <Badge
            variant="outlined"
            className="w-full justify-center cursor-pointer hover:bg-[var(--lsd-muted)] transition-colors"
          >
            <Export size={12} className="mr-1" />
            <span className="text-xs">{platform.repository}</span>
          </Badge>
        </a>
      </CardContent>
    </Card>
  );
}
