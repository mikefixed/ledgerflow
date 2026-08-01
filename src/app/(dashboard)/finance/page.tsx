"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FileText, Download, Plus, Printer, FileSpreadsheet, 
  TrendingUp, TrendingDown, DollarSign, Calculator,
  ChevronDown, ChevronRight, Settings, Eye, Trash2, Edit
} from "lucide-react"

// Sample financial data
const sampleAccounts = {
  revenue: [
    { code: "4100", name: "Sales Revenue", amount: 1500000 },
    { code: "4200", name: "Service Revenue", amount: 450000 },
    { code: "4400", name: "Rental Income", amount: 60000 },
    { code: "4700", name: "Interest Income", amount: 15000 },
  ],
  cogs: [
    { code: "5100", name: "Direct Materials", amount: 420000 },
    { code: "5200", name: "Direct Labor", amount: 280000 },
    { code: "5300", name: "Manufacturing Overhead", amount: 95000 },
  ],
  operatingExpenses: [
    { code: "6110", name: "Advertising", amount: 45000 },
    { code: "6210", name: "Admin Salaries", amount: 320000 },
    { code: "6410", name: "Office Rent", amount: 96000 },
    { code: "6510", name: "Gross Salaries", amount: 380000 },
    { code: "6610", name: "Depreciation", amount: 55000 },
    { code: "6710", name: "Repairs & Maintenance", amount: 28000 },
  ],
  otherExpenses: [
    { code: "7110", name: "Interest Expense", amount: 32000 },
    { code: "7310", name: "Income Tax", amount: 85000 },
  ],
  currentAssets: [
    { code: "1110", name: "Cash on Hand", amount: 25000 },
    { code: "1130", name: "Main Checking Account", amount: 485000 },
    { code: "1210", name: "Trade Receivables", amount: 320000 },
    { code: "1300", name: "Inventory", amount: 275000 },
    { code: "1410", name: "Prepaid Insurance", amount: 18000 },
  ],
  nonCurrentAssets: [
    { code: "1510", name: "Land", amount: 350000 },
    { code: "1520", name: "Buildings", amount: 850000 },
    { code: "1540", name: "Office Equipment", amount: 120000 },
    { code: "1600", name: "Accumulated Depreciation", amount: -145000 },
  ],
  currentLiabilities: [
    { code: "2110", name: "Trade Payables", amount: 185000 },
    { code: "2210", name: "VAT Payable", amount: 65000 },
    { code: "2310", name: "Accrued Salaries", amount: 48000 },
    { code: "2420", name: "Current Portion of LTD", amount: 50000 },
  ],
  longTermLiabilities: [
    { code: "2510", name: "Long-term Notes Payable", amount: 400000 },
    { code: "2540", name: "Mortgage Payable", amount: 520000 },
  ],
  equity: [
    { code: "3110", name: "Ordinary Share Capital", amount: 1000000 },
    { code: "3300", name: "Retained Earnings", amount: 568000 },
    { code: "3600", name: "Current Year Profit", amount: 312000 },
  ],
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount)
}

const totalRevenue = sampleAccounts.revenue.reduce((sum, item) => sum + item.amount, 0)
const totalCOGS = sampleAccounts.cogs.reduce((sum, item) => sum + item.amount, 0)
const totalOperatingExpenses = sampleAccounts.operatingExpenses.reduce((sum, item) => sum + item.amount, 0)
const totalOtherExpenses = sampleAccounts.otherExpenses.reduce((sum, item) => sum + item.amount, 0)
const grossProfit = totalRevenue - totalCOGS
const operatingProfit = grossProfit - totalOperatingExpenses
const netProfit = operatingProfit - totalOtherExpenses

export default function FinancePage() {
  const [dateRange, setDateRange] = useState("2024")
  const [showAccountForm, setShowAccountForm] = useState(false)
  const [showJournalForm, setShowJournalForm] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    revenue: true,
    cogs: true,
    operatingExpenses: true,
    otherExpenses: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handlePrint = () => window.print()
  const handleExportPDF = (report: string) => alert(`Exporting ${report} to PDF...`)
  const handleExportExcel = (report: string) => alert(`Exporting ${report} to Excel...`)
  const handleExportWord = (report: string) => alert(`Exporting ${report} to Word...`)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Financial Accounting</h1>
          <p className="text-muted-foreground">Complete financial management and reporting</p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">Year 2024</SelectItem>
              <SelectItem value="2024-Q4">Q4 2024</SelectItem>
              <SelectItem value="2024-Q3">Q3 2024</SelectItem>
              <SelectItem value="2024-Q2">Q2 2024</SelectItem>
              <SelectItem value="2024-Q1">Q1 2024</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => setShowAccountForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add Account
          </Button>
          <Button variant="outline" onClick={() => setShowJournalForm(true)}>
            <FileText className="mr-2 h-4 w-4" />
            New Journal Entry
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-green-800">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" /> +12% from last year
            </p>
          </CardContent>
        </Card>
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-blue-800">Gross Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{formatCurrency(grossProfit)}</div>
            <p className="text-xs text-blue-600">{(grossProfit / totalRevenue * 100).toFixed(1)}% margin</p>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{formatCurrency(netProfit)}</div>
            <p className="text-xs text-purple-600">{(netProfit / totalRevenue * 100).toFixed(1)}% margin</p>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-orange-800">Total Assets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {formatCurrency(
                [...sampleAccounts.currentAssets, ...sampleAccounts.nonCurrentAssets]
                  .reduce((sum, item) => sum + item.amount, 0)
              )}
            </div>
            <p className="text-xs text-orange-600">As of {dateRange}</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="income-statement" className="space-y-4">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="income-statement">Income Statement</TabsTrigger>
          <TabsTrigger value="balance-sheet">Balance Sheet</TabsTrigger>
          <TabsTrigger value="cash-flow">Cash Flow</TabsTrigger>
          <TabsTrigger value="equity">Equity Statement</TabsTrigger>
          <TabsTrigger value="accounts">Chart of Accounts</TabsTrigger>
          <TabsTrigger value="journal">Journal</TabsTrigger>
        </TabsList>

        {/* INCOME STATEMENT */}
        <TabsContent value="income-statement" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Income Statement (Profit & Loss)</CardTitle>
                <CardDescription>For the year ended December 31, {dateRange}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-1" /> Print
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportPDF("Income Statement")}>
                  <Download className="h-4 w-4 mr-1" /> PDF
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportExcel("Income Statement")}>
                  <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportWord("Income Statement")}>
                  <FileText className="h-4 w-4 mr-1" /> Word
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead className="w-24">Account</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-green-50 font-bold">
                    <TableCell colSpan={3} className="cursor-pointer" onClick={() => toggleSection('revenue')}>
                      <div className="flex items-center">
                        {expandedSections.revenue ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
                        REVENUE
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedSections.revenue && sampleAccounts.revenue.map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="pl-10">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-green-100 font-bold">
                    <TableCell colSpan={2}>Total Revenue</TableCell>
                    <TableCell className="text-right">{formatCurrency(totalRevenue)}</TableCell>
                  </TableRow>

                  <TableRow className="bg-red-50 font-bold">
                    <TableCell colSpan={3} className="cursor-pointer" onClick={() => toggleSection('cogs')}>
                      <div className="flex items-center">
                        {expandedSections.cogs ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
                        COST OF GOODS SOLD
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedSections.cogs && sampleAccounts.cogs.map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="pl-10">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right text-red-600">({formatCurrency(item.amount)})</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-red-100 font-bold">
                    <TableCell colSpan={2}>Total Cost of Goods Sold</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(totalCOGS)})</TableCell>
                  </TableRow>

                  <TableRow className="bg-blue-100 font-bold text-lg">
                    <TableCell colSpan={2}>GROSS PROFIT</TableCell>
                    <TableCell className="text-right text-blue-600">{formatCurrency(grossProfit)}</TableCell>
                  </TableRow>

                  <TableRow className="bg-orange-50 font-bold">
                    <TableCell colSpan={3} className="cursor-pointer" onClick={() => toggleSection('operatingExpenses')}>
                      <div className="flex items-center">
                        {expandedSections.operatingExpenses ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
                        OPERATING EXPENSES
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedSections.operatingExpenses && sampleAccounts.operatingExpenses.map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="pl-10">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right text-red-600">({formatCurrency(item.amount)})</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-orange-100 font-bold">
                    <TableCell colSpan={2}>Total Operating Expenses</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(totalOperatingExpenses)})</TableCell>
                  </TableRow>

                  <TableRow className="bg-purple-100 font-bold text-lg">
                    <TableCell colSpan={2}>OPERATING PROFIT</TableCell>
                    <TableCell className="text-right text-purple-600">{formatCurrency(operatingProfit)}</TableCell>
                  </TableRow>

                  <TableRow className="bg-teal-50 font-bold">
                    <TableCell colSpan={2}>OTHER INCOME</TableCell>
                    <TableCell className="text-right text-green-600">{formatCurrency(0)}</TableCell>
                  </TableRow>

                  <TableRow className="bg-red-50 font-bold">
                    <TableCell colSpan={3} className="cursor-pointer" onClick={() => toggleSection('otherExpenses')}>
                      <div className="flex items-center">
                        {expandedSections.otherExpenses ? <ChevronDown className="h-4 w-4 mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />}
                        OTHER EXPENSES & TAXES
                      </div>
                    </TableCell>
                  </TableRow>
                  {expandedSections.otherExpenses && sampleAccounts.otherExpenses.map((item) => (
                    <TableRow key={item.code}>
                      <TableCell className="pl-10">{item.code}</TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell className="text-right text-red-600">({formatCurrency(item.amount)})</TableCell>
                    </TableRow>
                  ))}

                  <TableRow className="bg-emerald-200 font-bold text-xl border-t-4 border-emerald-500">
                    <TableCell colSpan={2}>NET PROFIT FOR THE YEAR</TableCell>
                    <TableCell className="text-right text-emerald-700">{formatCurrency(netProfit)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* BALANCE SHEET */}
        <TabsContent value="balance-sheet" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Statement of Financial Position (Balance Sheet)</CardTitle>
                <CardDescription>As at December 31, {dateRange}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-1" /> Print
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportPDF("Balance Sheet")}>
                  <Download className="h-4 w-4 mr-1" /> PDF
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportExcel("Balance Sheet")}>
                  <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportWord("Balance Sheet")}>
                  <FileText className="h-4 w-4 mr-1" /> Word
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h3 className="font-bold text-lg mb-4 bg-gray-100 p-2">ASSETS</h3>
                  
                  <h4 className="font-semibold mb-2 text-blue-600">Current Assets</h4>
                  <Table>
                    <TableBody>
                      {sampleAccounts.currentAssets.map((item) => (
                        <TableRow key={item.code}>
                          <TableCell className="w-24">{item.code}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="font-bold bg-blue-50">
                        <TableCell colSpan={2}>Total Current Assets</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(sampleAccounts.currentAssets.reduce((sum, item) => sum + item.amount, 0))}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <h4 className="font-semibold mb-2 mt-4 text-blue-600">Non-Current Assets</h4>
                  <Table>
                    <TableBody>
                      {sampleAccounts.nonCurrentAssets.map((item) => (
                        <TableRow key={item.code}>
                          <TableCell className="w-24">{item.code}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell className="text-right">{formatCurrency(Math.abs(item.amount))}</TableCell>
                        </TableRow>
                      ))}
                      <TableRow className="font-bold bg-blue-50">
                        <TableCell colSpan={2}>Total Non-Current Assets</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(sampleAccounts.nonCurrentAssets.filter(i => i.code !== '1600').reduce((sum, item) => sum + item.amount, 0))}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                  <h3 className="font-bold text-lg mt-4 bg-blue-200 p-2">
                    TOTAL ASSETS: {formatCurrency(
                      sampleAccounts.currentAssets.reduce((sum, item) => sum + item.amount, 0) +
                      sampleAccounts.nonCurrentAssets.filter(i => i.code !== '1600').reduce((sum, item) => sum + item.amount, 0)
                    )}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg mb-4 bg-red-100 p-2">LIABILITIES</h3>
                    
                    <h4 className="font-semibold mb-2 text-red-600">Current Liabilities</h4>
                    <Table>
                      <TableBody>
                        {sampleAccounts.currentLiabilities.map((item) => (
                          <TableRow key={item.code}>
                            <TableCell className="w-24">{item.code}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="font-bold bg-red-50">
                          <TableCell colSpan={2}>Total Current Liabilities</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(sampleAccounts.currentLiabilities.reduce((sum, item) => sum + item.amount, 0))}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <h4 className="font-semibold mb-2 mt-4 text-red-600">Long-term Liabilities</h4>
                    <Table>
                      <TableBody>
                        {sampleAccounts.longTermLiabilities.map((item) => (
                          <TableRow key={item.code}>
                            <TableCell className="w-24">{item.code}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="font-bold bg-red-50">
                          <TableCell colSpan={2}>Total Long-term Liabilities</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(sampleAccounts.longTermLiabilities.reduce((sum, item) => sum + item.amount, 0))}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <h3 className="font-bold text-lg mt-4 bg-red-200 p-2">
                      TOTAL LIABILITIES: {formatCurrency(
                        sampleAccounts.currentLiabilities.reduce((sum, item) => sum + item.amount, 0) +
                        sampleAccounts.longTermLiabilities.reduce((sum, item) => sum + item.amount, 0)
                      )}
                    </h3>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4 bg-green-100 p-2">EQUITY</h3>
                    <Table>
                      <TableBody>
                        {sampleAccounts.equity.map((item) => (
                          <TableRow key={item.code}>
                            <TableCell className="w-24">{item.code}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell className="text-right">{formatCurrency(item.amount)}</TableCell>
                          </TableRow>
                        ))}
                        <TableRow className="font-bold bg-green-50">
                          <TableCell colSpan={2}>Total Equity</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(sampleAccounts.equity.reduce((sum, item) => sum + item.amount, 0))}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <h3 className="font-bold text-lg mt-4 bg-green-200 p-2">
                      TOTAL EQUITY: {formatCurrency(sampleAccounts.equity.reduce((sum, item) => sum + item.amount, 0))}
                    </h3>

                    <h3 className="font-bold text-lg mt-4 bg-emerald-300 p-2 border-2 border-emerald-500">
                      TOTAL LIABILITIES + EQUITY: {formatCurrency(
                        sampleAccounts.currentLiabilities.reduce((sum, item) => sum + item.amount, 0) +
                        sampleAccounts.longTermLiabilities.reduce((sum, item) => sum + item.amount, 0) +
                        sampleAccounts.equity.reduce((sum, item) => sum + item.amount, 0)
                      )}
                    </h3>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CASH FLOW */}
        <TabsContent value="cash-flow" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Cash Flow Statement</CardTitle>
                <CardDescription>For the year ended December 31, {dateRange}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-1" /> Print
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportPDF("Cash Flow")}>
                  <Download className="h-4 w-4 mr-1" /> PDF
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportExcel("Cash Flow")}>
                  <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportWord("Cash Flow")}>
                  <FileText className="h-4 w-4 mr-1" /> Word
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-blue-50 font-bold">
                    <TableCell>CASH FLOWS FROM OPERATING ACTIVITIES</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow><TableCell className="pl-8">Cash received from customers</TableCell><TableCell className="text-right">{formatCurrency(totalRevenue * 0.95)}</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Cash paid to suppliers and employees</TableCell><TableCell className="text-right text-red-600">({formatCurrency((totalCOGS + totalOperatingExpenses) * 0.85)})</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Interest paid</TableCell><TableCell className="text-right text-red-600">({formatCurrency(32000)})</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Income taxes paid</TableCell><TableCell className="text-right text-red-600">({formatCurrency(85000)})</TableCell></TableRow>
                  <TableRow className="font-bold bg-blue-100"><TableCell>Net Cash from Operating Activities</TableCell><TableCell className="text-right text-blue-600">{formatCurrency(185000)}</TableCell></TableRow>

                  <TableRow className="bg-green-50 font-bold"><TableCell>CASH FLOWS FROM INVESTING ACTIVITIES</TableCell><TableCell></TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Purchase of property, plant & equipment</TableCell><TableCell className="text-right text-red-600">({formatCurrency(125000)})</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Proceeds from sale of assets</TableCell><TableCell className="text-right">{formatCurrency(25000)}</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Acquisition of investments</TableCell><TableCell className="text-right text-red-600">({formatCurrency(50000)})</TableCell></TableRow>
                  <TableRow className="font-bold bg-green-100"><TableCell>Net Cash used in Investing Activities</TableCell><TableCell className="text-right text-red-600">({formatCurrency(150000)})</TableCell></TableRow>

                  <TableRow className="bg-purple-50 font-bold"><TableCell>CASH FLOWS FROM FINANCING ACTIVITIES</TableCell><TableCell></TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Proceeds from long-term borrowing</TableCell><TableCell className="text-right">{formatCurrency(100000)}</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Repayment of long-term debt</TableCell><TableCell className="text-right text-red-600">({formatCurrency(75000)})</TableCell></TableRow>
                  <TableRow><TableCell className="pl-8">Dividends paid</TableCell><TableCell className="text-right text-red-600">({formatCurrency(50000)})</TableCell></TableRow>
                  <TableRow className="font-bold bg-purple-100"><TableCell>Net Cash used in Financing Activities</TableCell><TableCell className="text-right text-red-600">({formatCurrency(25000)})</TableCell></TableRow>

                  <TableRow className="bg-emerald-200 font-bold text-lg border-t-4 border-emerald-500"><TableCell>NET INCREASE IN CASH</TableCell><TableCell className="text-right text-emerald-700">{formatCurrency(10000)}</TableCell></TableRow>
                  <TableRow><TableCell>Cash at beginning of year</TableCell><TableCell className="text-right">{formatCurrency(500000)}</TableCell></TableRow>
                  <TableRow className="font-bold bg-emerald-200 text-lg"><TableCell>CASH AT END OF YEAR</TableCell><TableCell className="text-right text-emerald-700">{formatCurrency(510000)}</TableCell></TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* EQUITY STATEMENT */}
        <TabsContent value="equity" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Statement of Changes in Equity</CardTitle>
                <CardDescription>For the year ended December 31, {dateRange}</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handlePrint}>
                  <Printer className="h-4 w-4 mr-1" /> Print
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportPDF("Equity Statement")}>
                  <Download className="h-4 w-4 mr-1" /> PDF
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportExcel("Equity Statement")}>
                  <FileSpreadsheet className="h-4 w-4 mr-1" /> Excel
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleExportWord("Equity Statement")}>
                  <FileText className="h-4 w-4 mr-1" /> Word
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Share Capital</TableHead>
                    <TableHead className="text-right">Retained Earnings</TableHead>
                    <TableHead className="text-right">Revaluation Reserve</TableHead>
                    <TableHead className="text-right">Total Equity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Balance at beginning of year</TableCell>
                    <TableCell className="text-right">{formatCurrency(1000000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(456000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(75000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(1531000)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-8">Prior year adjustment</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(15000)})</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(15000)})</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium pl-8">Restated balance</TableCell>
                    <TableCell className="text-right">{formatCurrency(1000000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(441000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(75000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(1516000)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Net profit for the year</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-green-600">{formatCurrency(netProfit)}</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-green-600">{formatCurrency(netProfit)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Dividends declared</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(50000)})</TableCell>
                    <TableCell className="text-right">-</TableCell>
                    <TableCell className="text-right text-red-600">({formatCurrency(50000)})</TableCell>
                  </TableRow>
                  <TableRow className="font-bold bg-emerald-100 text-lg border-t-2 border-emerald-500">
                    <TableCell>Balance at End of Year</TableCell>
                    <TableCell className="text-right">{formatCurrency(1000000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(703000)}</TableCell>
                    <TableCell className="text-right">{formatCurrency(75000)}</TableCell>
                    <TableCell className="text-right text-emerald-700">{formatCurrency(1880000)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CHART OF ACCOUNTS */}
        <TabsContent value="accounts" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Chart of Accounts</CardTitle>
                  <CardDescription>Complete accounting structure with 100+ accounts</CardDescription>
                </div>
                <Button onClick={() => setShowAccountForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Account
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2 text-sm">1000-1999</span>
                    ASSETS
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>1100-1199</strong> Cash & Bank</p>
                    <p><strong>1200-1299</strong> Accounts Receivable</p>
                    <p><strong>1300-1399</strong> Inventory</p>
                    <p><strong>1400-1499</strong> Prepayments</p>
                    <p><strong>1500-1699</strong> Property, Plant & Equipment</p>
                    <p><strong>1700-1799</strong> Intangible Assets</p>
                    <p><strong>1800-1999</strong> Other Non-Current Assets</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2 text-sm">2000-2999</span>
                    LIABILITIES
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>2100-2199</strong> Accounts Payable</p>
                    <p><strong>2200-2299</strong> Taxes Payable</p>
                    <p><strong>2300-2399</strong> Accruals</p>
                    <p><strong>2400-2499</strong> Short-term Borrowings</p>
                    <p><strong>2500-2599</strong> Long-term Liabilities</p>
                    <p><strong>2600-2699</strong> Deferred Revenue</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2 text-sm">3000-3999</span>
                    EQUITY
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>3100-3199</strong> Owner/Share Capital</p>
                    <p><strong>3200-3299</strong> Additional Paid-in Capital</p>
                    <p><strong>3300-3399</strong> Retained Earnings</p>
                    <p><strong>3400-3499</strong> Treasury Stock</p>
                    <p><strong>3500-3599</strong> Capital Reserves</p>
                    <p><strong>3600</strong> Current Year Profit</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded mr-2 text-sm">4000-4999</span>
                    REVENUE
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>4100-4199</strong> Sales Revenue</p>
                    <p><strong>4200-4299</strong> Service Revenue</p>
                    <p><strong>4300-4399</strong> Other Operating Income</p>
                    <p><strong>4400-4499</strong> Rental Income</p>
                    <p><strong>4500-4599</strong> Gain on Disposal</p>
                    <p><strong>4700-4999</strong> Other Income</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-sm">5000-5999</span>
                    COST OF GOODS SOLD
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>5100-5199</strong> Direct Materials</p>
                    <p><strong>5200-5299</strong> Direct Labor</p>
                    <p><strong>5300-5399</strong> Manufacturing Overhead</p>
                    <p><strong>5400-5499</strong> Finished Goods Purchases</p>
                    <p><strong>5500-5599</strong> Inventory Adjustments</p>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-bold text-lg mb-3 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded mr-2 text-sm">6000-7999</span>
                    EXPENSES
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>6100-6199</strong> Selling Expenses</p>
                    <p><strong>6200-6399</strong> Administrative Expenses</p>
                    <p><strong>6400-6499</strong> Rent & Utilities</p>
                    <p><strong>6500-6599</strong> Salaries & Employee Costs</p>
                    <p><strong>6600-6699</strong> Depreciation & Amortization</p>
                    <p><strong>7000-7999</strong> Financial Expenses</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* JOURNAL */}
        <TabsContent value="journal" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Journal Entries</CardTitle>
                  <CardDescription>Record and manage accounting transactions</CardDescription>
                </div>
                <Button onClick={() => setShowJournalForm(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  New Entry
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                No journal entries yet. Click "New Entry" to record your first transaction.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Add Account Dialog */}
      <Dialog open={showAccountForm} onOpenChange={setShowAccountForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Account</DialogTitle>
            <DialogDescription>Create a new account in the chart of accounts</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="accountCode">Account Code</Label>
                <Input id="accountCode" placeholder="e.g., 1100" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="accountType">Account Type</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asset">Asset</SelectItem>
                    <SelectItem value="liability">Liability</SelectItem>
                    <SelectItem value="equity">Equity</SelectItem>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input id="accountName" placeholder="e.g., Cash at Bank" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountDescription">Description</Label>
              <Input id="accountDescription" placeholder="Brief description" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAccountForm(false)}>Cancel</Button>
            <Button onClick={() => setShowAccountForm(false)}>Create Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Journal Entry Dialog */}
      <Dialog open={showJournalForm} onOpenChange={setShowJournalForm}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>New Journal Entry</DialogTitle>
            <DialogDescription>Record a double-entry accounting transaction</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2"><Label>Date</Label><Input type="date" /></div>
              <div className="space-y-2"><Label>Reference</Label><Input placeholder="JE-001" /></div>
              <div className="space-y-2"><Label>Description</Label><Input placeholder="Transaction description" /></div>
            </div>
            <div className="border rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">Journal Entries (Debits must equal Credits)</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Debit</TableHead>
                    <TableHead className="text-right">Credit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell><Select><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger><SelectContent><SelectItem value="1100">Cash</SelectItem><SelectItem value="4100">Sales Revenue</SelectItem></SelectContent></Select></TableCell>
                    <TableCell><Input placeholder="Description" /></TableCell>
                    <TableCell><Input type="number" placeholder="0.00" /></TableCell>
                    <TableCell><Input type="number" placeholder="0.00" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><Select><SelectTrigger><SelectValue placeholder="Select account" /></SelectTrigger><SelectContent><SelectItem value="1100">Cash</SelectItem><SelectItem value="4100">Sales Revenue</SelectItem></SelectContent></Select></TableCell>
                    <TableCell><Input placeholder="Description" /></TableCell>
                    <TableCell><Input type="number" placeholder="0.00" /></TableCell>
                    <TableCell><Input type="number" placeholder="0.00" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button variant="outline" size="sm" className="mt-2"><Plus className="h-4 w-4 mr-1" /> Add Line</Button>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowJournalForm(false)}>Cancel</Button>
            <Button onClick={() => setShowJournalForm(false)}>Post Entry</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
