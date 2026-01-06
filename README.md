# TravelTrucks - Camper Rental & Sales

TravelTrucks is a modern web application for finding and booking campervans. Adventure seekers can browse a wide catalog of vehicles, filter them by features and location, and book their next road trip destination.

## 🚀 Live Demo
[Link to your deployment if available]

## ✨ Features

- **Dynamic Catalog**: Browse a variety of campers with detailed information.
- **Advanced Filtering**: Filter by location, vehicle equipment (AC, Kitchen, Bathroom, etc.), and vehicle type (Van, Fully Integrated, Alcove).
- **Favorites System**: Save your favorite campers for later viewing.
- **Interactive Booking**: Seamless date range selection with a custom-styled calendar.
- **Detailed Camper Pages**: Full photo gallery, equipment lists, and user reviews for every vehicle.
- **Responsive Design**: optimized for both desktop and mobile devices.
- **SEO Optimized**: Dynamic metadata for all pages, including individual camper details.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Vanilla CSS Modules](https://github.com/css-modules/css-modules) for component-level styling and [clsx](https://github.com/lukeed/clsx) for conditional classes.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) for global stores (campers, favorites, booking forms).
- **API Client**: [Axios](https://axios-http.com/) for data fetching.
- **Form Handling & Notifications**: [React Hot Toast](https://react-hot-toast.com/) for user-friendly notifications.
- **Date Picking**: [React Datepicker](https://react-datepicker.com/) with a custom implementation for portals and range selection.
- **Icons**: Custom SVG Sprite integration.
- **Fonts**: [Next Font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) using **Inter**.

## 📦 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- pnpm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd traveltrucks_career_hw1
    ```

2.  **Install dependencies**:
    ```bash
    pnpm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root directory and add your API base URL:
    ```env
    NEXT_PUBLIC_API_URL=https://your-mock-api.com
    ```

4.  **Run the development server**:
    ```bash
    pnpm dev
    ```

5.  **Build for production**:
    ```bash
    pnpm build
    pnpm start
    ```

## 📂 Project Structure

- `app/`: Next.js App Router (pages and layouts).
- `app/components/`: Reusable UI components and page sections.
- `app/store/`: Zustand state management stores.
- `app/services/`: API client and data fetching functions.
- `app/types/`: TypeScript interfaces and types.
- `public/`: Static assets (SVG sprite, favicon, images).
- `app/globals.css`: Global design system and external library overrides.

## 📄 License
This project is for educational/career purposes.
