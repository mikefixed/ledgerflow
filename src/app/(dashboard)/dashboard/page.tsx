import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DollarSign, 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"

const kpis = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Expenses",
    value: "$45,231",
    change: "-3.2%",
    trend: "down",
    icon: ShoppingCart,
  },
  {
    title: "Active Employees",
    value: "156",
    change: "+5",
    trend: "up",
    icon: Users,
  },
  {
    title: "Products in Stock",
    value: "2,847",
    change: "-23",
    trend: "down",
    icon: Package,
  },
]

const recentTransactions = [
  { id: 1, description: "Invoice #1234 - Acme Corp", amount: 15000, status: "paid" },
  { id: 2, description: "Invoice #1235 - TechStart Inc", amount: 8500, status: "pending" },
  { id: 3, description: "Purchase Order #567", amount: 12000, status: "pending" },
  { id: 4, description: "Invoice #1236 - Global Ltd", amount: 9500, status: "paid" },
  { id: 5, description: "Salary Payment - June", amount: 45000, status: "paid" },
]

const lowStockItems = [
  { id: 1, name: "Widget A", sku: "WGT-001", stock: 12, reorderPoint: 50 },
  { id: 2, name: "Gadget B", sku: "GDG-002", stock: 8, reorderPoint: 25 },
  { id: 3, name: "Component C", sku: "CMP-003", stock: 5, reorderPoint: 30 },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your business metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {kpi.title}
              </CardTitle>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center gap-1 text-xs">
                {kpi.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-500" />
                )}
                <span className={kpi.trend === "up" ? "text-green-500" : "text-red-500"}>
                  {kpi.change}
                </span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>
                  <Badge
                    variant={transaction.status === "paid" ? "success" : "warning"}
                  >
                    {transaction.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Low Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Low Stock Alerts</CardTitle>
            <CardDescription>Items that need reordering</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lowStockItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      SKU: {item.sku}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-red-500">
                      {item.stock} left
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Reorder at {item.reorderPoint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <a href="/sales/new" className="flex items-center gap-3 rounded-lg border p-4 hover:bg-accent">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">New Sale</p>
                <p className="text-xs text-muted-foreground">Create a new sales order</p>
              </div>
            </a>
            <a href="/purchasing/new" className="flex items-center gap-3 rounded-lg border p-4 hover:bg-accent">
              <Package className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Purchase Order</p>
                <p className="text-xs text-muted-foreground">Order from suppliers</p>
              </div>
            </a>
            <a href="/finance/invoices/new" className="flex items-center gap-3 rounded-lg border p-4 hover:bg-accent">
              <DollarSign className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Create Invoice</p>
                <p className="text-xs text-muted-foreground">Send to customers</p>
              </div>
            </a>
            <a href="/hr/employees/new" className="flex items-center gap-3 rounded-lg border p-4 hover:bg-accent">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Add Employee</p>
                <p className="text-xs text-muted-foreground">Onboard new staff</p>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
