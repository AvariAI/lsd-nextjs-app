'use client';

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@nipsys/lsd';

export default function Home() {
  return (
    <main className="min-h-screen p-[var(--lsd-spacing-largest)]">
      <div className="mx-auto max-w-4xl space-y-[var(--lsd-spacing-largest)]">
        {/* Hero Section */}
        <div className="text-center space-y-[var(--lsd-spacing-base)]">
          <h1 className="text-4xl font-bold text-[var(--lsd-text-primary)]">
            Welcome to LSD + Next.js
          </h1>
          <p className="text-lg text-[var(--lsd-text-secondary)]">
            A modern design system integrated with Next.js, TypeScript, and TailwindCSS v4.
            Featuring 39 accessible, monochromatic components.
          </p>
          <div className="flex gap-[var(--lsd-spacing-smaller)] justify-center">
            <Button variant="filled">Get Started</Button>
            <Button variant="outlined">Learn More</Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-[var(--lsd-spacing-base)] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-text-secondary)]">
                Fully keyboard navigable with ARIA attributes built-in.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monochromatic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-text-secondary)]">
                Content-first design with semantic color tokens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radix UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-text-secondary)]">
                Built on top of Radix UI primitives for reliability.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Component Showcase Section */}
        <div className="space-y-[var(--lsd-spacing-large)]">
          <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)]">Component Showcase</h2>

          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert using LSD semantic color tokens.
            </AlertDescription>
          </Alert>

          <div className="flex gap-[var(--lsd-spacing-smaller)] flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outlined">Outlined</Badge>
            <Badge variant="dot">Dot</Badge>
          </div>
        </div>

        {/* Button Variants Section */}
        <div className="space-y-[var(--lsd-spacing-base)]">
          <h2 className="text-2xl font-bold text-[var(--lsd-text-primary)]">Button Variants</h2>
          <div className="flex gap-[var(--lsd-spacing-smaller)] flex-wrap">
            <Button variant="filled">Filled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="success">Success</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
