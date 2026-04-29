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
    <main className="flex min-h-screen flex-col items-center justify-center p-[var(--lsd-spacing-xl)]">
      <div className="mx-auto max-w-4xl space-y-[var(--lsd-spacing-xl)]">
        {/* Hero Section */}
        <div className="text-center space-y-[var(--lsd-spacing-md)]">
          <h1 className="mb-[var(--lsd-spacing-md)] text-4xl font-bold">
            Welcome to LSD + Next.js
          </h1>
          <p className="mb-[var(--lsd-spacing-lg)] text-lg text-[var(--lsd-muted-foreground)]">
            A modern design system integrated with Next.js, TypeScript, and TailwindCSS v4.
            Featuring 39 accessible, monochromatic components.
          </p>
          <div className="flex gap-[var(--lsd-spacing-sm)] justify-center">
            <Button variant="filled">Get Started</Button>
            <Button variant="outlined">Learn More</Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-[var(--lsd-spacing-md)] md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-muted-foreground)]">
                Fully keyboard navigable with ARIA attributes built-in.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monochromatic</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-muted-foreground)]">
                Content-first design with semantic color tokens.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Radix UI</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--lsd-muted-foreground)]">
                Built on top of Radix UI primitives for reliability.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Alerts and Badges Section */}
        <div className="space-y-[var(--lsd-spacing-md)]">
          <h2 className="text-2xl font-bold">Component Showcase</h2>

          <Alert>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert using LSD semantic color tokens.
            </AlertDescription>
          </Alert>

          <div className="flex gap-[var(--lsd-spacing-sm)] flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outlined">Outlined</Badge>
            <Badge variant="dot">Dot</Badge>
          </div>
        </div>
      </div>
    </main>
  );
}
