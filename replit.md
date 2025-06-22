# OptiFlows - AI Voice Agent Agency for Healthcare

## Overview

OptiFlows is a full-stack web application for an AI voice agent agency specializing in healthcare practices. The application is built as a single-page marketing website targeting dentistry, concierge/primary care, and weight loss clinics. It features a modern, professional design with healthcare-focused messaging, HIPAA compliance emphasis, and comprehensive UI components designed to convert healthcare professionals.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and effects
- **State Management**: TanStack Query for server state management
- **Theme**: Next-themes for theme management (configured for dark mode)

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **API**: RESTful API with `/api` prefix
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Build System
- **Development**: Vite for fast development server and HMR
- **Build Tool**: Vite for frontend bundling, ESBuild for backend bundling
- **TypeScript**: Strict configuration with path mapping
- **Development Tools**: TSX for TypeScript execution, automatic restarts

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions (id, name, email, phone, company, message, created_at)
- **Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact`: Handle contact form submissions with validation
- Error handling with proper HTTP status codes and validation feedback

### Frontend Pages
- **Home Page**: Healthcare-focused marketing site with hero, problem identification, AI solution presentation, niche-specific benefits, process explanation, credibility section, testimonials, and contact sections
- **404 Page**: Custom not found page
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Healthcare Messaging**: Specialized content for dentistry, concierge care, and weight loss clinics

### UI Components
- Comprehensive component library based on shadcn/ui
- Custom components for service cards, testimonials, hero sections
- Interactive elements with hover effects and animations
- Floating contact button for improved UX

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using react-hook-form with Zod resolvers
   - POST request sent to `/api/contact` endpoint
   - Backend validates data and stores in PostgreSQL database
   - Success/error response returned to frontend

2. **Page Rendering**:
   - Vite serves static assets and handles routing
   - React components render with server-side data
   - Animations triggered on scroll and interaction
   - Mobile-responsive layout adjustments

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type checking
- **UI**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Fonts**: Google Fonts (Inter, Roboto)
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20 with web module
- **Development**: `npm run dev` starts the development server
- **Production Build**: `npm run build` creates optimized bundles
- **Production Start**: `npm run start` runs the production server
- **Port Configuration**: Internal port 5000, external port 80
- **Autoscale Deployment**: Configured for automatic scaling

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment flag (development/production)

### Build Process
1. Frontend assets built with Vite (optimized for production)
2. Backend bundled with ESBuild (ESM format, external packages)
3. Static files served from `dist/public`
4. Server runs from `dist/index.js`

## Changelog
- June 22, 2025. Initial setup
- June 22, 2025. Complete redesign for AI voice agent agency targeting healthcare practices (dentistry, concierge care, weight loss clinics)

## Recent Changes
- Migrated from Replit Agent to standard Replit environment
- Complete landing page redesign from workflow automation to healthcare-focused AI voice agents
- Added new sections: Problem identification, AI solution presentation, niche-specific benefits, 4-step process, credibility/trust building
- Updated hero section with HIPAA compliance messaging and healthcare-specific value propositions
- Redesigned testimonials with healthcare practice examples
- Implemented healthcare color palette (blues, greens) for trust and professionalism

## User Preferences

Preferred communication style: Simple, everyday language.