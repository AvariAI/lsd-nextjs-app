export interface Platform {
  rank: number;
  name: string;
  repository: string;
  stars: number;
  forks: number;
  contributors: number;
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
    stars: 366000,
    forks: 28500,
    contributors: 412,
    lastCommit: '2026-04-29',
    language: 'TypeScript',
    channels: [
      'WhatsApp',
      'Telegram',
      'Discord',
      'Slack',
      'Signal',
      'iMessage',
      'Matrix',
      'Teams',
      'WeChat',
      'QQ',
      'IRC',
      'LINE',
      'Feishu',
      'Email',
      'SMS',
    ],
    channelCount: 25,
    description:
      'The most popular personal AI assistant. Unified gateway connecting 25+ messaging platforms with Docker deployment and companion apps.',
    url: 'https://github.com/openclaw/openclaw',
  },
  {
    rank: 2,
    name: 'Hermes Agent',
    repository: 'nousresearch/hermes-agent',
    stars: 125000,
    forks: 18600,
    contributors: 89,
    lastCommit: '2026-04-28',
    language: 'TypeScript',
    channels: [
      'Telegram',
      'Discord',
      'Slack',
      'WhatsApp',
      'Signal',
      'Matrix',
      'Email',
      'SMS',
      'DingTalk',
      'Feishu',
      'WeCom',
    ],
    channelCount: 15,
    description:
      'Self-improving AI agent by Nous Research with skills-based architecture, FTS5 memory, and 6 terminal backends.',
    url: 'https://github.com/nousresearch/hermes-agent',
  },
  {
    rank: 3,
    name: 'nanobot',
    repository: 'HKUDS/nanobot',
    stars: 41300,
    forks: 7200,
    contributors: 47,
    lastCommit: '2026-04-27',
    language: 'Python',
    channels: ['Telegram', 'Discord', 'WeChat', 'Feishu', 'Slack', 'Email', 'Matrix'],
    channelCount: 7,
    description:
      'Ultra-lightweight personal AI agent (~3,400 lines) from HKUDS. Clean, readable codebase inspired by OpenClaw.',
    url: 'https://github.com/HKUDS/nanobot',
  },
  {
    rank: 4,
    name: 'ZeroClaw',
    repository: 'zeroclaw-labs/zeroclaw',
    stars: 30800,
    forks: 4500,
    contributors: 34,
    lastCommit: '2026-04-19',
    language: 'Rust',
    channels: ['Discord', 'Telegram', 'Matrix', 'Email', 'Webhooks', 'CLI', 'Voice'],
    channelCount: 30,
    description:
      'Rust-based personal AI assistant with security-first design. Single binary, OS-level sandboxing, minimal footprint (~6.6MB).',
    url: 'https://github.com/zeroclaw-labs/zeroclaw',
  },
  {
    rank: 5,
    name: 'NanoClaw',
    repository: 'qwibitai/nanoclaw',
    stars: 28100,
    forks: 12700,
    contributors: 56,
    lastCommit: '2026-04-25',
    language: 'Python',
    channels: [
      'WhatsApp',
      'Telegram',
      'Discord',
      'Slack',
      'Teams',
      'iMessage',
      'Matrix',
      'WeChat',
      'Gmail',
    ],
    channelCount: 9,
    description:
      'Lightweight OpenClaw alternative with container-isolated agents. Security-focused with Claude Agent SDK integration.',
    url: 'https://github.com/qwibitai/nanoclaw',
  },
  {
    rank: 6,
    name: 'Leon AI',
    repository: 'leon-ai/leon',
    stars: 17000,
    forks: 1400,
    contributors: 78,
    lastCommit: '2026-04-20',
    language: 'TypeScript',
    channels: ['Web UI', 'Voice (TTS/STT)'],
    channelCount: 2,
    description:
      'One of the earliest open-source personal assistants. Currently in 2.0 Developer Preview with agentic execution modes.',
    url: 'https://github.com/leon-ai/leon',
  },
  {
    rank: 7,
    name: 'QwenPaw',
    repository: 'agentscope-ai/QwenPaw',
    stars: 16100,
    forks: 2200,
    contributors: 42,
    lastCommit: '2026-04-28',
    language: 'Python',
    channels: ['DingTalk', 'Feishu', 'WeChat', 'Discord', 'Telegram', 'QQ', 'iMessage'],
    channelCount: 6,
    description:
      'Personal AI assistant from Alibaba AgentScope. Desktop app, one-click cloud deployment, strong Chinese ecosystem support.',
    url: 'https://github.com/agentscope-ai/QwenPaw',
  },
];
