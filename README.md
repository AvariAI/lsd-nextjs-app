# LSD + Next.js Demo

A modern design system demo showcasing [LSD (@nipsys/lsd)](https://lsd.nipsys.dev) integrated with Next.js, TypeScript, and TailwindCSS v4.

## 🚀 Live Demo

Visit the demo site: https://avariai.github.io/lsd-nextjs-app/

## ✨ Features

- **LSD Components**: Demo of multiple LSD components (Button, Card, Badge, Alert)
- **Type-Safe**: Full TypeScript integration with LSD type definitions
- **Modern Stack**: Next.js 16, React 19, TailwindCSS v4
- **Quality Gates**: Biome.js linting and Lefthook git hooks
- **Static Export**: Optimized for GitHub Pages deployment

## 🛠️ Tech Stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript 5+
- TailwindCSS v4
- LSD (@nipsys/lsd) 1.0.1
- Biome.js (linting/formatting)
- Lefthook (git hooks)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AvariAI/lsd-nextjs-app.git
cd lsd-nextjs-app

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🏗️ Building

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Quality Gates

The project uses Lefthook with pre-commit and pre-push hooks:

- **Pre-commit**: Runs Biome linting - blocks commits with lint errors
- **Pre-push**: Runs build - blocks push if build fails

## 📝 Conventional Commits

The project uses Commitlint with conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Test additions/changes
- `build:` Build system changes
- `ci:` CI/CD changes
- `chore:` Maintenance tasks

## 🎨 LSD Usage

The demo follows LSD conventions:

```tsx
// LSD spacing variables (not Tailwind numbers)
className="mt-[var(--lsd-spacing-lg)]"

// LSD color tokens (not hex values)
className="text-[var(--lsd-primary)]"

// Proper icon suffix
import { CheckIcon } from '@phosphor-icons/react'

// Button variants (outlined, not outline)
<Button variant="outlined">Click me</Button>

// Badge variants
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Error</Badge>
```

## 🚀 Deployment

The project is configured for GitHub Pages:

- Static export enabled in `next.config.ts`
- Base path set to `/lsd-nextjs-app`
- Deployed from the `main` branch

Manual deployment:

```bash
# Build the static export
npm run build

# Commit and push
git add .
git commit -m "feat: deploy update"
git push origin main
```

## 📄 License

MIT License - see LICENSE file for details

## 🔗 Links

- [LSD Documentation](https://lsd.nipsys.dev)
- [LSD GitHub Repository](https://github.com/nipsysdev/lsd)
- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

---

Built with ❤️ using [LSD](https://lsd.nipsys.dev) - Substance over Spectacle
