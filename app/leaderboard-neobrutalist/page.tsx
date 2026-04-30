'use client';

import {
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  ToggleGroup,
  ToggleGroupItem,
} from '@nipsys/lsd';
import {
  ArrowSquareOutIcon,
  ChatCircleTextIcon,
  GitForkIcon,
  LayoutIcon,
  ListIcon,
  StarIcon,
  TrophyIcon,
  UsersIcon,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { type Platform, platforms } from '@/data/platforms';

export default function NeoBrutalistLeaderboardPage() {
  const [view, setView] = useState<'overview' | 'details'>('overview');

  const topAgent = platforms.find(p => p.rank === 1);
  const secondAgent = platforms.find(p => p.rank === 2);
  const nextFiveAgents = platforms.filter(p => p.rank >= 3 && p.rank <= 7);

  // Set theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'terracotta');
    return () => {
      document.documentElement.removeAttribute('data-theme');
    };
  }, []);

  return (
    <>
      {/* Global styles */}
      <style>
        {`
          html, body {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          ::-webkit-scrollbar {
            display: none !important;
          }
        `}
      </style>

      <div className="min-h-screen flex flex-col bg-[var(--lsd-background)]">
        {/* Top Navigation Bar */}
        <header className="flex-shrink-0 bg-white border-b border-[var(--lsd-border)]">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-(--lsd-spacing-large) py-(--lsd-spacing-smaller)">
            {/* Logo and Title */}
            <div className="flex items-center gap-(--lsd-spacing-small)">
              <TrophyIcon size={28} className="text-[var(--lsd-primary)]" />
              <span className="text-xl font-bold text-[var(--lsd-text-primary)]">
                Agent Leaderboard
              </span>
            </div>

            {/* View Toggle */}
            <ToggleGroup
              type="single"
              value={view}
              onValueChange={v => setView(v as 'overview' | 'details')}
            >
              <ToggleGroupItem value="overview" aria-label="Overview">
                <LayoutIcon size={16} />
                Overview
              </ToggleGroupItem>
              <ToggleGroupItem value="details" aria-label="Details">
                <ListIcon size={16} />
                Details
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </header>

        {/* Content */}
        {view === 'overview' ? (
          <>
            {/* Hero Section - #1 Platform */}
            <section className="bg-white py-[64px] px-(--lsd-spacing-large)">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-[48px]">
                  {/* Left - Big Title */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-(--lsd-spacing-smaller) bg-[var(--lsd-primary)] text-white px-(--lsd-spacing-base) py-(--lsd-spacing-smallest) rounded-full text-sm font-semibold mb-[--lsd-spacing-base]">
                      <TrophyIcon size={16} />
                      MARKET LEADER
                    </div>
                    <h1 className="text-6xl font-bold text-[var(--lsd-text-primary)] mb-[--lsd-spacing-base] tracking-tight">
                      {topAgent?.name}
                    </h1>
                    <p className="text-2xl text-[var(--lsd-text-secondary)] mb-[--lsd-spacing-larger]">
                      {topAgent?.description}
                    </p>
                    <div className="flex gap-[--lsd-spacing-base] justify-center lg:justify-start">
                      <a href={topAgent?.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="filled" size="lg">
                          View Repository
                          <ArrowSquareOutIcon size={18} />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right - Key Stats */}
                  <div className="lg:w-1/2 grid grid-cols-2 gap-[--lsd-spacing-base]">
                    <StatCard
                      label="GitHub Stars"
                      value={topAgent?.stars.toLocaleString() || '0'}
                      icon={<StarIcon size={24} />}
                      highlight
                    />
                    <StatCard
                      label="Forks"
                      value={topAgent?.forks.toLocaleString() || '0'}
                      icon={<GitForkIcon size={24} />}
                    />
                    <StatCard
                      label="Platforms"
                      value={topAgent?.channelCount.toString() || '0'}
                      icon={<ChatCircleTextIcon size={24} />}
                    />
                    <StatCard
                      label="Contributors"
                      value={topAgent?.contributors.toLocaleString() || '0'}
                      icon={<UsersIcon size={24} />}
                      highlight
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Dark Dashboard Section - #2 Platform */}
            <section className="bg-[var(--lsd-surface)] py-[48px] px-(--lsd-spacing-large)">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-[32px]">
                  {/* Left - Platform Info */}
                  <div className="lg:w-1/3">
                    <div className="text-sm text-[var(--lsd-text-secondary)] mb-[--lsd-spacing-smaller]">
                      RUNNER UP
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--lsd-text-primary)] mb-[--lsd-spacing-smaller]">
                      {secondAgent?.name}
                    </h2>
                    <p className="text-[var(--lsd-text-secondary)] mb-[--lsd-spacing-base]">
                      {secondAgent?.description}
                    </p>
                    <a href={secondAgent?.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outlined" size="md">
                        View Repository
                        <ArrowSquareOutIcon size={16} />
                      </Button>
                    </a>
                  </div>

                  {/* Right - Dashboard Metrics */}
                  <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-[--lsd-spacing-base]">
                    <DashboardMetric
                      label="Stars"
                      value={secondAgent?.stars.toLocaleString() || '0'}
                      subtext="GitHub"
                    />
                    <DashboardMetric
                      label="Forks"
                      value={secondAgent?.forks.toLocaleString() || '0'}
                      subtext="Community"
                    />
                    <DashboardMetric
                      label="Channels"
                      value={secondAgent?.channelCount.toString() || '0'}
                      subtext="Platforms"
                    />
                    <DashboardMetric
                      label="Contributors"
                      value={secondAgent?.contributors.toLocaleString() || '0'}
                      subtext="Active dev"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom 5 Cards - Platforms #3-7 */}
            <section className="bg-[var(--lsd-background)] py-[48px] px-(--lsd-spacing-large) flex-1">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-lg font-semibold text-[var(--lsd-text-primary)] mb-[--lsd-spacing-larger]">
                  Emerging Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[--lsd-spacing-base]">
                  {nextFiveAgents.map(platform => (
                    <PlatformCard key={platform.rank} platform={platform} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Details View - Table */
          <section className="py-[48px] px-(--lsd-spacing-large) flex-1">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-[--lsd-spacing-larger]">
                All Platforms
              </h2>
              <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Platform</TableHead>
                      <TableHead>Stars</TableHead>
                      <TableHead>Forks</TableHead>
                      <TableHead>Contributors</TableHead>
                      <TableHead>Channels</TableHead>
                      <TableHead>Language</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {platforms.map(platform => (
                      <TableRow key={platform.rank}>
                        <TableCell className="font-bold">#{platform.rank}</TableCell>
                        <TableCell>
                          <div>
                            <div className="font-semibold text-[var(--lsd-text-primary)]">
                              {platform.name}
                            </div>
                            <div className="text-xs text-[var(--lsd-text-secondary)] mt-1">
                              {platform.repository}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <StarIcon size={14} className="text-[var(--lsd-primary)]" />
                            <span>{platform.stars.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <GitForkIcon size={14} />
                            <span>{platform.forks.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <UsersIcon size={14} />
                            <span>{platform.contributors.toLocaleString()}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <ChatCircleTextIcon size={14} />
                            <span>{platform.channelCount}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="filled">{platform.language}</Badge>
                        </TableCell>
                        <TableCell>
                          <a href={platform.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outlined" size="sm">
                              View
                              <ArrowSquareOutIcon size={12} />
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="flex-shrink-0 bg-[var(--lsd-surface)] border-t border-[var(--lsd-border)] py-[--lsd-spacing-base] px-(--lsd-spacing-large)">
          <div className="max-w-7xl mx-auto text-center text-sm text-[var(--lsd-text-secondary)]">
            Powered by @nipsys/lsd • Data from GitHub API • Updated Apr 2026
          </div>
        </footer>
      </div>
    </>
  );
}

// Hero stat card
function StatCard({
  label,
  value,
  icon,
  highlight = false,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  highlight?: boolean;
}) {
  const bgClass = highlight ? 'bg-[var(--lsd-primary)] text-white' : 'bg-[var(--lsd-surface)]';
  const iconColor = highlight ? 'text-white' : 'text-[var(--lsd-primary)]';
  const textColor = highlight ? 'text-white' : 'text-[var(--lsd-text-primary)]';
  const subColor = highlight ? 'text-white/80' : 'text-[var(--lsd-text-secondary)]';

  return (
    <div className={`p-[--lsd-spacing-larger] rounded-xl ${bgClass}`}>
      <div className={`mb-[--lsd-spacing-smaller] ${iconColor}`}>{icon}</div>
      <div className={`text-3xl font-bold mb-[--lsd-spacing-smallest] ${textColor}`}>{value}</div>
      <div className={`text-sm ${subColor}`}>{label}</div>
    </div>
  );
}

// Dashboard metric
function DashboardMetric({
  label,
  value,
  subtext,
}: {
  label: string;
  value: string;
  subtext: string;
}) {
  return (
    <div className="bg-[var(--lsd-background)] rounded-lg p-[--lsd-spacing-base] border border-[var(--lsd-border)]">
      <div className="text-xs text-[var(--lsd-text-secondary)] mb-[--lsd-spacing-smallest]">
        {label}
      </div>
      <div className="text-2xl font-bold text-[var(--lsd-text-primary)]">{value}</div>
      <div className="text-xs text-[var(--lsd-text-secondary)]">{subtext}</div>
    </div>
  );
}

// Platform card for bottom section
function PlatformCard({ platform }: { platform: Platform }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-[--lsd-spacing-base] bg-[var(--lsd-surface)] rounded-xl border border-[var(--lsd-border)] hover:border-[var(--lsd-primary)] transition-colors group"
    >
      <div className="text-xs text-[var(--lsd-text-secondary)] mb-[--lsd-spacing-smallest]">
        #{platform.rank}
      </div>
      <div className="font-semibold text-[var(--lsd-text-primary)] mb-[--lsd-spacing-smaller] group-hover:text-[var(--lsd-primary)]">
        {platform.name}
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-secondary)]">
        <StarIcon size={12} />
        <span>{platform.stars.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-secondary)] mt-[--lsd-spacing-smallest]">
        <ChatCircleTextIcon size={12} />
        <span>{platform.channelCount} platforms</span>
      </div>
    </a>
  );
}
