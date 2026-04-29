'use client';

import { Button } from '@nipsys/lsd';
import { ArrowRight, ChartBar, Lightning, Sparkle } from '@phosphor-icons/react';
import Link from 'next/link';

export default function Page() {
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

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <section className="mb-[var(--lsd-spacing-largest)] text-center">
          <h1 className="text-[var(--lsd-text-primary)] text-5xl font-bold mb-[var(--lsd-spacing-base)]">
            LSD Design System
          </h1>
          <p className="text-[var(--lsd-text-secondary)] text-xl max-w-2xl mx-auto">
            Modern design system with Next.js, TypeScript, and TailwindCSS v4
          </p>
        </section>

        {/* Navigation Cards */}
        <section className="space-y-[var(--lsd-spacing-large)]">
          {/* Standard Leaderboard */}
          <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg p-[var(--lsd-spacing-large)]">
            <div className="flex items-start gap-[var(--lsd-spacing-base)] mb-[var(--lsd-spacing-base)]">
              <div className="text-[var(--lsd-primary)]">
                <ChartBar size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-2">
                  Standard Leaderboard
                </h2>
                <p className="text-[var(--lsd-text-secondary)] text-sm">
                  Classic table-based layout with platform rankings, GitHub metrics, and channel
                  support
                </p>
              </div>
            </div>
            <Link href="/leaderboard">
              <Button variant="outlined">
                View Standard Leaderboard
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Creative Leaderboard v1 */}
          <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg p-[var(--lsd-spacing-large)]">
            <div className="flex items-start gap-[var(--lsd-spacing-base)] mb-[var(--lsd-spacing-base)]">
              <div className="text-[var(--lsd-primary)]">
                <Lightning size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-2">
                  Creative Leaderboard
                </h2>
                <p className="text-[var(--lsd-text-secondary)] text-sm">
                  Experimental grid layout with visual cards featuring LSD component system
                </p>
              </div>
            </div>
            <Link href="/leaderboard-creative">
              <Button variant="outlined">
                View Creative Leaderboard
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {/* Creative Leaderboard v2 */}
          <div className="bg-[var(--lsd-surface)] border border-[var(--lsd-border)] rounded-lg p-[var(--lsd-spacing-large)]">
            <div className="flex items-start gap-[var(--lsd-spacing-base)] mb-[var(--lsd-spacing-base)]">
              <div className="text-[var(--lsd-primary)]">
                <Sparkle size={32} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)] mb-2">
                  Creative Leaderboard v2
                </h2>
                <p className="text-[var(--lsd-text-secondary)] text-sm">
                  Premium retro design with comprehensive platform list, champion highlighting, and
                  enhanced LSD components
                </p>
              </div>
            </div>
            <Link href="/leaderboard-creative-2">
              <Button variant="outlined">
                Creative Leaderboard v2
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-[var(--lsd-spacing-largest)] text-center text-[var(--lsd-text-secondary)] text-sm">
          <p>
            Powered by <strong>@nipsys/lsd</strong> • Data from GitHub API • Updated Dec 2024
          </p>
        </footer>
      </div>
    </main>
  );
}
