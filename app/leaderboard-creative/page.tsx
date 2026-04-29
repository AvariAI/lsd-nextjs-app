'use client';

import { Button } from '@nipsys/lsd';
import {
  ArrowSquareOut,
  ChatCircleText,
  Crown,
  GitFork,
  type Icon as PhosphorIcon,
  Star,
  TrendUp,
} from '@phosphor-icons/react';
import { type Platform, platforms } from '@/data/platforms';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-[var(--lsd-background)] p-[var(--lsd-spacing-largest)] overflow-hidden">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `
          linear-gradient(to right, var(--lsd-border) 1px, transparent 1px),
          linear-gradient(to bottom, var(--lsd-border) 1px, transparent 1px)
        `,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section - Top Platform */}
        <section className="mb-[var(--lsd-spacing-massive)]">
          <div className="relative">
            {/* Giant Rank #1 */}
            <div className="absolute -top-32 -left-20 text-[length:20rem] font-bold text-[var(--lsd-border)] opacity-30 select-none">
              #01
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-[var(--lsd-spacing-sm)] mb-[var(--lsd-spacing-base)]">
                <span className="text-[var(--lsd-primary)] font-bold tracking-widest uppercase text-sm">
                  Champion Platform
                </span>
                <div className="h-px flex-1 bg-[var(--lsd-border)]" />
              </div>

              <h1 className="font-[var(--font-display)] text-6xl md:text-8xl font-black text-[var(--lsd-text-primary)] mb-[var(--lsd-spacing-base)] leading-none">
                {platforms[0].name}
              </h1>

              <p className="font-[var(--font-body)] text-xl text-[var(--lsd-text-secondary)] max-w-2xl mb-[var(--lsd-spacing-large)]">
                {platforms[0].description}
              </p>

              {/* Champion Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-[var(--lsd-spacing-base)]">
                <ChampionStat
                  label="GitHub Stars"
                  value={platforms[0].stars.toLocaleString()}
                  Icon={Star}
                  color="text-yellow-500"
                />
                <ChampionStat
                  label="Forks"
                  value={platforms[0].forks.toLocaleString()}
                  Icon={GitFork}
                  color="text-blue-500"
                />
                <ChampionStat
                  label="Channels"
                  value={platforms[0].channelCount.toString()}
                  Icon={ChatCircleText}
                  color="text-green-500"
                />
                <div className="flex items-center gap-[var(--lsd-spacing-base)]">
                  <Button variant="filled" size="lg" asChild>
                    <a
                      href={platforms[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-[var(--lsd-spacing-sm)]"
                    >
                      View Repository
                      <ArrowSquareOut size={20} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rankings 2-10 */}
        <section>
          <div className="mb-[var(--lsd-spacing-large)]">
            <div className="flex items-center gap-[var(--lsd-spacing-sm)]">
              <TrendUp size={24} className="text-[var(--lsd-primary)]" />
              <h2 className="font-[var(--font-display)] text-3xl font-bold text-[var(--lsd-text-primary)]">
                Future Challengers
              </h2>
            </div>
            <p className="text-[var(--lsd-text-secondary)] mt-[var(--lsd-spacing-sm)]">
              Rising stars in the multi-channel AI gateway ecosystem
            </p>
          </div>

          <div className="grid gap-[var(--lsd-spacing-base)]">
            {platforms.slice(1).map((platform, index) => (
              <PlatformCard key={platform.rank} platform={platform} globalIndex={index + 1} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[var(--lsd-spacing-epic)] pt-[var(--lsd-spacing-large)] border-t border-[var(--lsd-border)]">
          <div className="text-center text-[var(--lsd-text-secondary)] text-sm">
            <p className="font-[var(--font-body)]">
              Multi-Channel AI Gateway Leaderboard • {platforms.length} Platforms Ranked
            </p>
            <p className="mt-[var(--lsd-spacing-xs)] text-xs">
              Powered by @nipsys/lsd • Data from GitHub API
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ChampionStat({
  label,
  value,
  Icon,
  color,
}: {
  label: string;
  value: string;
  Icon: PhosphorIcon;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className={`${color} flex justify-center mb-[var(--lsd-spacing-sm)]`}>
        <Icon size={32} />
      </div>
      <div className="font-[var(--font-display)] text-4xl font-black text-[var(--lsd-text-primary)] mb-[var(--lsd-spacing-xs)]">
        {value}
      </div>
      <div className="text-[var(--lsd-text-secondary)] text-sm font-medium">{label}</div>
    </div>
  );
}

function PlatformCard({ platform, globalIndex }: { platform: Platform; globalIndex: number }) {
  const rank = globalIndex + 1;
  const isPodium = rank <= 3;
  const rankColor =
    rank === 2
      ? 'text-gray-400'
      : rank === 3
        ? 'text-amber-600'
        : 'text-[var(--lsd-text-secondary)]';

  return (
    <div
      className={'relative opacity-0 animate-fade-in'}
      style={{ animationDelay: `${globalIndex * 100}ms` }}
    >
      {/* Rank Badge */}
      <div
        className={`absolute -left-8 top-1/2 -translate-y-1/2 ${rankColor} font-[var(--font-display)] text-6xl font-black select-none`}
      >
        #{rank}
      </div>

      {/* Card Content */}
      <div
        className={`ml-12 pl-[var(--lsd-spacing-large)] border-l-2 ${
          isPodium ? 'border-[var(--lsd-primary)]' : 'border-[var(--lsd-border)]'
        } py-[var(--lsd-spacing-large)]`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--lsd-spacing-base)] items-center">
          {/* Platform Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-[var(--lsd-spacing-sm)] mb-[var(--lsd-spacing-xs)]">
              <h3
                className={`font-[var(--font-display)] text-2xl font-bold text-[var(--lsd-text-primary)] ${isPodium ? 'text-[var(--lsd-primary)]' : ''}`}
              >
                {platform.name}
              </h3>
              {isPodium && <Crown size={20} className="text-[var(--lsd-warning)]" />}
              <span className="text-xs px-3 py-1 bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-full font-mono uppercase tracking-wider">
                {platform.language}
              </span>
            </div>
            <p className="font-[var(--font-body)] text-base text-[var(--lsd-text-secondary)] line-clamp-2">
              {platform.description}
            </p>
          </div>

          {/* Channels */}
          <div className="lg:col-span-3">
            <div className="flex flex-wrap gap-[var(--lsd-spacing-xs)]">
              {platform.channels.slice(0, 4).map(channel => (
                <span
                  key={channel}
                  className="font-[var(--font-body)] text-xs px-3 py-1 bg-[var(--lsd-primary)] text-white rounded-full font-medium"
                >
                  {channel}
                </span>
              ))}
              {platform.channelCount > 4 && (
                <span className="font-[var(--font-body)] text-xs px-3 py-1 bg-[var(--lsd-text-tertiary)] text-white rounded-full font-medium">
                  +{platform.channelCount - 4}
                </span>
              )}
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-3 flex gap-[var(--lsd-spacing-large)]">
            <LargeMetric label="Stars" value={platform.stars.toLocaleString()} Icon={Star} />
            <LargeMetric label="Forks" value={platform.forks.toLocaleString()} Icon={GitFork} />
          </div>

          {/* Actions */}
          <div className="lg:col-span-2 flex justify-end">
            <a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[var(--lsd-spacing-sm)]"
            >
              <Button variant={isPodium ? 'filled' : 'outlined'} size="md">
                Repository
                <ArrowSquareOut size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function LargeMetric({ label, value, Icon }: { label: string; value: string; Icon: PhosphorIcon }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-primary)] mb-[var(--lsd-spacing-xs)]">
        <Icon size={20} />
        <span className="font-[var(--font-display)] text-2xl font-bold">{value}</span>
      </div>
      <div className="text-[var(--lsd-text-secondary)] text-xs uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}
