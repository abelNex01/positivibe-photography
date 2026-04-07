# Positivibe Photography

Positivibe Photography is a high-end, editorial, and portrait photography portfolio designed to deliver a visually stunning, responsive, and tactile web experience. Engineered for performance and luxury aesthetics, this application uses a modern React stack to present carefully curated imagery, smooth animations, and premium visual storytelling.

## Features

- **Premium Design Aesthetics**: Implementation of a stark, elegant luxury UI featuring custom typography (Aboreto, Bastliga, Inter) and considered whitespace.
- **Fluid Animations**: Smooth page transitions, micro-interactions, and scroll-linked animations driven by Framer Motion and Lenis for a tactile, app-like feel.
- **Responsive Architecture**: Fully responsive layout tailored to all screen sizes, from mobile devices to ultrawide monitors.
- **Dynamic Routing**: Client-side routing achieved via `wouter` for instant page loads.
- **Advanced State Management**: Global context for Cart and Reservation modals, ensuring a seamless user experience across the entire session.
- **Optimized Performance**: Vite-powered build featuring manual chunk splitting to optimize caching and reduce Time to Interactive (TTI), along with WebP image asset usage.

## Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis](https://lenis.studiofreight.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives custom-styled for luxury aesthetics
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd positivibe-photography
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`.

## Deployment (Netlify)

This project is fully configured for deployment on Netlify as a Single Page Application (SPA). The necessary `_redirects` routing configuration is included in the `public/` directory.

### To Deploy on Netlify:

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Create a new site on Netlify and link it to your repository.
3. Configure the following build settings:
   - **Base directory**: `(leave empty)`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy the site.

Netlify will automatically detect the Vite build, utilize the `_redirects` file to handle client-side routing properly (preventing 404s on refresh), and serve your optimized chunks efficiently.

## Directory Structure Overview

- `/src/pages` - All route-level components (Home, Services, Contact, etc.)
- `/src/components` - Reusable UI elements and modals (Navbar, Footer, ReservationModal)
- `/src/assets` - Static assets including high-resolution images utilized across the site
- `/src/context` - React Context providers managing global application state
- `/public` - Favicons, metadata images, and server configurations (`_redirects`)

## License
Proprietary. All visual assets and code are owned by Positivibe Photography.
