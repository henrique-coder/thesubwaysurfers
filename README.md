<div align="center">
  <img src="public/logo.png" alt="Subway Surfers" width="80" height="80">
  <h1>The Subway Surfers</h1>
  <p>Play Subway Surfers Berlin online, fast and free</p>

  <p>
    <img src="https://img.shields.io/github/created-at/henrique-coder/thesubwaysurfers?style=flat-square&logoColor=white&labelColor=0a0a0a&color=3b82f6" alt="Created At">
    <img src="https://img.shields.io/github/last-commit/henrique-coder/thesubwaysurfers?style=flat-square&logoColor=white&labelColor=0a0a0a&color=22c55e" alt="Last Commit">
    <img src="https://img.shields.io/github/license/henrique-coder/thesubwaysurfers?style=flat-square&logoColor=white&labelColor=0a0a0a&color=ef4444" alt="License">
  </p>
</div>

## Features

- Instant play - game loads directly, no extra clicks
- Berlin map - classic edition
- Fullscreen mode for immersive gameplay
- Zero JS bundle - static HTML, ultra fast loading
- Responsive design for all devices
- No external tracking or analytics

## Tech Stack

- [Astro](https://astro.build/) - Static site generator with zero JavaScript by default
- Modern CSS with CSS Variables
- Vanilla JavaScript for UI interactions

## Project Structure

```
src/
└── pages/
    └── index.astro              # Main page with game iframe and UI logic
public/
├── logo.png                     # App logo (28x28 in header)
├── favicon.ico                  # Browser favicon
├── favicon-16x16.png            # 16x16 favicon
├── favicon-32x32.png            # 32x32 favicon
├── apple-touch-icon.png         # iOS home screen icon (180x180)
├── android-chrome-192x192.png   # Android icon (192x192)
├── android-chrome-512x512.png   # Android splash icon (512x512)
└── site.webmanifest             # PWA manifest
astro.config.mjs                 # Astro configuration
```

## Getting Started

```bash
git clone https://github.com/henrique-coder/thesubwaysurfers.git
cd thesubwaysurfers
npm install
npm run dev
```

## Build

```bash
npm run build    # Generate static files in dist/
npm run preview  # Preview production build locally
```

## How It Works

1. **Game Embedding**: Berlin map loaded via secure iframe with sandbox restrictions
2. **Auto-hide Bar**: Header bar hides after 3 seconds of inactivity
3. **Fullscreen**: Native Fullscreen API for immersive gameplay
4. **Loading State**: Spinner shown until iframe content loads

## Contributing

Contributions are welcome! Feel free to [open an issue](https://github.com/henrique-coder/thesubwaysurfers/issues/new) or submit a pull request.

## License

MIT License. See [LICENSE](LICENSE) file for details.
