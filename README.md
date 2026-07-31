# ERP System

A comprehensive, cloud-native ERP (Enterprise Resource Planning) system built with Next.js, TypeScript, and Supabase.

## 🚀 Features

- **Financial Management** - Invoicing, accounts payable/receivable, chart of accounts, journal entries
- **Inventory Management** - Products, warehouses, stock tracking, low stock alerts
- **Human Resources** - Employee directory, departments, attendance, leave management
- **CRM** - Contact management, leads pipeline, activity tracking
- **Sales Management** - Orders, quotes, delivery tracking
- **Purchasing** - Vendor management, purchase orders, goods receipts
- **Project Management** - Projects, tasks, time tracking
- **Reporting & Analytics** - Financial reports, sales analytics, business intelligence

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 (App Router), TypeScript, TailwindCSS |
| UI Components | shadcn/ui (Radix UI) |
| Backend/Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| Charts | Recharts |
| State Management | React Query, Zustand |
| Forms | React Hook Form, Zod |
| Deployment | Vercel |

## 📁 Project Structure

```
erp-system/
├── src/
│   ├── app/
│   │   ├── (auth)/           # Authentication pages
│   │   ├── (dashboard)/      # Dashboard module pages
│   │   └── api/              # API routes
│   ├── components/
│   │   ├── ui/               # UI components
│   │   └── layout/           # Layout components
│   ├── lib/
│   │   ├── supabase/          # Supabase clients
│   │   └── utils.ts          # Utility functions
│   ├── hooks/                 # Custom hooks
│   └── types/                 # TypeScript types
├── supabase/
│   ├── migrations/           # Database migrations
│   └── functions/             # Edge functions
└── docs/                      # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd erp-system
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Update `.env.local` with your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

4. Set up the database:
   - Go to [Supabase](https://supabase.com) and create a new project
   - Run the migration in `supabase/migrations/001_initial_schema.sql`
   - Configure Row Level Security (RLS) policies

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy!

### Database Setup

1. Create a Supabase project
2. Go to SQL Editor in Supabase Dashboard
3. Run the migration from `supabase/migrations/001_initial_schema.sql`

## 📖 Documentation

- [PRD Document](./prd-general-erp.md) - Detailed product requirements
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## 🧪 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type check
```

### Code Style

- TypeScript strict mode
- ESLint + Prettier
- Conventional commits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details
