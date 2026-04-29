'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@nipsys/lsd';
import {
  ArrowSquareOut,
  ChartLine,
  ChatCircleText,
  Crown,
  GitFork,
  SortAscending as Sort,
  Star,
  Trophy,
} from '@phosphor-icons/react';
import { useState } from 'react';
import { type Platform, platforms } from '@/data/platforms';

export default function CreativeLeaderboardPage() {
  const [sortBy, setSortBy] = useState<'rank' | 'stars' | 'top5'>('rank');

  const getPlatforms = () => {
    switch (sortBy) {
      case 'stars':
        return [...platforms].sort((a, b) => b.stars - a.stars);
      case 'top5':
        return platforms.slice(0, 5);
      default:
        return platforms;
    }
  };

  const sortedPlatforms = getPlatforms();
  const totalStars = platforms.reduce((sum, p) => sum + p.stars, 0);
  const totalForks = platforms.reduce((sum, p) => sum + p.forks, 0);

  return (
    <main className="w-full min-h-screen bg-[var(--lsd-background)] p-[var(--lsd-spacing-large)]">
      {/* Full-width Hero Section - Champion */}
      <section className="w-full mb-[var(--lsd-spacing-large)]">
        <Card className="w-full border-l-4 border-l-[var(--lsd-primary)]">
          <CardContent className="p-[var(--lsd-spacing-large)]">
            <div className="flex items-start justify-between gap-[var(--lsd-spacing-large)] mb-[var(--lsd-spacing-base)]">
              <div className="flex-1">
                <div className="flex items-center gap-[var(--lsd-spacing-sm)] mb-[var(--lsd-spacing-small)]">
                  <Trophy size={32} className="text-[var(--lsd-warning)]" />
                  <Badge variant="filled" className="text-[var(--lsd-spacing-base)]">
                    #1 Champion Platform
                  </Badge>
                  <Badge variant="dot">{platforms[0].language}</Badge>
                </div>
                <h1 className="font-[var(--font-display)] text-5xl md:text-7xl font-black text-[var(--lsd-text-primary)] mb-[var(--lsd-spacing-base)]">
                  {platforms[0].name}
                </h1>
                <p className="text-lg text-[var(--lsd-text-secondary)] max-w-3xl mb-[var(--lsd-spacing-large)]">
                  {platforms[0].description}
                </p>
              </div>
              <div className="flex flex-col gap-[var(--lsd-spacing-base)] text-right min-w-[200px]">
                <StatCard
                  label="GitHub Stars"
                  value={platforms[0].stars.toLocaleString()}
                  icon={<Star size={28} />}
                  color="text-[var(--lsd-primary)]"
                />
                <StatCard
                  label="Forks"
                  value={platforms[0].forks.toLocaleString()}
                  icon={<GitFork size={28} />}
                  color="text-blue-500"
                />
                <StatCard
                  label="Channels"
                  value={platforms[0].channelCount.toString()}
                  icon={<ChatCircleText size={28} />}
                  color="text-green-500"
                />
              </div>
            </div>

            {/* Stats Overview Bar */}
            <div className="flex gap-[var(--lsd-spacing-small)] flex-wrap">
              <Badge variant="outlined" className="text-[var(--lsd-spacing-base)]">
                Total Platforms: {platforms.length}
              </Badge>
              <Badge variant="outlined" className="text-[var(--lsd-spacing-base)]">
                Total Stars: {totalStars.toLocaleString()}
              </Badge>
              <Badge variant="outlined" className="text-[var(--lsd-spacing-base)]">
                Total Forks: {totalForks.toLocaleString()}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="mb-[var(--lsd-spacing-large)]" />

      {/* Tabs for View Switching */}
      <section className="w-full mb-[var(--lsd-spacing-large)]">
        <Tabs
          defaultValue="rank"
          onValueChange={value => setSortBy(value as 'rank' | 'stars' | 'top5')}
        >
          <TabsList className="w-full justify-start">
            <TabsTrigger value="rank" className="flex items-center gap-[var(--lsd-spacing-small)]">
              <ChartLine size={20} />
              By Rank
            </TabsTrigger>
            <TabsTrigger value="stars" className="flex items-center gap-[var(--lsd-spacing-small)]">
              <Star size={20} />
              By Stars
            </TabsTrigger>
            <TabsTrigger value="top5" className="flex items-center gap-[var(--lsd-spacing-small)]">
              <Trophy size={20} />
              Top 5
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rank">
            <RankingList platforms={platforms.slice(1)} />
          </TabsContent>
          <TabsContent value="stars">
            <RankingList platforms={sortedPlatforms} />
          </TabsContent>
          <TabsContent value="top5">
            <RankingList platforms={sortedPlatforms.slice(1)} />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div className="flex items-center gap-[var(--lsd-spacing-sm)] justify-end">
      <div className={`${color}`}>{icon}</div>
      <div>
        <div className="text-sm text-[var(--lsd-text-secondary)]">{label}</div>
        <div className="font-[var(--font-display)] text-2xl font-bold text-[var(--lsd-text-primary)]">
          {value}
        </div>
      </div>
    </div>
  );
}

function RankingList({ platforms: platformList }: { platforms: Platform[] }) {
  return (
    <section className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <div className="grid gap-[var(--lsd-spacing-large)]">
          {platformList.map((platform, index) => (
            <PlatformAccordion key={platform.rank} platform={platform} index={index} />
          ))}
        </div>
      </Accordion>
    </section>
  );
}

function PlatformAccordion({ platform, index }: { platform: Platform; index: number }) {
  const globalRank = index + 2;
  const isPodium = globalRank <= 3;
  const tier = getPlatformTier(globalRank);

  return (
    <AccordionItem value={platform.name}>
      <Card className={tier.borderColor}>
        <AccordionTrigger className="w-full px-[var(--lsd-spacing-large)] py-[var(--lsd-spacing-base)]">
          <div className="flex items-start gap-[var(--lsd-spacing-base)] flex-1">
            {/* Rank Badge */}
            <div className={`min-w-[80px] ${tier.rankColor}`}>
              <Badge
                variant={isPodium ? 'filled' : 'outlined'}
                className="text-[var(--lsd-spacing-base)]"
              >
                #{globalRank}
                {isPodium && <Crown size={16} className="ml-[var(--lsd-spacing-xs)]" />}
              </Badge>
            </div>

            {/* Platform Info */}
            <div className="flex-1">
              <div className="flex items-center gap-[var(--lsd-spacing-small)] mb-[var(--lsd-spacing-xs)]">
                <h3 className={`font-[var(--font-display)] text-2xl font-bold ${tier.textColor}`}>
                  {platform.name}
                </h3>
                <Badge variant="dot">{platform.language}</Badge>
              </div>
              <p className="text-sm text-[var(--lsd-text-secondary)] line-clamp-2">
                {platform.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-[var(--lsd-spacing-base)] min-w-[200px]">
              <QuickStat
                label="Stars"
                value={platform.stars.toLocaleString()}
                icon={<Star size={18} weight="fill" />}
              />
              <QuickStat
                label="Forks"
                value={platform.forks.toLocaleString()}
                icon={<GitFork size={18} />}
              />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-[var(--lsd-spacing-large)] pb-[var(--lsd-spacing-large)]">
          <div className="grid gap-[var(--lsd-spacing-base)]">
            {/* Detailed Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--lsd-spacing-base)]">
              <DetailCard
                label="GitHub Stars"
                value={platform.stars.toLocaleString()}
                icon={<Star size={24} />}
              />
              <DetailCard
                label="Forks"
                value={platform.forks.toLocaleString()}
                icon={<GitFork size={24} />}
              />
              <DetailCard
                label="Contributors"
                value={(platform.stars / 10).toFixed(0)}
                icon={<Sort size={24} />}
              />
              <DetailCard
                label="Channels"
                value={platform.channelCount.toString()}
                icon={<ChatCircleText size={24} />}
              />
            </div>

            {/* Channel Tags */}
            <div>
              <div className="text-sm text-[var(--lsd-text-secondary)] mb-[var(--lsd-spacing-xs)]">
                Supported Channels
              </div>
              <div className="flex gap-[var(--lsd-spacing-xs)] flex-wrap">
                {platform.channels.map(channel => (
                  <Badge key={channel} variant="outlined">
                    {channel}
                  </Badge>
                ))}
                {platform.channelCount > platform.channels.length && (
                  <Badge variant="outlined">
                    +{platform.channelCount - platform.channels.length} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-end">
              <Button variant="outlined" asChild>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-[var(--lsd-spacing-small)]"
                >
                  View Repository
                  <ArrowSquareOut size={20} />
                </a>
              </Button>
            </div>
          </div>
        </AccordionContent>
      </Card>
    </AccordionItem>
  );
}

function QuickStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="text-right">
      <div className="flex items-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-primary)] justify-end">
        {icon}
        <span className="font-[var(--font-display)] text-lg font-bold">{value}</span>
      </div>
      <div className="text-xs text-[var(--lsd-text-secondary)] capitalize">{label}</div>
    </div>
  );
}

function DetailCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[var(--lsd-spacing-small)] p-[var(--lsd-spacing-base)] border border-[var(--lsd-border)] rounded">
      <div className="text-[var(--lsd-primary)]">{icon}</div>
      <div>
        <div className="font-[var(--font-display)] text-lg font-bold text-[var(--lsd-text-primary)]">
          {value}
        </div>
        <div className="text-xs text-[var(--lsd-text-secondary)]">{label}</div>
      </div>
    </div>
  );
}

function getPlatformTier(rank: number) {
  if (rank === 2) {
    return {
      borderColor: 'border-2 border-yellow-400',
      textColor: 'text-yellow-700',
      rankColor: 'text-yellow-600',
    };
  }
  if (rank === 3) {
    return {
      borderColor: 'border-2 border-orange-400',
      textColor: 'text-orange-700',
      rankColor: 'text-orange-600',
    };
  }
  if (rank <= 5) {
    return {
      borderColor: 'border-[var(--lsd-border)]',
      textColor: 'text-[var(--lsd-text-primary)]',
      rankColor: 'text-[var(--lsd-text-secondary)]',
    };
  }
  return {
    borderColor: 'border-transparent',
    textColor: 'text-[var(--lsd-text-primary)]',
    rankColor: 'text-[var(--lsd-text-secondary)]',
  };
}
