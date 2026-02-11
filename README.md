# IPTV-Z Channel Viewer

A modern IPTV channel viewer application built with Next.js 16 and integrated with Vercel Speed Insights for performance monitoring.

## Features

- 🎬 Browse IPTV channels from the Jio.m3u8 playlist
- ⚡ Built with Next.js 16 App Router for optimal performance
- 📊 Integrated with Vercel Speed Insights for real-time performance monitoring
- 🎨 Modern, responsive UI with gradient effects
- 🖼️ Channel logos with lazy loading
- 🔒 DRM scheme indicators

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joiptv/Iptv-z.git
cd Iptv-z
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Create a production build:

```bash
npm run build
# or
pnpm build
# or
yarn build
# or
bun build
```

### Start Production Server

```bash
npm start
# or
pnpm start
# or
yarn start
# or
bun start
```

## Vercel Speed Insights

This application includes Vercel Speed Insights integration for monitoring real-time performance metrics:

- **Core Web Vitals**: Track LCP, FID, CLS, and more
- **Real User Monitoring**: See how your app performs for actual users
- **Performance Dashboard**: View metrics in the Vercel dashboard

### Enabling Speed Insights on Vercel

1. Deploy your application to Vercel
2. Go to your project in the Vercel Dashboard
3. Navigate to the "Speed Insights" tab
4. Click "Enable" to activate Speed Insights

The `<SpeedInsights />` component is already integrated in the root layout (`app/layout.tsx`).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joiptv/Iptv-z)

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Speed Insights
│   ├── page.tsx            # Main page displaying channels
│   ├── page.module.css     # Page-specific styles
│   └── globals.css         # Global styles
├── Jio.m3u8               # IPTV channel data (JSON format)
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Vercel Speed Insights**: Performance monitoring
- **CSS Modules**: Scoped styling

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues and questions, please use the [GitHub Issues](https://github.com/joiptv/Iptv-z/issues) page.
