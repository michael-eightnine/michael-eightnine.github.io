# Dungeon Crawl

An interactive text-based roguelike adventure game built with React.

**Live:** [https://michael-eightnine.github.io/dungeon-crawl/](https://michael-eightnine.github.io/dungeon-crawl/)

## Overview

A classic text-based dungeon crawler inspired by Fallout and Souls games.

## Tech Stack

- **React 19.0.0** - UI framework
- **TypeScript 5.6.2** - Type-safe development
- **Sass (SCSS)** - Styling with SCSS modules
- **Vite 7.2.6** - Build tooling

## Features

### Gameplay

- Text-based interface with interactive commands
- Simple progression based inventory

### Design

- Retro terminal aesthetic
- Minimalist black background
- Monospace typography for authentic feel
- Responsive layout for all devices

## Project Structure

```
src/
├── app/              # Game components and logic
├── root.scss         # Global styles
└── root.tsx          # Application entry point
```

## Development

```bash
# From monorepo root
yarn dev:dungeon-crawl

# From this directory
yarn install
yarn dev
```

## Building

```bash
# From monorepo root
yarn build:dungeon-crawl

# From this directory
yarn build
```
