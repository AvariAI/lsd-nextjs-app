export interface Platform {
  rank: number;
  name: string;
  repository: string;
  stars: number;
  forks: number;
  lastCommit: string;
  language: string;
  channels: string[];
  channelCount: number;
  description: string;
  url: string;
}

export const platforms: Platform[] = [
  {
    rank: 1,
    name: 'OpenClaw',
    repository: 'openclaw/openclaw',
    stars: 364900,
    forks: 28450,
    lastCommit: '2024-12-15',
    language: 'TypeScript',
    channels: ['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Signal', 'Matrix', 'Email', 'SMS'],
    channelCount: 8,
    description:
      'The original multi-channel AI gateway with unified messaging architecture. Mature ecosystem with 50+ platform connectors.',
    url: 'https://github.com/openclaw/openclaw',
  },
  {
    rank: 2,
    name: 'Hermes Agent',
    repository: 'nousresearch/hermes-agent',
    stars: 120581,
    forks: 14230,
    lastCommit: '2024-12-10',
    language: 'TypeScript',
    channels: ['Telegram', 'Discord', 'Slack', 'Matrix', 'Email', 'Webhook'],
    channelCount: 6,
    description:
      'Self-improving AI agent with skills-based architecture. Growing capability and active development.',
    url: 'https://github.com/nousresearch/hermes-agent',
  },
  {
    rank: 3,
    name: 'Nanobot',
    repository: 'qwibitai/nanobot',
    stars: 41193,
    forks: 3280,
    lastCommit: '2024-11-28',
    language: 'Python',
    channels: ['Telegram', 'Discord', 'Signal', 'Matrix', 'IRC', 'Email'],
    channelCount: 6,
    description:
      'Lightweight personal AI assistant with container-based security and minimal resource footprint.',
    url: 'https://github.com/qwibitai/nanobot',
  },
  {
    rank: 4,
    name: 'ZeroClaw',
    repository: 'zerocrew/zeroclaw',
    stars: 30750,
    forks: 2150,
    lastCommit: '2024-11-20',
    language: 'Go',
    channels: ['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Matrix'],
    channelCount: 5,
    description:
      'Ultra-lightweight alternative to OpenClaw written in Go. Single-binary deployment with embedded AI models.',
    url: 'https://github.com/zerocrew/zeroclaw',
  },
  {
    rank: 5,
    name: 'NanoClaw',
    repository: 'qwibitai/nanoclaw',
    stars: 28316,
    forks: 1890,
    lastCommit: '2024-11-25',
    language: 'Python',
    channels: [
      'Telegram',
      'Discord',
      'Slack',
      'WhatsApp',
      'Signal',
      'Matrix',
      'Email',
      'SMS',
      'IRC',
      'WeChat',
      'Line',
      'Facebook Messenger',
      'Webhook',
    ],
    channelCount: 13,
    description:
      'Container-based security-focused gateway with 23+ platform connectors. Minimal attack surface.',
    url: 'https://github.com/qwibitai/nanoclaw',
  },
  {
    rank: 6,
    name: 'PicoClaw',
    repository: 'sipeed/picoclaw',
    stars: 28596,
    forks: 1240,
    lastCommit: '2024-12-01',
    language: 'Go',
    channels: [
      'Telegram',
      'Discord',
      'Slack',
      'WhatsApp',
      'Signal',
      'Matrix',
      'Email',
      'IRC',
      'SMS',
      'Webhook',
    ],
    channelCount: 10,
    description:
      'Ultra-lightweight personal AI assistant (Go). Runs on embedded systems and low-power devices.',
    url: 'https://github.com/sipeed/picoclaw',
  },
  {
    rank: 7,
    name: 'Leon AI',
    repository: 'leon-ai/leon',
    stars: 17196,
    forks: 2840,
    lastCommit: '2024-10-15',
    language: 'TypeScript',
    channels: ['Telegram', 'Slack', 'Discord'],
    channelCount: 3,
    description:
      'Open-source personal assistant with voice capabilities and extensible skill system.',
    url: 'https://github.com/leon-ai/leon',
  },
  {
    rank: 8,
    name: 'QwenPaw',
    repository: 'agentscope-ai/qwenpaw',
    stars: 16120,
    forks: 980,
    lastCommit: '2024-11-30',
    language: 'Python',
    channels: ['Telegram', 'Discord', 'Slack', 'WhatsApp', 'Matrix'],
    channelCount: 5,
    description:
      'Personal AI assistant focused on Chinese language support with multi-platform gateway.',
    url: 'https://github.com/agentscope-ai/qwenpaw',
  },
  {
    rank: 9,
    name: 'LangBot',
    repository: 'langbot/langbot',
    stars: 15905,
    forks: 720,
    lastCommit: '2024-12-05',
    language: 'Python',
    channels: ['Telegram', 'Discord', 'Matrix', 'Email'],
    channelCount: 4,
    description: 'Lightweight chatbot with AI integration and simple deployment for personal use.',
    url: 'https://github.com/langbot/langbot',
  },
  {
    rank: 10,
    name: 'LettaBot',
    repository: 'letta-ai/lettabot',
    stars: 323,
    forks: 85,
    lastCommit: '2024-11-10',
    language: 'Python',
    channels: ['Telegram', 'Discord', 'Slack', 'Matrix', 'Email'],
    channelCount: 5,
    description:
      'Personal AI with persistent memory across platforms and self-improving capabilities.',
    url: 'https://github.com/letta-ai/lettabot',
  },
];
