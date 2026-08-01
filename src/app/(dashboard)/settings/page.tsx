"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Building, Bell, Shield, Key, Palette } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and organization settings</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="admin@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 555-0100" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="organization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Organization Settings
              </CardTitle>
              <CardDescription>Manage your organization details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="orgName">Organization Name</Label>
                <Input id="orgName" defaultValue="Acme Corporation" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Business Street" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United States" />
                </div>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Choose what notifications you receive</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive email updates</p>
                </div>
                <Button variant="outline">Enabled</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Low Stock Alerts</p>
                  <p className="text-sm text-muted-foreground">Get notified when items are low</p>
                </div>
                <Button variant="outline">Enabled</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Invoice Reminders</p>
                  <p className="text-sm text-muted-foreground">Payment due notifications</p>
                </div>
                <Button variant="outline">Enabled</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Password
              </CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Two-Factor Authentication
              </CardTitle>
              <CardDescription>Add an extra layer of security</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline">Enable 2FA</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance Settings
              </CardTitle>
              <CardDescription>Customize the look of your ERP dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Theme Selection */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Theme Mode</Label>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border-2 border-primary rounded-lg p-4 cursor-pointer bg-white">
                    <div className="aspect-video bg-gray-100 rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-500">Light</span>
                    </div>
                    <p className="text-sm font-medium text-center">Light</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer bg-slate-900">
                    <div className="aspect-video bg-slate-700 rounded mb-2 flex items-center justify-center">
                      <span className="text-xs text-gray-400">Dark</span>
                    </div>
                    <p className="text-sm font-medium text-center text-white">Dark</p>
                  </div>
                  <div className="border rounded-lg p-4 cursor-pointer bg-gradient-to-r from-gray-100 to-gray-900">
                    <div className="aspect-video bg-gradient-to-r from-gray-200 to-gray-800 rounded mb-2 flex items-center justify-center">
                      <span className="text-xs">System</span>
                    </div>
                    <p className="text-sm font-medium text-center">System</p>
                  </div>
                </div>
              </div>

              {/* Primary Color */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Primary Color</Label>
                <p className="text-sm text-muted-foreground">Choose your brand color for buttons and accents</p>
                <div className="grid grid-cols-6 gap-3">
                  <button className="h-12 rounded-lg bg-slate-600 ring-2 ring-offset-2 ring-slate-600" title="Slate" />
                  <button className="h-12 rounded-lg bg-red-600 hover:bg-red-500" title="Red" />
                  <button className="h-12 rounded-lg bg-orange-600 hover:bg-orange-500" title="Orange" />
                  <button className="h-12 rounded-lg bg-amber-500 hover:bg-amber-400" title="Amber" />
                  <button className="h-12 rounded-lg bg-yellow-500 hover:bg-yellow-400" title="Yellow" />
                  <button className="h-12 rounded-lg bg-green-600 hover:bg-green-500" title="Green" />
                  <button className="h-12 rounded-lg bg-emerald-600 hover:bg-emerald-500" title="Emerald" />
                  <button className="h-12 rounded-lg bg-teal-600 hover:bg-teal-500" title="Teal" />
                  <button className="h-12 rounded-lg bg-cyan-600 hover:bg-cyan-500" title="Cyan" />
                  <button className="h-12 rounded-lg bg-sky-600 hover:bg-sky-500" title="Sky" />
                  <button className="h-12 rounded-lg bg-blue-600 hover:bg-blue-500" title="Blue" />
                  <button className="h-12 rounded-lg bg-indigo-600 hover:bg-indigo-500" title="Indigo" />
                  <button className="h-12 rounded-lg bg-violet-600 hover:bg-violet-500" title="Violet" />
                  <button className="h-12 rounded-lg bg-purple-600 hover:bg-purple-500" title="Purple" />
                  <button className="h-12 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500" title="Fuchsia" />
                  <button className="h-12 rounded-lg bg-pink-600 hover:bg-pink-500" title="Pink" />
                  <button className="h-12 rounded-lg bg-rose-600 hover:bg-rose-500" title="Rose" />
                  <button className="h-12 rounded-lg bg-gray-600 hover:bg-gray-500" title="Gray" />
                </div>
              </div>

              {/* Custom Color Picker */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Custom Primary Color</Label>
                <p className="text-sm text-muted-foreground">Pick a custom color using the color picker</p>
                <div className="flex gap-4 items-center">
                  <input type="color" defaultValue="#3b82f6" className="h-12 w-24 rounded cursor-pointer" />
                  <Input type="text" defaultValue="#3b82f6" className="w-32" placeholder="#3b82f6" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>

              {/* Sidebar Color */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Sidebar Color</Label>
                <div className="grid grid-cols-4 gap-3">
                  <button className="h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center text-sm">Dark</button>
                  <button className="h-12 rounded-lg bg-white border text-sm">Light</button>
                  <button className="h-12 rounded-lg bg-primary text-white text-sm">Brand</button>
                  <button className="h-12 rounded-lg bg-gradient-to-b from-primary to-primary/80 text-white text-sm">Gradient</button>
                </div>
              </div>

              {/* Company Logo */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Company Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 border rounded-lg flex items-center justify-center bg-muted">
                    <span className="text-2xl font-bold">AC</span>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm">Upload Logo</Button>
                    <p className="text-xs text-muted-foreground">Recommended: 200x200px, PNG or SVG</p>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">Preview</Label>
                <div className="border rounded-lg p-4 bg-muted/50">
                  <div className="flex gap-2 mb-4">
                    <div className="h-10 w-10 rounded bg-primary" />
                    <div className="h-10 flex-1 rounded bg-muted" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 rounded bg-primary/20" />
                    <div className="h-20 rounded bg-primary/20" />
                    <div className="h-20 rounded bg-primary/20" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t">
                <Button>Save Appearance</Button>
                <Button variant="outline">Reset to Default</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
