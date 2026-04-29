'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@nipsys/lsd';
import { ArrowSquareOut, GitFork, Star } from '@phosphor-icons/react';

const AGENTS = [
  {
    rank: 1,
    name: 'OpenClaw',
    stars: 364000,
    forks: 28450,
    url: 'https://github.com/openclaw/openclaw',
    description: 'Dominates the personal agent market with massive community adoption',
  },
  {
    rank: 2,
    name: 'Hermes',
    stars: 119000,
    forks: 14230,
    url: 'https://github.com/nousresearch/hermes-agent',
    description: 'Popular and growing in the market with strong development momentum',
  },
  {
    rank: 3,
    name: 'Ruflo',
    stars: 33000,
    forks: 2100,
    url: 'https://github.com/ruflo/ruflo',
    description: 'Solid contender with dedicated user base',
  },
  {
    rank: 4,
    name: 'oh-my-claudecode',
    stars: 31000,
    forks: 1950,
    url: 'https://github.com/oh-my-claudecode',
    description: 'Developer-focused agent with growing popularity',
  },
  {
    rank: 5,
    name: 'Mission Control',
    stars: 4000,
    forks: 280,
    url: 'https://github.com/mission-control',
    description: 'Emerging agent with unique capabilities',
  },
  {
    rank: 6,
    name: 'Bindu',
    stars: 2,
    forks: 0,
    url: 'https://github.com/bindu',
    description: 'New entrant in the agent ecosystem',
  },
  {
    rank: 7,
    name: 'GoClaw',
    stars: 0,
    forks: 0,
    url: 'https://github.com/goclaw',
    description: 'Upcoming Go-based agent project',
  },
];

export default function LeaderboardNeobrutalist() {
  const topAgent = AGENTS[0];
  const marketStats = AGENTS[1];
  const remainingAgents = AGENTS.slice(2);

  const totalStars = AGENTS.reduce((sum, agent) => sum + agent.stars, 0);

  return (
    <main className="min-h-screen bg-[var(--lsd-background)] p-[var(--lsd-spacing-largest)]">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-[var(--lsd-spacing-largest)]">
          <h1 className="font-[var(--font-display)] text-7xl md:text-9xl font-black text-[var(--lsd-text-primary)] leading-none mb-[var(--lsd-spacing-base)]">
            AGENT
            <br />
            LEADERBOARD
          </h1>
          <p className="text-xl text-[var(--lsd-text-secondary)] max-w-2xl">
            The most popular personal AI agents ranked by community adoption
          </p>
        </section>

        {/* Floating Cards Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-[var(--lsd-spacing-base)] mb-[var(--lsd-spacing-base)]">
          {/* Large Card - Top Agent */}
          <div className="lg:col-span-2">
            <Card className="h-full border-2 border-[var(--lsd-border)]">
              <CardHeader className="pb-[var(--lsd-spacing-base)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[var(--lsd-primary)] text-6xl font-black leading-none">
                    #1
                  </span>
                  <CardTitle className="text-4xl font-black text-[var(--lsd-text-primary)]">
                    {topAgent.name}
                  </CardTitle>
                </div>
                <p className="text-lg text-[var(--lsd-text-secondary)]">{topAgent.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[var(--lsd-primary)] mb-1">
                      <Star size={24} weight="fill" />
                      <span className="text-3xl font-bold">
                        {(topAgent.stars / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="text-sm text-[var(--lsd-text-secondary)] uppercase tracking-wider">
                      Stars
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[var(--lsd-text-primary)] mb-1">
                      <GitFork size={24} />
                      <span className="text-3xl font-bold">
                        {(topAgent.forks / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="text-sm text-[var(--lsd-text-secondary)] uppercase tracking-wider">
                      Forks
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-[var(--lsd-text-primary)] mb-1">
                      <span className="text-3xl font-bold">
                        {((topAgent.stars / totalStars) * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="text-sm text-[var(--lsd-text-secondary)] uppercase tracking-wider">
                      Market Share
                    </div>
                  </div>
                </div>
                <a
                  href={topAgent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--lsd-primary)] text-white px-6 py-3 font-semibold hover:opacity-90 transition-opacity"
                >
                  View Repository
                  <ArrowSquareOut size={20} />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Narrow Card - Market Stats */}
          <div className="lg:col-span-1">
            <Card className="h-full border-2 border-[var(--lsd-border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-2">
                  Market Stats
                </CardTitle>
                <p className="text-[var(--lsd-text-secondary)]">Hermes Agent Position</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[var(--lsd-text-secondary)]">Stars</span>
                    <span className="text-2xl font-bold text-[var(--lsd-text-primary)]">
                      {(marketStats.stars / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--lsd-border)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--lsd-primary)] rounded-full"
                      style={{
                        width: `${((marketStats.stars / topAgent.stars) * 100).toFixed(0)}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[var(--lsd-text-secondary)]">Forks</span>
                    <span className="text-2xl font-bold text-[var(--lsd-text-primary)]">
                      {(marketStats.forks / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="h-2 bg-[var(--lsd-border)] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[var(--lsd-primary)] rounded-full"
                      style={{
                        width: `${((marketStats.forks / topAgent.forks) * 100).toFixed(0)}%`,
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[var(--lsd-text-secondary)]">Rank</span>
                    <span className="text-2xl font-bold text-[var(--lsd-primary)]">#2</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--lsd-border)]">
                  <p className="text-sm text-[var(--lsd-text-secondary)]">
                    {marketStats.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Full-width Table Card */}
        <section>
          <Card className="border-2 border-[var(--lsd-border)]">
            <CardHeader>
              <CardTitle className="text-3xl font-black text-[var(--lsd-text-primary)]">
                All Agents
              </CardTitle>
              <p className="text-[var(--lsd-text-secondary)]">Complete rankings and metrics</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-[var(--lsd-text-primary)] text-base">
                      Rank
                    </TableHead>
                    <TableHead className="font-bold text-[var(--lsd-text-primary)] text-base">
                      Agent
                    </TableHead>
                    <TableHead className="font-bold text-[var(--lsd-text-primary)] text-base text-center">
                      Stars
                    </TableHead>
                    <TableHead className="font-bold text-[var(--lsd-text-primary)] text-base text-center">
                      Forks
                    </TableHead>
                    <TableHead className="font-bold text-[var(--lsd-text-primary)] text-base text-right">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {remainingAgents.map(agent => (
                    <TableRow key={agent.rank}>
                      <TableCell className="font-mono font-bold text-[var(--lsd-primary)] text-lg">
                        #{agent.rank}
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-bold text-[var(--lsd-text-primary)] text-lg">
                            {agent.name}
                          </div>
                          <div className="text-sm text-[var(--lsd-text-secondary)] line-clamp-1">
                            {agent.description}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2 text-[var(--lsd-text-primary)]">
                          <Star size={16} weight="fill" className="text-[var(--lsd-warning)]" />
                          <span className="font-semibold">
                            {agent.stars > 0 ? agent.stars.toLocaleString() : '0'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2 text-[var(--lsd-text-primary)]">
                          <GitFork size={16} />
                          <span className="font-semibold">
                            {agent.forks > 0 ? agent.forks.toLocaleString() : '0'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <a
                          href={agent.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[var(--lsd-primary)] hover:underline font-semibold"
                        >
                          View
                          <ArrowSquareOut size={16} />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-[var(--lsd-spacing-largest)] text-center text-[var(--lsd-text-secondary)] text-sm">
          <p>Powered by @nipsys/lsd • Data from GitHub • Updated Dec 2024</p>
        </footer>
      </div>
    </main>
  );
}
