# AlgoPlayground

An interactive visualizer for sorting algorithms — watch them execute step by step instead of only reading the code. Built with React, Vite, and Tailwind CSS. Fourth portfolio project.

## Current Features

- Random array generation, displayed as vertical bars
- Adjustable array size (10–100 elements)
- Speed control (used once algorithms are added)
- Responsive layout — controls stack on narrow screens

## Coming Next

- **Bubble Sort** — step-by-step visualization with comparison and swap highlighting
- **Selection Sort** and **Insertion Sort**
- Start / pause / reset playback controls
- Algorithm info: time and space complexity, plain-language explanation
- Optional: Merge Sort and Quick Sort, to show O(n²) vs O(n log n) visually

## Tech Stack

- React
- Vite
- Tailwind CSS

## Project Structure

```
src/
  components/    BarVisualizer, ControlPanel
  hooks/         useArray.js — array generation, size and speed state
  App.jsx        page layout
  main.jsx       React entry point
```

## Running Locally

```bash
npm install
npm run dev
```

## Roadmap

- ✅ **Phase 0 — Planning:** project setup with React, Vite, Tailwind
- ✅ **Phase 1 — Basic Visualizer:** random array, bars, size and speed controls, responsive layout
- **Phase 2 — Bubble Sort**
- **Phase 3 — Selection Sort**
- **Phase 4 — Insertion Sort**
- **Phase 5 — Optional:** Merge Sort, Quick Sort
- **Phase 6 — Polish:** animations, info cards, accessibility
- **Phase 7 — Portfolio:** screenshots, deployment, live demo

Scope is intentionally focused: a polished sorting visualizer first. Graph algorithms and data structures come only after that is complete.