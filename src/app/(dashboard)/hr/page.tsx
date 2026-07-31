"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Users, UserPlus, Calendar, Clock } from "lucide-react"

const employees = [
  { id: 1, name: "John Smith", email: "john@company.com", position: "Software Engineer", department: "Engineering", status: "active" },
  { id: 2, name: "Sarah Johnson", email: "sarah@company.com", position: "Product Manager", department: "Product", status: "active" },
  { id: 3, name: "Mike Wilson", email: "mike@company.com", position: "Sales Representative", department: "Sales", status: "active" },
  { id: 4, name: "Emily Brown", email: "emily@company.com", position: "HR Manager", department: "Human Resources", status: "active" },
  { id: 5, name: "David Lee", email: "david@company.com", position: "Accountant", department: "Finance", status: "active" },
]

const departments = [
  { id: 1, name: "Engineering", head: "John Smith", employees: 25 },
  { id: 2, name: "Sales", head: "Mike Wilson", employees: 15 },
  { id: 3, name: "Human Resources", head: "Emily Brown", employees: 5 },
  { id: 4, name: "Finance", head: "David Lee", employees: 8 },
  { id: 5, name: "Product", head: "Sarah Johnson", employees: 10 },
]

const recentAttendance = [
  { id: 1, name: "John Smith", date: "2024-01-25", status: "present", hours: 8 },
  { id: 2, name: "Sarah Johnson", date: "2024-01-25", status: "present", hours: 7.5 },
  { id: 3, name: "Mike Wilson", date: "2024-01-25", status: "late", hours: 7 },
  { id: 4, name: "Emily Brown", date: "2024-01-25", status: "present", hours: 8 },
  { id: 5, name: "David Lee", date: "2024-01-25", status: "leave", hours: 0 },
]

const pendingLeaves = [
  { id: 1, employee: "John Smith", type: "Vacation", from: "2024-02-01", to: "2024-02-05", days: 5 },
  { id: 2, employee: "Sarah Johnson", type: "Sick", from: "2024-01-28", to: "2024-01-28", days: 1 },
]

export default function HRPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Human Resources</h1>
          <p className="text-muted-foreground">Manage employees, attendance, and payroll</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" />Attendance</Button>
          <Button><UserPlus className="mr-2 h-4 w-4" />Add Employee</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Active employees</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{departments.length}</div>
            <p className="text-xs text-muted-foreground">Organization units</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">91% attendance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Leaves</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingLeaves.length}</div>
            <p className="text-xs text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="employees">
        <TabsList>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="leaves">Leave Requests</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Employee Directory</CardTitle>
                  <CardDescription>Manage employee records</CardDescription>
                </div>
                <Button><Plus className="mr-2 h-4 w-4" />Add Employee</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.position}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{employee.department}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="success">{employee.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Departments</CardTitle>
                  <CardDescription>Organization structure</CardDescription>
                </div>
                <Button><Plus className="mr-2 h-4 w-4" />Add Department</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {departments.map((dept) => (
                  <Card key={dept.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-1">Department Head</p>
                      <p className="font-medium mb-2">{dept.head}</p>
                      <p className="text-2xl font-bold">{dept.employees} employees</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Today&apos;s Attendance</CardTitle>
                  <CardDescription>January 25, 2024</CardDescription>
                </div>
                <Button variant="outline">Clock In/Out</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentAttendance.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.name}</TableCell>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            record.status === "present"
                              ? "success"
                              : record.status === "late"
                              ? "warning"
                              : "secondary"
                          }
                        >
                          {record.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{record.hours}h</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaves" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Leave Requests</CardTitle>
              <CardDescription>Leaves awaiting approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>To</TableHead>
                    <TableHead className="text-right">Days</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingLeaves.map((leave) => (
                    <TableRow key={leave.id}>
                      <TableCell className="font-medium">{leave.employee}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{leave.type}</Badge>
                      </TableCell>
                      <TableCell>{leave.from}</TableCell>
                      <TableCell>{leave.to}</TableCell>
                      <TableCell className="text-right">{leave.days}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" className="mr-2">Approve</Button>
                        <Button size="sm" variant="outline">Reject</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll">
          <Card>
            <CardHeader>
              <CardTitle>Payroll</CardTitle>
              <CardDescription>Process monthly payroll</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Payroll processing will be available soon.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
