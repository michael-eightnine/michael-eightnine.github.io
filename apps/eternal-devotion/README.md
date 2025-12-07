# an eternal devotion

A digital art gallery showcasing watercolor paintings and prose. A spiritual successor to the Hometown [dis]Advantage projects.

**Live:** [https://michael-eightnine.github.io/eternal-devotion/](https://michael-eightnine.github.io/eternal-devotion/)

## Tech Stack

- **React 19.0.0** - UI framework
- **TypeScript 5.6.2** - Type-safe development
- **React Router 7.3.0** - Client-side routing
- **Sass (SCSS)** - Styling with SCSS modules
- **Vite 7.2.6** - Build tooling
- **Sharp** - Image optimization

## Features

### Image Processing

- Custom build script (`generateImages`) for image optimization
- Uses Sharp for high-quality image resizing and format conversion
- Generates responsive image variants for different screen sizes

### Design

- Minimalist black background to showcase artwork
- Typography-focused layout
- Responsive image display
- Contemplative browsing experience

## Project Structure

```
src/
├── app/              # Main application components
├── content/          # Content and artwork data
├── root.scss         # Global styles
└── root.tsx          # Application entry point
```

## Development

```bash
# From monorepo root
yarn dev:eternal-devotion

# From this directory
yarn install
yarn dev
```

## Building

```bash
# Generate optimized images
yarn generateImages

# Build for production
yarn build
```
