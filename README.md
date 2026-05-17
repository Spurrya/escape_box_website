# Kiwi Kingdom Toronto Escape

A modern React web app built with Vite, TypeScript, Tailwind CSS, shadcn/ui, and Radix UI. This project powers the Kiwi Kingdom Toronto Escape experience website.

---

## Project Structure

```
├── public/                # Static assets (images, icons, manifest, etc.)
│   └── lovable-uploads/   # Uploaded images for the site
├── src/                   # Main source code
│   ├── components/        # Reusable UI and feature components
│   │   ├── ui/            # UI primitives (buttons, toasts, tooltips, etc.)
│   │   ├── booking/       # Booking-related components
│   │   ├── episodes/      # Episode preview and related components
│   │   ├── ...            # Other feature folders
│   │   └── *.tsx          # Standalone components (Navbar, Footer, etc.)
│   ├── hooks/             # Custom React hooks (e.g., use-mobile, use-toast)
│   ├── lib/               # Utility functions (e.g., utils.ts)
│   ├── pages/             # Route-based pages (Index, About, Experiences, etc.)
│   ├── types/             # TypeScript type definitions (e.g., booking.ts)
│   ├── App.tsx            # Main app component, sets up routing/providers
│   ├── main.tsx           # Entry point, renders <App />
│   ├── index.css          # Global styles (Tailwind)
│   └── App.css            # App-specific styles
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig*.json         # TypeScript configs
└── ...
```

---

## Key Files & Folders

- **public/**: Static files served as-is. Place images, icons, and manifest here.
- **src/components/**: All reusable UI and feature components. Subfolders group related components.
- **src/pages/**: Each file is a route/page (e.g., `/about`, `/experiences`).
- **src/hooks/**: Custom React hooks for shared logic.
- **src/lib/**: Utility/helper functions.
- **src/types/**: TypeScript types/interfaces for props, data, etc.
- **src/App.tsx**: Sets up React Router, global providers (React Query, tooltips, toasts).
- **src/main.tsx**: App entry point, renders the root React component.
- **package.json**: Scripts, dependencies, and project info.
- **vite.config.ts**: Vite build/dev server config, aliases, plugins.
- **tailwind.config.ts**: Tailwind CSS setup.

---

## Scripts

Run these in your project root:

- `npm install` — Install dependencies
- `npm run dev` — Start local dev server (usually at http://localhost:8080)
- `npm run build` — Build for production (output in `dist/`)
- `npm run preview` — Preview the production build locally
- `npm run lint` — Lint code with ESLint

---

## Development & Deployment

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open the local URL shown in the terminal (default: http://localhost:8080).
3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.
4. **Preview production build:**
   ```bash
   npm run preview
   ```
5. **Deploy:**
   - Upload the contents of `dist/` to your static hosting provider (e.g., Vercel, Netlify, GitHub Pages).

---

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (build tool)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- [shadcn/ui](https://ui.shadcn.com/) (UI components)
- [Radix UI](https://www.radix-ui.com/) (accessible UI primitives)
- [React Query](https://tanstack.com/query/latest) (data fetching/caching)
- [React Router](https://reactrouter.com/) (routing)

---

## Notes

- Use the `@/` alias to import from `src/` (e.g., `import { Navbar } from "@/components/Navbar"`).
- Static assets in `public/` are available at the root URL (e.g., `/favicon.ico`).
- For custom routes, add new files to `src/pages/` and update `App.tsx` routing if needed.

---

## Contact

For questions or contributions, open an issue or pull request.
