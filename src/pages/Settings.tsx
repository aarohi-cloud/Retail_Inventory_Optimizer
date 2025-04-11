
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Configure the multi-agent system parameters
          </p>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="mb-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="agents">Agents</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  System-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Retail Agent Alchemy" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time-zone">Default Time Zone</Label>
                  <select
                    id="time-zone"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue="UTC"
                  >
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">Eastern Time (ET)</option>
                    <option value="America/Chicago">Central Time (CT)</option>
                    <option value="America/Denver">Mountain Time (MT)</option>
                    <option value="America/Los_Angeles">Pacific Time (PT)</option>
                  </select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="auto-refresh" defaultChecked />
                  <Label htmlFor="auto-refresh">Auto-refresh dashboard data</Label>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agents">
            <Card>
              <CardHeader>
                <CardTitle>Agent Settings</CardTitle>
                <CardDescription>
                  Configure the behavior and settings for individual agents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <Label>Agent Learning Rate</Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">0.01</span>
                      <Input type="range" min="0.01" max="0.5" step="0.01" defaultValue="0.1" className="w-full" />
                      <span className="text-sm">0.5</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Controls how quickly agents adapt to new information
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Label>Communication Frequency (minutes)</Label>
                    <Input type="number" defaultValue="5" min="1" max="60" />
                    <p className="text-sm text-muted-foreground">
                      How often agents communicate with each other
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enable-store-agents" defaultChecked />
                      <Label htmlFor="enable-store-agents">Enable Store Agents</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enable-warehouse-agents" defaultChecked />
                      <Label htmlFor="enable-warehouse-agents">Enable Warehouse Agents</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enable-supplier-agents" defaultChecked />
                      <Label htmlFor="enable-supplier-agents">Enable Supplier Agents</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="enable-customer-agents" defaultChecked />
                      <Label htmlFor="enable-customer-agents">Enable Customer Agents</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure how you receive notifications from the system
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-stockout" defaultChecked />
                      <Label htmlFor="notify-stockout">Stockout Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-low-stock" defaultChecked />
                      <Label htmlFor="notify-low-stock">Low Stock Warnings</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-anomaly" defaultChecked />
                      <Label htmlFor="notify-anomaly">Demand Anomaly Detection</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-weekly" defaultChecked />
                      <Label htmlFor="notify-weekly">Weekly Performance Summary</Label>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium">System Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-agent-communication" defaultChecked />
                      <Label htmlFor="notify-agent-communication">Agent Communication Alerts</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-forecast-updates" defaultChecked />
                      <Label htmlFor="notify-forecast-updates">Forecast Updates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="notify-system" />
                      <Label htmlFor="notify-system">System Maintenance Notifications</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize the visual appearance of the dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Theme</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-20 rounded-md bg-background border-2 border-primary flex items-center justify-center">
                        Light
                      </div>
                      <Label>
                        <input type="radio" name="theme" value="light" className="sr-only" defaultChecked />
                        <span>Light</span>
                      </Label>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-20 rounded-md bg-zinc-800 text-white border-2 border-muted flex items-center justify-center">
                        Dark
                      </div>
                      <Label>
                        <input type="radio" name="theme" value="dark" className="sr-only" />
                        <span>Dark</span>
                      </Label>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="h-20 w-20 rounded-md border-2 border-muted flex items-center justify-center bg-gradient-to-r from-white to-zinc-800">
                        <span>Auto</span>
                      </div>
                      <Label>
                        <input type="radio" name="theme" value="system" className="sr-only" />
                        <span>System</span>
                      </Label>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="accent-color">Accent Color</Label>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="h-8 w-8 rounded-full bg-blue-500 cursor-pointer border-2 border-muted-foreground"></div>
                      <div className="h-8 w-8 rounded-full bg-green-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-purple-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-red-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-orange-500 cursor-pointer"></div>
                      <div className="h-8 w-8 rounded-full bg-pink-500 cursor-pointer"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
