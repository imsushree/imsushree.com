# imsushree.com

Welcome to the repository for **imsushree.com**, the frontend source code for my personal website. This project is built with modern web technologies, focusing on performance, aesthetics, and excellent developer experience.

## 🛠️ Tech Stack

- **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Typography:** [JetBrains Mono Variable](https://fontsource.org/fonts/jetbrains-mono)
- **Linting & Formatting:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) & [Oxcfmt](https://oxc.rs/)
- **Icons:** [Heroicons](https://heroicons.com/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imsushree/imsushree.com.git
   cd imsushree.com
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## 📜 Available Scripts

- `npm run dev`: Starts the local development server with Hot Module Replacement (HMR).
- `npm run build`: Type-checks and builds the production-ready application.
- `npm run lint`: Runs Oxlint to quickly analyze code for issues.
- `npm run format`: Runs Oxfmt to format the codebase.
- `npm run preview`: Serves the production build folder locally for testing.

## 📐 Coding Standards

To maintain consistency, we follow strict coding guidelines:
- **Architecture:** Use small, single-responsibility functional components.
- **Styling:** Rely entirely on Tailwind CSS utility classes; avoid inline styles.
- **Shadcn Primitives:** Do not modify files in `src/components/ui`. Treat them as read-only base primitives.
- **Iconography:** Use `@heroicons/react` across the app. Use **24x24 Outline** icons for general UI and **20x20 Solid** icons for dense UI areas (e.g., inside buttons).

## 📁 Project Structure

```text
imsushree.com/
├── public/              # Publicly accessible static assets
├── src/                 # Source code
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui building blocks
│   ├── lib/             # Helper functions (e.g., utils.ts for Tailwind merging)
│   ├── App.tsx          # Root application component
│   ├── index.css        # Global CSS, Tailwind v4 theme, and font imports
│   └── main.tsx         # React DOM rendering entry point
├── AGENTS.md            # Guidelines for AI coding assistants
├── components.json      # shadcn/ui configuration
├── .oxfmtrc.json        # Oxfmt code formatting rules
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## 📄 License
This project is licensed under the [MIT License](LICENSE).
