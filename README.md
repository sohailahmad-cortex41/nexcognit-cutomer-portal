# Nexcognit Customer Portal

A modern customer portal application built with React, TypeScript, and Vite. This application provides a comprehensive dashboard for managing agents, conversations, insights, and reports with real-time data visualization.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Authentication**: Secure login and session management
- **Dashboard**: Real-time analytics and KPIs
- **Agent Management**: View and manage agents with detailed information
- **Conversations**: Track and analyze customer conversations
- **Insights**: Data-driven insights and analytics
- **Reports**: Generate and download comprehensive reports
- **Notifications**: Real-time notifications system
- **Settings**: User preferences and account management
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Data Visualization**: Interactive charts and graphs

## 🛠 Tech Stack

- **Frontend Framework**: React 18+
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: Shadcn/ui
- **HTTP Client**: Axios
- **State Management**: Context API
- **Charting**: Recharts
- **Form Handling**: React Hook Form
- **Routing**: React Router

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Nexcognit_Customer_Portal
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory with the required environment variables:
   ```
   VITE_API_BASE_URL=your_api_endpoint
   VITE_ENV=development
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:5173`

## 🚀 Usage

### Running the Application

```bash
# Development mode with hot reload
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting (if configured)
pnpm lint
```

### Building for Production

```bash
pnpm build
```

This creates an optimized build in the `dist/` directory.

### Docker Deployment

The project includes Docker support for both development and production environments.

**Production (Built + Nginx)**
```bash
# Build and run
docker compose up --build

# Access at http://localhost:8081
```

**Development (Hot Reload)**
```bash
# Build and run with live code reloading
docker compose -f docker-compose.dev.yml up --build

# Access at http://localhost:5173
```

**Stop containers**
```bash
docker compose down
```

The production setup uses a multi-stage build with Nginx, while development mounts local files for hot reload.

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                 # Main app component
│   ├── routes.tsx              # Route definitions
│   ├── components/             # Reusable components
│   │   ├── charts/            # Chart components
│   │   ├── figma/             # Figma integration components
│   │   └── ui/                # UI component library (shadcn/ui)
│   ├── context/               # React context for state
│   ├── pages/                 # Page components
│   ├── services/              # API services
│   │   └── api/              # API endpoints
│   ├── types/                 # TypeScript type definitions
│   ├── data/                  # Mock data
│   ├── hooks/                 # Custom React hooks
│   └── utils/                 # Utility functions
├── assets/                    # Static assets
├── styles/                    # Global styles
└── main.tsx                   # Application entry point
```

## 🔐 Authentication

The application uses context-based authentication (`AuthContext`). Protected routes are handled via the `ProtectedRoute` component, requiring valid authentication tokens.

## 🎨 UI Components

All UI components are located in `src/app/components/ui/` and are based on Shadcn/ui. Available components include:
- Button, Card, Dialog, Form
- Table, Pagination, Tabs
- Input, Select, Textarea
- And many more...

## 🔄 State Management

Application state is managed using React Context API:
- **AuthContext**: Authentication state and user information
- **AgentContext**: Agent-related data and operations

## 📊 API Integration

API calls are handled through Axios with a base configuration in `src/app/services/api/axios.ts`. Service modules are organized by feature:
- `agents.ts` - Agent operations
- `conversations.ts` - Conversation management
- `dashboard.ts` - Dashboard data
- `insights.ts` - Analytics and insights
- `reports.ts` - Report generation
- And more...

## 🎯 Development Guidelines

Please refer to [Guidelines.md](./guidelines/Guidelines.md) for detailed development guidelines and best practices.

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For issues or questions, please contact the development team or create an issue in the repository.

---

**Last Updated**: February 2026
