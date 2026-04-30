'use client';

import { Button } from '@nipsys/lsd';
import {
  ArrowSquareOut,
  ChatCircleText,
  GitFork,
  Layout,
  List,
  Star,
  Trophy,
  Users,
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
          <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <Trophy size={28} className="text-[var(--lsd-primary)]" />
              <span className="text-xl font-bold text-[var(--lsd-text-primary)]">
                Agent Leaderboard
              </span>
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg p-1">
              <button
                type="button"
                onClick={() => setView('overview')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  view === 'overview'
                    ? 'bg-[var(--lsd-primary)] text-white'
                    : 'text-[var(--lsd-text-secondary)] hover:text-[var(--lsd-text-primary)]'
                }`}
              >
                <Layout size={16} />
                Overview
              </button>
              <button
                type="button"
                onClick={() => setView('details')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                  view === 'details'
                    ? 'bg-[var(--lsd-primary)] text-white'
                    : 'text-[var(--lsd-text-secondary)] hover:text-[var(--lsd-text-primary)]'
                }`}
              >
                <List size={16} />
                Details
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        {view === 'overview' ? (
          <>
            {/* Hero Section - #1 Platform */}
            <section className="bg-white py-16 px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Left - Big Title */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-[var(--lsd-primary)] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      <Trophy size={16} />
                      MARKET LEADER
                    </div>
                    <h1 className="text-6xl font-bold text-[var(--lsd-text-primary)] mb-4 tracking-tight">
                      {topAgent?.name}
                    </h1>
                    <p className="text-2xl text-[var(--lsd-text-secondary)] mb-8">
                      {topAgent?.description}
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start">
                      <a href={topAgent?.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="filled" size="lg">
                          View Repository
                          <ArrowSquareOut size={18} />
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Right - Key Stats */}
                  <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                    <StatCard
                      label="GitHub Stars"
                      value={topAgent?.stars.toLocaleString() || '0'}
                      icon={<Star size={24} />}
                      highlight
                    />
                    <StatCard
                      label="Forks"
                      value={topAgent?.forks.toLocaleString() || '0'}
                      icon={<GitFork size={24} />}
                    />
                    <StatCard
                      label="Platforms"
                      value={topAgent?.channelCount.toString() || '0'}
                      icon={<ChatCircleText size={24} />}
                    />
                    <StatCard
                      label="Contributors"
                      value={topAgent?.contributors.toLocaleString() || '0'}
                      icon={<Users size={24} />}
                      highlight
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Dark Dashboard Section - #2 Platform */}
            <section className="bg-[var(--lsd-surface)] py-12 px-8">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Left - Platform Info */}
                  <div className="lg:w-1/3">
                    <div className="text-sm text-[var(--lsd-text-secondary)] mb-2">RUNNER UP</div>
                    <h2 className="text-4xl font-bold text-[var(--lsd-text-primary)] mb-3">
                      {secondAgent?.name}
                    </h2>
                    <p className="text-[var(--lsd-text-secondary)] mb-6">
                      {secondAgent?.description}
                    </p>
                    <a href={secondAgent?.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outlined" size="md">
                        View Repository
                        <ArrowSquareOut size={16} />
                      </Button>
                    </a>
                  </div>

                  {/* Right - Dashboard Metrics */}
                  <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-4">
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
            <section className="bg-[var(--lsd-background)] py-12 px-8 flex-1">
              <div className="max-w-7xl mx-auto">
                <h3 className="text-lg font-semibold text-[var(--lsd-text-primary)] mb-6">
                  Emerging Platforms
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {nextFiveAgents.map(platform => (
                    <PlatformCard key={platform.rank} platform={platform} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          /* Details View - Table */
          <section className="py-12 px-8 flex-1">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-6">
                All Platforms
              </h2>
              <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--lsd-background)] border-b border-[var(--lsd-border)]">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Rank
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Platform
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Stars
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Forks
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Contributors
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Channels
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Language
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--lsd-text-primary)]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {platforms.map(platform => (
                      <tr
                        key={platform.rank}
                        className="border-b border-[var(--lsd-border)] last:border-b-0 hover:bg-[var(--lsd-background)] transition-colors"
                      >
                        <td className="px-6 py-4 text-sm font-bold text-[var(--lsd-text-primary)]">
                          #{platform.rank}
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <div className="text-sm font-semibold text-[var(--lsd-text-primary)]">
                              {platform.name}
                            </div>
                            <div className="text-xs text-[var(--lsd-text-secondary)] mt-1">
                              {platform.repository}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-primary)]">
                            <Star size={14} className="text-[var(--lsd-primary)]" />
                            <span>{platform.stars.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-primary)]">
                            <GitFork size={14} />
                            <span>{platform.forks.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-primary)]">
                            <Users size={14} />
                            <span>{platform.contributors.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-primary)]">
                            <ChatCircleText size={14} />
                            <span>{platform.channelCount}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs px-2 py-1 bg-[var(--lsd-primary)] text-white rounded">
                            {platform.language}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a href={platform.url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outlined" size="sm">
                              View
                              <ArrowSquareOut size={12} />
                            </Button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="flex-shrink-0 bg-[var(--lsd-surface)] border-t border-[var(--lsd-border)] py-4 px-8">
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
    <div className={`p-6 rounded-xl ${bgClass}`}>
      <div className={`mb-2 ${iconColor}`}>{icon}</div>
      <div className={`text-3xl font-bold mb-1 ${textColor}`}>{value}</div>
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
    <div className="bg-[var(--lsd-background)] rounded-lg p-4 border border-[var(--lsd-border)]">
      <div className="text-xs text-[var(--lsd-text-secondary)] mb-1">{label}</div>
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
      className="block p-4 bg-[var(--lsd-surface)] rounded-xl border border-[var(--lsd-border)] hover:border-[var(--lsd-primary)] transition-colors group"
    >
      <div className="text-xs text-[var(--lsd-text-secondary)] mb-1">#{platform.rank}</div>
      <div className="font-semibold text-[var(--lsd-text-primary)] mb-2 group-hover:text-[var(--lsd-primary)]">
        {platform.name}
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-secondary)]">
        <Star size={12} />
        <span>{platform.stars.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-[var(--lsd-text-secondary)] mt-1">
        <ChatCircleText size={12} />
        <span>{platform.channelCount} platforms</span>
      </div>
    </a>
  );
}
