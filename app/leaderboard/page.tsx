'use client';

import { Button } from '@nipsys/lsd';
import { ArrowSquareOut, ChatCircleText, GitFork, Star, TrendUp } from '@phosphor-icons/react';
import { type Platform, platforms } from '@/data/platforms';

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-[var(--lsd-background)] p-[var(--lsd-spacing-largest)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="mb-[var(--lsd-spacing-largest)] text-center">
          <h1 className="text-[var(--lsd-text-primary)] text-4xl font-bold mb-[var(--lsd-spacing-base)]">
            Multi-Channel AI Gateway Leaderboard
          </h1>
          <p className="text-[var(--lsd-text-secondary)] text-lg max-w-3xl mx-auto">
            End-user ready personal AI assistants that connect to multiple messaging platforms.
            Sorted by GitHub stars (community adoption).
          </p>
        </section>

        {/* Stats Bar */}
        <section className="mb-[var(--lsd-spacing-large)] grid grid-cols-1 md:grid-cols-4 gap-[var(--lsd-spacing-base)]">
          <StatCard
            label="Total Platforms"
            value={platforms.length.toString()}
            icon={<ChatCircleText size={24} />}
          />
          <StatCard
            label="Total Stars"
            value={platforms.reduce((sum, p) => sum + p.stars, 0).toLocaleString()}
            icon={<Star size={24} />}
          />
          <StatCard
            label="Total Forks"
            value={platforms.reduce((sum, p) => sum + p.forks, 0).toLocaleString()}
            icon={<GitFork size={24} />}
          />
          <StatCard
            label="Avg Channels"
            value={(
              platforms.reduce((sum, p) => sum + p.channelCount, 0) / platforms.length
            ).toFixed(1)}
            icon={<TrendUp size={24} />}
          />
        </section>

        {/* Leaderboard Table */}
        <section>
          <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg overflow-hidden">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.rank} platform={platform} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[var(--lsd-spacing-largest)] text-center text-[var(--lsd-text-secondary)] text-sm">
          <p>Powered by @nipsys/lsd • Data from GitHub API • Updated Dec 2024</p>
        </footer>
      </div>
    </main>
  );
}

function StatCard({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded p-[var(--lsd-spacing-base)] text-center">
      <div className="text-[var(--lsd-primary)] flex justify-center mb-[var(--lsd-spacing-sm)]">
        {icon}
      </div>
      <div className="text-3xl font-bold text-[var(--lsd-text-primary)] mb-[var(--lsd-spacing-xs)]">
        {value}
      </div>
      <div className="text-sm text-[var(--lsd-text-secondary)]">{label}</div>
    </div>
  );
}

function PlatformCard({ platform, index }: { platform: Platform; index: number }) {
  const isTop3 = platform.rank <= 3;
  const rankColor =
    platform.rank === 1
      ? 'text-[var(--lsd-warning)]'
      : platform.rank === 2
        ? 'text-[var(--lsd-text-secondary)]'
        : platform.rank === 3
          ? 'text-[var(--lsd-tertiary)]'
          : 'text-[var(--lsd-text-secondary)]';

  return (
    <div
      className={`border-b border-[var(--lsd-border)] last:border-b-0 ${index === 0 ? 'bg-[var(--lsd-accent)]' : ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--lsd-spacing-base)] p-[var(--lsd-spacing-base)] items-center">
        {/* Rank */}
        <div className="lg:col-span-1 text-center lg:text-left">
          <span className={`text-3xl font-bold ${rankColor}`}>#{platform.rank}</span>
        </div>

        {/* Platform Info */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-[var(--lsd-spacing-sm)] mb-[var(--lsd-spacing-xs)]">
            <h3
              className={`text-lg font-semibold text-[var(--lsd-text-primary)] ${isTop3 ? 'text-[var(--lsd-primary)]' : ''}`}
            >
              {platform.name}
            </h3>
            <span className="text-xs px-2 py-1 border border-[var(--lsd-border)] rounded">
              {platform.language}
            </span>
          </div>
          <p className="text-sm text-[var(--lsd-text-secondary)] line-clamp-2">
            {platform.description}
          </p>
        </div>

        {/* Channels */}
        <div className="lg:col-span-3">
          <div className="flex flex-wrap gap-[var(--lsd-spacing-xs)]">
            {platform.channels.slice(0, 4).map(channel => (
              <span
                key={channel}
                className="text-xs px-2 py-1 bg-[var(--lsd-primary)] text-white rounded"
              >
                {channel}
              </span>
            ))}
            {platform.channelCount > 4 && (
              <span className="text-xs px-2 py-1 bg-[var(--lsd-text-tertiary)] text-white rounded">
                +{platform.channelCount - 4}
              </span>
            )}
          </div>
          <div className="mt-[var(--lsd-spacing-xs)] text-xs text-[var(--lsd-text-secondary)]">
            {platform.channelCount} channels
          </div>
        </div>

        {/* Metrics */}
        <div className="lg:col-span-2 flex gap-[var(--lsd-spacing-base)]">
          <Metric label="Stars" value={platform.stars.toLocaleString()} icon={<Star size={16} />} />
          <Metric
            label="Forks"
            value={platform.forks.toLocaleString()}
            icon={<GitFork size={16} />}
          />
        </div>

        {/* Actions */}
        <div className="lg:col-span-3 flex justify-end">
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[var(--lsd-spacing-xs)]"
          >
            <Button variant="outlined" size="sm">
              View Repository
              <ArrowSquareOut size={16} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-text-primary)]">
        <span className="text-[var(--lsd-primary)]">{icon}</span>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      <div className="text-xs text-[var(--lsd-text-secondary)]">{label}</div>
    </div>
  );
}
