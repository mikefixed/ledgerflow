"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Users, DollarSign, Phone, Mail, Calendar } from "lucide-react"

const contacts = [
  { id: 1, name: "Acme Corp", email: "contact@acme.com", phone: "+1 555-0101", company: "Acme Corporation", tags: ["Customer", "Enterprise"] },
  { id: 2, name: "TechStart Inc", email: "info@techstart.io", phone: "+1 555-0102", company: "TechStart", tags: ["Prospect"] },
  { id: 3, name: "Global Ltd", email: "sales@globalltd.com", phone: "+1 555-0103", company: "Global Ltd", tags: ["Customer", "SMB"] },
  { id: 4, name: "StartupXYZ", email: "hello@startupxyz.com", phone: "+1 555-0104", company: "StartupXYZ", tags: ["Lead"] },
]

const leads = [
  { id: 1, name: "Enterprise Deal A", contact: "John Doe", value: 50000, stage: "proposal", probability: 60, closeDate: "2024-02-15" },
  { id: 2, name: "SMB Package B", contact: "Jane Smith", value: 15000, stage: "negotiation", probability: 80, closeDate: "2024-01-30" },
  { id: 3, name: "Startup Plan C", contact: "Bob Wilson", value: 5000, stage: "qualified", probability: 40, closeDate: "2024-03-01" },
  { id: 4, name: "Annual Contract D", contact: "Alice Brown", value: 75000, stage: "new", probability: 20, closeDate: "2024-04-01" },
]

const activities = [
  { id: 1, type: "call", subject: "Follow-up call", contact: "Acme Corp", date: "2024-01-25", done: true },
  { id: 2, type: "email", subject: "Quote sent", contact: "TechStart Inc", date: "2024-01-24", done: true },
  { id: 3, type: "meeting", subject: "Product demo", contact: "Global Ltd", date: "2024-01-26", done: false },
]

const stageColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-purple-100 text-purple-800",
  qualified: "bg-yellow-100 text-yellow-800",
  proposal: "bg-orange-100 text-orange-800",
  negotiation: "bg-indigo-100 text-indigo-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-red-100 text-red-800",
}

export default function CRMPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">CRM</h1>
          <p className="text-muted-foreground">Manage customers, leads, and interactions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Calendar className="mr-2 h-4 w-4" />Schedule</Button>
          <Button><Plus className="mr-2 h-4 w-4" />Add Contact</Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+45 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">$1.2M pipeline value</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Deals Won</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32%</div>
            <p className="text-xs text-muted-foreground">+5% from last quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="contacts">
        <TabsList>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="leads">Leads</TabsTrigger>
          <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="contacts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Directory</CardTitle>
              <CardDescription>All your business contacts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Tags</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell className="font-medium">{contact.name}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone}</TableCell>
                      <TableCell>{contact.company}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {contact.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leads" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Lead Management</CardTitle>
                  <CardDescription>Track and qualify leads</CardDescription>
                </div>
                <Button><Plus className="mr-2 h-4 w-4" />Add Lead</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deal</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead className="text-right">Probability</TableHead>
                    <TableHead>Expected Close</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>{lead.contact}</TableCell>
                      <TableCell className="text-right">${lead.value.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${stageColors[lead.stage]}`}>
                          {lead.stage}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{lead.probability}%</TableCell>
                      <TableCell>{lead.closeDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pipeline">
          <Card>
            <CardHeader>
              <CardTitle>Sales Pipeline</CardTitle>
              <CardDescription>Visual pipeline board</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-4">
                {["New", "Contacted", "Qualified", "Proposal", "Negotiation", "Won"].map((stage) => (
                  <div key={stage} className="bg-muted rounded-lg p-4">
                    <h3 className="font-medium mb-2">{stage}</h3>
                    <p className="text-sm text-muted-foreground">$0</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Track interactions with contacts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>
                        <Badge variant="secondary">
                          {activity.type === "call" && <Phone className="h-3 w-3 mr-1" />}
                          {activity.type === "email" && <Mail className="h-3 w-3 mr-1" />}
                          {activity.type === "meeting" && <Calendar className="h-3 w-3 mr-1" />}
                          {activity.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{activity.subject}</TableCell>
                      <TableCell>{activity.contact}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell>
                        <Badge variant={activity.done ? "success" : "warning"}>
                          {activity.done ? "Done" : "Pending"}
                        </Badge>
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
