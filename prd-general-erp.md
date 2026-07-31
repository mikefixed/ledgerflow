# PRD: General-Purpose ERP System

## Introduction

A modular, cloud-native ERP system built on Supabase and Vercel, designed to serve businesses across industries. The system provides core business functionalities including Financial Management, Inventory, Human Resources, CRM, Sales, Purchasing, Project Management, and Reporting—packaged in an intuitive, responsive interface.

## Goals

- Provide a scalable ERP foundation that can adapt to various business types
- Deliver a responsive, modern UI accessible on desktop and mobile
- Enable rapid deployment with Supabase's managed infrastructure
- Support multi-tenancy for serving multiple organizations
- Ensure data security with row-level security (RLS) in Supabase
- Create a modular architecture allowing incremental feature development

## Architecture Overview

### Technology Stack

| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | Next.js 14+ (App Router) | React framework optimized for Vercel |
| Language | TypeScript | Type safety and better DX |
| UI Library | TailwindCSS + shadcn/ui | Modern, accessible components |
| Database | Supabase (PostgreSQL) | Primary database with RLS |
| Authentication | Supabase Auth | User authentication & management |
| Backend Logic | Supabase Edge Functions | Serverless API endpoints |
| State Management | React Query (TanStack Query) | Server state management |
| Forms | React Hook Form + Zod | Form handling & validation |
| Charts | Recharts | Business intelligence visualizations |

### Project Structure

```
/erp-system
├── /apps
│   └── /web                 # Next.js frontend
│       ├── /app             # App Router pages
│       ├── /components      # Reusable UI components
│       ├── /lib             # Utilities and Supabase client
│       ├── /hooks           # Custom React hooks
│       └── /types           # TypeScript type definitions
├── /packages
│   └── /shared              # Shared types and utilities
├── /supabase
│   ├── /migrations          # Database migrations
│   └── /functions           # Edge Functions
└── /docs                    # Documentation
```

---

## Core Modules

### 1. Organization & Access Control

**Purpose:** Manage organizations (tenants), users, roles, and permissions.

#### User Stories

### US-001: Organization Registration
**Description:** As a new business owner, I want to register my organization so I can start managing my business operations.

**Acceptance Criteria:**
- [ ] Users can sign up with email/password or OAuth (Google)
- [ ] New signup automatically creates an organization
- [ ] First user becomes the organization admin
- [ ] Email verification required before full access

### US-002: User Management
**Description:** As an organization admin, I want to invite team members so they can access the ERP.

**Acceptance Criteria:**
- [ ] Admin can invite users via email
- [ ] Invited users receive email with signup link
- [ ] Admin can assign roles (Admin, Manager, User, Viewer)
- [ ] Admin can deactivate/remove users

### US-003: Role-Based Access Control
**Description:** As a system, I want to enforce role-based permissions so users only access what they're authorized for.

**Acceptance Criteria:**
- [ ] Roles have predefined permission sets
- [ ] RLS policies restrict data access by organization
- [ ] UI elements hidden/disable based on permissions
- [ ] API returns 403 for unauthorized access attempts

---

### 2. Financial Management

**Purpose:** Handle accounting, invoicing, payments, and financial reporting.

#### User Stories

### US-101: Chart of Accounts
**Description:** As an accountant, I want to manage the chart of accounts so I can categorize all financial transactions.

**Acceptance Criteria:**
- [ ] Create/edit/delete accounts with type (Asset, Liability, Equity, Revenue, Expense)
- [ ] Hierarchical account structure (parent-child relationships)
- [ ] Account codes for easy identification
- [ ] Default accounts seeded on organization creation

### US-102: Journal Entries
**Description:** As an accountant, I want to record manual journal entries so I can track non-standard transactions.

**Acceptance Criteria:**
- [ ] Create journal entries with multiple line items
- [ ] Debits must equal credits for validation
- [ ] Entries include date, description, reference number
- [ ] Entries are immutable after posting (adjustments via reversing entries)

### US-103: Invoice Management
**Description:** As a salesperson, I want to create and send invoices so customers can pay for products/services.

**Acceptance Criteria:**
- [ ] Create invoices with line items, taxes, discounts
- [ ] Auto-generate invoice numbers (configurable format)
- [ ] Mark invoices as sent, paid, overdue, cancelled
- [ ] Record partial payments
- [ ] Send invoice via email (PDF attachment)

### US-104: Payment Recording
**Description:** As a cashier, I want to record customer payments so accounts receivable stays accurate.

**Acceptance Criteria:**
- [ ] Record payments against invoices
- [ ] Support multiple payment methods (cash, check, bank transfer, card)
- [ ] Auto-reconcile fully paid invoices
- [ ] Generate receipt for customer

### US-105: Financial Reports
**Description:** As a manager, I want to view financial reports so I can make informed business decisions.

**Acceptance Criteria:**
- [ ] Profit & Loss statement (date range selectable)
- [ ] Balance Sheet (as of date)
- [ ] Cash Flow statement
- [ ] Accounts Receivable aging report
- [ ] Accounts Payable aging report
- [ ] Export to PDF/CSV

---

### 3. Inventory Management

**Purpose:** Track products, stock levels, warehouses, and supply chain.

#### User Stories

### US-201: Product Catalog
**Description:** As an inventory manager, I want to maintain a product catalog so I can track all items my business sells or uses.

**Acceptance Criteria:**
- [ ] Create products with name, SKU, description, unit price
- [ ] Support product variants (size, color, etc.)
- [ ] Assign products to categories
- [ ] Set reorder points and reorder quantities
- [ ] Track cost price for margin calculations

### US-202: Warehouse Management
**Description:** As a warehouse manager, I want to manage multiple warehouses so I can track inventory across locations.

**Acceptance Criteria:**
- [ ] Create and manage warehouse locations
- [ ] View stock levels per warehouse
- [ ] Transfer stock between warehouses
- [ ] Track bin/shelf locations within warehouses

### US-203: Stock Operations
**Description:** As a stock clerk, I want to record stock movements so inventory stays accurate.

**Acceptance Criteria:**
- [ ] Record stock received (purchase orders)
- [ ] Record stock sold (sales orders)
- [ ] Record manual adjustments (with reason)
- [ ] Record stock damaged or expired
- [ ] All movements create audit trail

### US-204: Stock Alerts
**Description:** As an inventory manager, I want to receive low-stock alerts so I can reorder before running out.

**Acceptance Criteria:**
- [ ] Dashboard shows items below reorder point
- [ ] Notifications for critical stock levels
- [ ] Suggested reorder quantities based on settings

---

### 4. Human Resources

**Purpose:** Manage employees, attendance, payroll, and benefits.

#### User Stories

### US-301: Employee Directory
**Description:** As an HR manager, I want to maintain employee records so I have a complete roster of staff.

**Acceptance Criteria:**
- [ ] Create employee profiles with personal info, contact details
- [ ] Assign employees to departments and job positions
- [ ] Track employment dates and status (active, terminated)
- [ ] Store employment documents (contracts, certifications)

### US-302: Attendance Tracking
**Description:** As an HR manager, I want to track employee attendance so I can monitor punctuality and calculate pay.

**Acceptance Criteria:**
- [ ] Clock in/out functionality
- [ ] Manual attendance entry by admin
- [ ] View attendance calendar per employee
- [ ] Generate attendance reports

### US-303: Leave Management
**Description:** As an employee, I want to request time off so I can balance work and personal needs.

**Acceptance Criteria:**
- [ ] Submit leave requests (vacation, sick, personal)
- [ ] Manager approval workflow
- [ ] Track leave balances (accrued, used, remaining)
- [ ] Calendar view of approved leaves

### US-304: Payroll Processing
**Description:** As a payroll officer, I want to process monthly payroll so employees get paid correctly.

**Acceptance Criteria:**
- [ ] Define salary structure (base, allowances, deductions)
- [ ] Calculate gross pay from attendance and leave
- [ ] Process statutory deductions (tax, social security)
- [ ] Generate pay slips
- [ ] Record payment transactions

---

### 5. Customer Relationship Management (CRM)

**Purpose:** Manage leads, contacts, opportunities, and customer interactions.

#### User Stories

### US-401: Contact Management
**Description:** As a sales rep, I want to store customer contacts so I can track all communication with them.

**Acceptance Criteria:**
- [ ] Create contacts with name, email, phone, company
- [ ] Store interaction history (calls, emails, meetings)
- [ ] Tag and segment contacts
- [ ] Import contacts from CSV

### US-402: Lead Pipeline
**Description:** As a sales manager, I want to track leads through the sales funnel so I can forecast revenue.

**Acceptance Criteria:**
- [ ] Create leads with source, status, estimated value
- [ ] Drag-and-drop pipeline board
- [ ] Move leads through stages (New, Qualified, Proposal, Negotiation, Won, Lost)
- [ ] Track win/loss reasons

### US-403: Opportunity Management
**Description:** As a sales rep, I want to manage sales opportunities so I can close more deals.

**Acceptance Criteria:**
- [ ] Convert qualified leads to opportunities
- [ ] Link opportunities to contacts and products
- [ ] Set probability and expected close date
- [ ] Generate quotes from opportunities

### US-404: Email Integration
**Description:** As a user, I want to log emails to contacts so I have complete communication history.

**Acceptance Criteria:**
- [ ] Connect email accounts (Gmail, Outlook)
- [ ] Auto-log sent emails to contact timeline
- [ ] Create tasks from email threads

---

### 6. Sales Management

**Purpose:** Handle quotes, sales orders, deliveries, and after-sales service.

#### User Stories

### US-501: Quote Generation
**Description:** As a salesperson, I want to create quotes for prospects so they can review pricing before committing.

**Acceptance Criteria:**
- [ ] Create quotes with line items, quantities, prices
- [ ] Apply discounts (percentage or fixed)
- [ ] Add terms and conditions
- [ ] Set quote validity period
- [ ] Send quote via email (PDF)
- [ ] Convert quote to sales order

### US-502: Sales Order Processing
**Description:** As an order processor, I want to manage sales orders so customers receive their products.

**Acceptance Criteria:**
- [ ] Create orders from quotes or directly
- [ ] Check inventory availability
- [ ] Reserve stock for orders
- [ ] Track order status (Draft, Confirmed, Processing, Shipped, Delivered, Cancelled)
- [ ] Partial shipment support

### US-503: Delivery Management
**Description:** As a logistics coordinator, I want to manage deliveries so orders reach customers on time.

**Acceptance Criteria:**
- [ ] Create delivery orders from sales orders
- [ ] Assign delivery dates and routes
- [ ] Record delivery confirmation (signature capture)
- [ ] Track delivery status

### US-504: Sales Analytics
**Description:** As a sales manager, I want to view sales analytics so I can identify trends and top performers.

**Acceptance Criteria:**
- [ ] Sales by period (daily, weekly, monthly, yearly)
- [ ] Sales by product/category
- [ ] Sales by customer
- [ ] Sales rep performance
- [ ] Pipeline value forecast

---

### 7. Purchasing Management

**Purpose:** Handle vendor relationships, purchase orders, and procurement.

#### User Stories

### US-601: Vendor Management
**Description:** As a procurement manager, I want to manage vendor information so I can source products efficiently.

**Acceptance Criteria:**
- [ ] Create vendor profiles with contact info, payment terms
- [ ] Rate and review vendors
- [ ] Track purchase history with vendors
- [ ] Set default lead times per vendor

### US-602: Purchase Requisitions
**Description:** As an employee, I want to submit purchase requests so I can get approval for needed items.

**Acceptance Criteria:**
- [ ] Submit requisitions with items, quantities, estimated cost
- [ ] Manager approval workflow
- [ ] Budget checking before approval
- [ ] Convert approved requisitions to purchase orders

### US-603: Purchase Orders
**Description:** As a purchaser, I want to create purchase orders so vendors know what to deliver.

**Acceptance Criteria:**
- [ ] Create POs with line items from approved requisitions
- [ ] Auto-calculate totals with taxes
- [ ] Send PO to vendor via email
- [ ] Track PO status (Draft, Sent, Confirmed, Partially Received, Received, Cancelled)

### US-604: Goods Receipt
**Description:** As a receiving clerk, I want to record incoming goods so inventory stays accurate.

**Acceptance Criteria:**
- [ ] Match receipt against purchase order
- [ ] Record received quantities (full or partial)
- [ ] Flag discrepancies (shortages, damages)
- [ ] Update inventory on receipt confirmation

### US-605: Vendor Invoices
**Description:** As an accountant, I want to process vendor invoices so I can manage payables.

**Acceptance Criteria:**
- [ ] Record vendor invoices
- [ ] Match invoices against POs and receipts
- [ ] Track payment status
- [ ] Schedule payments based on due dates

---

### 8. Project Management

**Purpose:** Plan, execute, and track projects with tasks, resources, and timelines.

#### User Stories

### US-701: Project Setup
**Description:** As a project manager, I want to create projects so I can organize work and track progress.

**Acceptance Criteria:**
- [ ] Create projects with name, description, dates
- [ ] Assign project manager and team members
- [ ] Set project budget and milestones
- [ ] Link to customers/contacts

### US-702: Task Management
**Description:** As a team member, I want to manage tasks so I can complete my work efficiently.

**Acceptance Criteria:**
- [ ] Create tasks with assignee, due date, priority
- [ ] Break tasks into subtasks
- [ ] Track time spent on tasks
- [ ] Task comments and file attachments
- [ ] Kanban board and list views

### US-703: Gantt Chart
**Description:** As a project manager, I want to visualize project timelines so I can identify conflicts and delays.

**Acceptance Criteria:**
- [ ] Display tasks on timeline
- [ ] Show dependencies between tasks
- [ ] Highlight critical path
- [ ] Drag to adjust dates

### US-704: Project Billing
**Description:** As a project manager, I want to bill clients for project work so the company gets paid.

**Acceptance Criteria:**
- [ ] Track billable hours and expenses
- [ ] Generate invoices from project
- [ ] Compare actual vs estimated costs
- [ ] Calculate project profitability

---

### 9. Dashboard & Reporting

**Purpose:** Provide at-a-glance business overview and advanced analytics.

#### User Stories

### US-801: Executive Dashboard
**Description:** As a business owner, I want to see key metrics so I can understand business health at a glance.

**Acceptance Criteria:**
- [ ] KPI cards (revenue, expenses, profit, cash flow)
- [ ] Charts for trends (sales, expenses over time)
- [ ] Recent activities feed
- [ ] Alerts and notifications
- [ ] Customizable widget layout

### US-902: Custom Reports
**Description:** As a power user, I want to create custom reports so I can answer specific business questions.

**Acceptance Criteria:**
- [ ] Query builder with filters and groupings
- [ ] Save report templates
- [ ] Schedule report generation
- [ ] Export to PDF, Excel, CSV

---

## Database Schema (High-Level)

### Core Tables

```sql
-- Organizations
organizations (id, name, slug, settings, created_at)

-- Users & Auth
users (id, email, full_name, phone, avatar_url, role, org_id, status)
user_roles (id, name, permissions[])

-- Finance
accounts (id, org_id, code, name, type, parent_id, is_active)
journal_entries (id, org_id, date, reference, description, posted_by, posted_at)
journal_lines (id, entry_id, account_id, debit, credit, memo)

-- Inventory
warehouses (id, org_id, name, address, is_default)
products (id, org_id, name, sku, description, category_id, unit_price, cost_price, reorder_point)
product_variants (id, product_id, name, sku, attributes, price)
stock_moves (id, org_id, product_id, warehouse_id, quantity, type, reference, created_by)

-- HR
departments (id, org_id, name, manager_id)
employees (id, org_id, user_id, employee_id, department_id, position, hire_date, salary)
attendance (id, employee_id, date, clock_in, clock_out, hours_worked)
leave_requests (id, employee_id, type, start_date, end_date, status, approved_by)

-- CRM
contacts (id, org_id, first_name, last_name, email, phone, company, lead_source, tags[])
activities (id, org_id, contact_id, type, subject, description, date)
leads (id, org_id, contact_id, stage, value, probability, expected_close)
opportunities (id, org_id, lead_id, name, value, stage, probability, close_date)

-- Sales
quotes (id, org_id, customer_id, number, date, valid_until, status, subtotal, tax, total)
sales_orders (id, org_id, quote_id, customer_id, number, date, status, subtotal, tax, total)
delivery_orders (id, org_id, order_id, number, date, status, delivered_date)

-- Purchasing
vendors (id, org_id, name, contact_person, email, phone, payment_terms)
purchase_orders (id, org_id, vendor_id, number, date, status, subtotal, tax, total)
goods_receipts (id, org_id, po_id, number, date, status)

-- Projects
projects (id, org_id, name, customer_id, manager_id, start_date, end_date, budget, status)
project_tasks (id, project_id, parent_id, name, assignee_id, start_date, due_date, status, estimated_hours)
time_entries (id, project_id, task_id, user_id, date, hours, description)

-- Reporting
report_schedules (id, org_id, name, query, frequency, recipients[])
```

---

## Non-Goals (Out of Scope)

- Industry-specific functionality (manufacturing BOMs, healthcare compliance, etc.)
- Point-of-sale (POS) integration
- E-commerce website integration
- Native mobile apps (mobile-responsive web only)
- Offline functionality
- Multi-currency transactions (single currency per organization initially)
- Advanced workflow automation (future phase)
- Third-party payment processing integration
- Email/calendar integration (beyond basic logging)

---

## Technical Considerations

### Supabase Setup

1. **Database**: Create PostgreSQL database with RLS enabled
2. **Auth**: Configure email/password and OAuth providers
3. **Storage**: Set up buckets for document uploads
4. **Edge Functions**: Deploy for complex business logic
5. **Realtime**: Enable for live updates on dashboard

### Row-Level Security (RLS)

All tables must have RLS policies enforcing:
- Users can only see data from their organization
- Admins can manage all org data
- Regular users have read/write based on role permissions

### API Design

RESTful endpoints following this pattern:
```
GET    /api/[module]           - List with pagination/filters
GET    /api/[module]/:id       - Get single record
POST   /api/[module]           - Create new record
PATCH  /api/[module]/:id       - Update record
DELETE /api/[module]/:id       - Soft delete record
```

### Performance Requirements

- Initial page load < 3 seconds
- API response time < 500ms for standard queries
- Support for up to 100 concurrent users per organization

---

## Success Metrics

- Organizations can be onboarded in under 30 minutes
- Core financial flows (invoice → payment) complete in under 5 minutes
- Dashboard loads within 2 seconds
- Zero data leakage between organizations (verified by security testing)

---

## Open Questions

1. Should we implement soft deletes for all records or hard deletes?
2. What is the maximum file size for document uploads?
3. Do we need audit logging for all data changes?
4. Should we support custom fields per organization?
5. What is the data retention policy?

---

## Future Enhancements (Phase 2+)

- Multi-currency support
- Advanced workflow automation
- API for third-party integrations
- Mobile native apps
- POS integration
- E-commerce connectors
- Advanced budgeting and forecasting
