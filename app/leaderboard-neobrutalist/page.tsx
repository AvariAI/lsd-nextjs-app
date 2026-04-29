'use client';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
  ScrollArea,
  ScrollBar,
} from '@nipsys/lsd';
import {
  ArrowSquareOut,
  ChatCircleText,
  GitFork,
  Lightning,
  Star,
  Trophy,
  Users,
} from '@phosphor-icons/react';
import { useEffect } from 'react';
import { type Platform, platforms } from '@/data/platforms';

export default function NeoBrutalistLeaderboardPage() {
  const topAgent = platforms.find(p => p.rank === 1);
  const hermesAgent = platforms.find(p => p.name === 'Hermes');
  const remainingAgents = platforms.filter(p => p.rank > 2);

  // Set overflow hidden on html and body to prevent native scrollbars
  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.setAttribute('data-theme', 'terracotta');
    document.body.style.overflow = 'hidden';

    return () => {
      document.documentElement.style.overflow = '';
      document.documentElement.removeAttribute('data-theme');
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="flex h-screen bg-[var(--lsd-background)]">
      {/* Top Menubar */}
      <header className="flex-shrink-0 bg-[var(--lsd-surface)] border-b border-[var(--lsd-border)]">
        <div className="flex items-center justify-between p-[var(--lsd-spacing-base)]">
          <div className="flex items-center gap-[var(--lsd-spacing-large)]">
            <Trophy size={32} className="text-[var(--lsd-primary)]" />
            <div>
              <h1 className="text-[var(--lsd-text-primary)] text-2xl font-bold">
                Agent Leaderboard
              </h1>
              <p className="text-[var(--lsd-text-secondary)] text-sm">
                Multi-channel AI orchestration platforms
              </p>
            </div>
          </div>

          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <a href="/">LSD Demo</a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="/leaderboard">Standard</a>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem asChild>
                  <a href="/leaderboard-creative">Creative</a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="/leaderboard-creative-2">Creative v2</a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Analytics</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Platform Stats</MenubarItem>
                <MenubarItem>Market Trends</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>GitHub Metrics</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <a
                    href="https://github.com/AvariAI/lsd-nextjs-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                </MenubarItem>
                <MenubarItem asChild>
                  <a href="https://lsd.nipsys.dev" target="_blank" rel="noopener noreferrer">
                    LSD Documentation
                  </a>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <ScrollArea className="flex-1 p-[var(--lsd-spacing-large)] overflow-x-hidden">
        <ScrollBar orientation="vertical" />

        <div className="max-w-7xl mx-auto space-y-[var(--lsd-spacing-large)]">
          {/* Hero Grid - Large Card + Narrow Card */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--lsd-spacing-large)]">
            {/* Large Card - #1 Agent Desktop */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="border-b border-[var(--lsd-border)]">
                  <CardTitle className="flex items-center gap-[var(--lsd-spacing-base)]">
                    <Trophy size={32} className="text-[var(--lsd-primary)]" />
                    <span className="text-2xl">Market Leader</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-[var(--lsd-spacing-large)]">
                  <div className="space-y-[var(--lsd-spacing-base)]">
                    {/* Rank Badge */}
                    <div className="flex items-center gap-[var(--lsd-spacing-sm)]">
                      <div className="bg-[var(--lsd-primary)] text-white px-4 py-2 rounded-lg">
                        <span className="text-3xl font-bold">#1</span>
                      </div>
                      <span className="text-[var(--lsd-text-secondary)]">
                        Dominates personal agent market
                      </span>
                    </div>

                    {/* Agent Info */}
                    <div>
                      <h2 className="text-[var(--lsd-text-primary)] text-4xl font-bold mb-[var(--lsd-spacing-sm)]">
                        {topAgent?.name}
                      </h2>
                      <p className="text-[var(--lsd-text-secondary)] text-lg">
                        {topAgent?.description}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-[var(--lsd-spacing-base)] pt-[var(--lsd-spacing-base)] border-t border-[var(--lsd-border)]">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-primary)] mb-1">
                          <Star size={24} />
                        </div>
                        <div className="text-3xl font-bold text-[var(--lsd-text-primary)]">
                          {topAgent?.stars.toLocaleString()}
                        </div>
                        <div className="text-sm text-[var(--lsd-text-secondary)]">GitHub Stars</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-primary)] mb-1">
                          <GitFork size={24} />
                        </div>
                        <div className="text-3xl font-bold text-[var(--lsd-text-primary)]">
                          {topAgent?.forks.toLocaleString()}
                        </div>
                        <div className="text-sm text-[var(--lsd-text-secondary)]">Forks</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-primary)] mb-1">
                          <ChatCircleText size={24} />
                        </div>
                        <div className="text-3xl font-bold text-[var(--lsd-text-primary)]">
                          {topAgent?.channelCount}
                        </div>
                        <div className="text-sm text-[var(--lsd-text-secondary)]">Platforms</div>
                      </div>
                    </div>

                    {/* Action */}
                    <a href={topAgent?.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="filled" size="lg" className="w-full">
                        View {topAgent?.name} Repository
                        <ArrowSquareOut size={18} />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Narrow Card - Hermes Market Stats */}
            <div>
              <Card>
                <CardHeader className="border-b border-[var(--lsd-border)]">
                  <CardTitle className="flex items-center gap-[var(--lsd-spacing-base)]">
                    <Lightning size={24} className="text-[var(--lsd-primary)]" />
                    <span className="text-xl">Market Stats</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-[var(--lsd-spacing-large)]">
                  <div className="space-y-[var(--lsd-spacing-base)]">
                    {/* Hermes Highlight */}
                    <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg p-[var(--lsd-spacing-base)]">
                      <h3 className="text-[var(--lsd-text-primary)] text-xl font-bold mb-2">
                        {hermesAgent?.name}
                      </h3>
                      <p className="text-[var(--lsd-text-secondary)] text-sm mb-2">
                        {hermesAgent?.description}
                      </p>
                      <div className="flex items-center gap-[var(--lsd-spacing-xs)]">
                        <Star size={16} className="text-[var(--lsd-primary)]" />
                        <span className="text-[var(--lsd-text-primary)] font-semibold">
                          {hermesAgent?.stars.toLocaleString()} stars
                        </span>
                      </div>
                    </div>

                    {/* Market Stats */}
                    <div className="space-y-[var(--lsd-spacing-sm)]">
                      <StatItem
                        label="Total Agents"
                        value={platforms.length.toString()}
                        icon={<Users size={20} />}
                      />
                      <StatItem
                        label="Total Stars"
                        value={platforms.reduce((sum, p) => sum + p.stars, 0).toLocaleString()}
                        icon={<Star size={20} />}
                      />
                      <StatItem
                        label="Total Forks"
                        value={platforms.reduce((sum, p) => sum + p.forks, 0).toLocaleString()}
                        icon={<GitFork size={20} />}
                      />
                      <StatItem
                        label="Avg Platforms"
                        value={(
                          platforms.reduce((sum, p) => sum + p.channelCount, 0) / platforms.length
                        ).toFixed(1)}
                        icon={<ChatCircleText size={20} />}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Full Width Table Card - Remaining Agents */}
          <section>
            <Card>
              <CardHeader className="border-b border-[var(--lsd-border)]">
                <CardTitle className="flex items-center gap-[var(--lsd-spacing-base)]">
                  <ChatCircleText size={28} className="text-[var(--lsd-primary)]" />
                  <span className="text-2xl">All Platforms</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[var(--lsd-surface)] border-b border-[var(--lsd-border)]">
                        <th className="text-left p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Rank
                        </th>
                        <th className="text-left p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Platform
                        </th>
                        <th className="text-left p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Channels
                        </th>
                        <th className="text-center p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Stars
                        </th>
                        <th className="text-center p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Forks
                        </th>
                        <th className="text-right p-[var(--lsd-spacing-base)] text-[var(--lsd-text-primary)] font-semibold">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {remainingAgents.map((platform, index) => (
                        <AgentTableRow key={platform.rank} platform={platform} index={index} />
                      ))}
                    </tbody>
                  </table>
                  <ScrollBar orientation="horizontal" />
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CardContent>
            </Card>
          </section>

          {/* Footer */}
          <footer className="text-center text-[var(--lsd-text-secondary)] text-sm">
            <p>Powered by @nipsys/lsd • Data from GitHub API • Updated Dec 2024</p>
          </footer>
        </div>
      </ScrollArea>
    </main>
  );
}

interface StatItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <div className="flex items-center justify-between p-[var(--lsd-spacing-xs)] border-b border-[var(--lsd-border)]">
      <div className="flex items-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-text-secondary)]">
        <span className="text-[var(--lsd-primary)]">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-[var(--lsd-text-primary)] font-semibold">{value}</span>
    </div>
  );
}

interface AgentTableRowProps {
  platform: Platform;
  index: number;
}

function AgentTableRow({ platform, index }: AgentTableRowProps) {
  const isLast = index === platform.rank - 3;

  return (
    <tr className={`border-b border-[var(--lsd-border)] ${isLast ? 'border-b-0' : ''}`}>
      {/* Rank */}
      <td className="p-[var(--lsd-spacing-base)]">
        <span className="text-[var(--lsd-text-primary)] font-bold">#{platform.rank}</span>
      </td>

      {/* Platform Info */}
      <td className="p-[var(--lsd-spacing-base)]">
        <div className="space-y-[var(--lsd-spacing-xs)]">
          <h3 className="text-[var(--lsd-text-primary)] font-semibold">{platform.name}</h3>
          <p className="text-[var(--lsd-text-secondary)] text-sm line-clamp-2">
            {platform.description}
          </p>
        </div>
      </td>

      {/* Channels */}
      <td className="p-[var(--lsd-spacing-base)]">
        <span className="text-[var(--lsd-text-primary)] text-sm">
          {platform.channelCount} platforms
        </span>
      </td>

      {/* Stars */}
      <td className="p-[var(--lsd-spacing-base)] text-center">
        <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-text-primary)]">
          <Star size={16} className="text-[var(--lsd-primary)]" />
          <span className="font-semibold">{platform.stars.toLocaleString()}</span>
        </div>
      </td>

      {/* Forks */}
      <td className="p-[var(--lsd-spacing-base)] text-center">
        <div className="flex items-center justify-center gap-[var(--lsd-spacing-xs)] text-[var(--lsd-text-primary)]">
          <GitFork size={16} className="text-[var(--lsd-primary)]" />
          <span className="font-semibold">{platform.forks.toLocaleString()}</span>
        </div>
      </td>

      {/* Actions */}
      <td className="p-[var(--lsd-spacing-base)] text-right">
        <a href={platform.url} target="_blank" rel="noopener noreferrer">
          <Button variant="outlined" size="sm">
            View
            <ArrowSquareOut size={14} />
          </Button>
        </a>
      </td>
    </tr>
  );
}
