"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, ShoppingBag, DollarSign, Truck, AlertCircle } from "lucide-react"

const vendors = [
  { id: 1, name: "SupplyCo Industries", contact: "Robert Chen", email: "orders@supplyco.com", rating: 4.5, pendingPO: 2 },
  { id: 2, name: "Global Parts Ltd", contact: "Maria Garcia", email: "sales@globalparts.com", rating: 4.0, pendingPO: 1 },
  { id: 3, name: "Quality Materials Inc", contact: "James Wilson", email: "support@qualitymats.com", rating: 5.0, pendingPO: 3 },
]

const purchaseOrders = [
  { id: 1, number: "PO-2024-001", vendor: "SupplyCo Industries", date: "2024-01-25", items: 5, total: 12500, status: "confirmed" },
  { id: 2, number: "PO-2024-002", vendor: "Global Parts Ltd", date: "2024-01-24", items: 3, total: 8500, status: "sent" },
  { id: 3, number: "PO-2024-003", vendor: "Quality Materials Inc", date: "2024-01-23", items: 8, total: 22000, status: "draft" },
]

const pendingBills = [
  { id: 1, vendor: "SupplyCo Industries", amount: 5000, dueDate: "2024-02-01", status: "pending" },
  { id: 2, vendor: "Global Parts Ltd", amount: 3500, dueDate: "2024-02-05", status: "pending" },
]

const statusColors: Record<string, string> = {
  draft: "bg-gray-100 text-gray-800",
  sent: "bg-blue-100 text-blue-800",
  confirmed: "bg-green-100 text-green-800",
  partially_received: "bg-yellow-100 text-yellow-800",
  received: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
}

export default function PurchasingPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Purchasing</h1>
          <p className="text-muted-foreground">Manage vendors, purchase orders, and procurement</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Goods Receipt</Button>
          <Button><Plus className="mr-2 h-4 w-4" />New Purchase Order</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$285,000</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Approved vendors</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Awaiting delivery</p>
          </CardContent>
        </Card>
        <Card className="border-red-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-red-600">Bills Due</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">$8,500</div>
            <p className="text-xs text-muted-foreground">Due this week</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Purchase Orders</TabsTrigger>
          <TabsTrigger value="vendors">Vendors</TabsTrigger>
          <TabsTrigger value="receipts">Goods Receipts</TabsTrigger>
          <TabsTrigger value="bills">Bills</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Purchase Orders</CardTitle>
                  <CardDescription>Manage vendor orders</CardDescription>
                </div>
                <Button><Plus className="mr-2 h-4 w-4" />New Purchase Order</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PO #</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Items</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {purchaseOrders.map((po) => (
                    <TableRow key={po.id}>
                      <TableCell className="font-medium">{po.number}</TableCell>
                      <TableCell>{po.vendor}</TableCell>
                      <TableCell>{po.date}</TableCell>
                      <TableCell className="text-right">{po.items}</TableCell>
                      <TableCell className="text-right">${po.total.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[po.status]}`}>
                          {po.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Vendor Directory</CardTitle>
                  <CardDescription>Manage your suppliers</CardDescription>
                </div>
                <Button><Plus className="mr-2 h-4 w-4" />Add Vendor</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor Name</TableHead>
                    <TableHead>Contact Person</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Pending POs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {vendors.map((vendor) => (
                    <TableRow key={vendor.id}>
                      <TableCell className="font-medium">{vendor.name}</TableCell>
                      <TableCell>{vendor.contact}</TableCell>
                      <TableCell>{vendor.email}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          {vendor.rating}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge variant="secondary">{vendor.pendingPO}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receipts">
          <Card>
            <CardHeader>
              <CardTitle>Goods Receipts</CardTitle>
              <CardDescription>Track incoming shipments</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No receipts recorded yet.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Bills</CardTitle>
              <CardDescription>Vendor invoices awaiting payment</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vendor</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingBills.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-medium">{bill.vendor}</TableCell>
                      <TableCell className="text-right">${bill.amount.toLocaleString()}</TableCell>
                      <TableCell>{bill.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant="warning">{bill.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm">Pay</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
