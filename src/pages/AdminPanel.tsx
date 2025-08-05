
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  Activity, 
  Server, 
  Database, 
  Settings, 
  BarChart3, 
  Shield,
  Bell,
  LogOut,
  RefreshCw
} from "lucide-react";

const AdminPanel = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [stats, setStats] = useState({
    totalUsers: 1247,
    activeJobs: 23,
    serverUptime: "99.9%",
    totalProcessed: 15678
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAdminLogin = () => {
    // Simple password check - in production, this should be properly secured
    if (adminPassword === "admin123") {
      setIsAuthorized(true);
      toast({
        title: "Admin Access Granted",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid admin password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    setAdminPassword("");
    navigate("/");
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-slate-900/50 border-blue-600/20 backdrop-blur-sm">
          <CardHeader className="text-center">
            <img 
              src="/lovable-uploads/84003fdb-4481-45db-89c7-ef29b876e712.png" 
              alt="VIZMORA" 
              className="h-10 w-auto mx-auto mb-4"
            />
            <CardTitle className="text-white">Admin Access</CardTitle>
            <CardDescription className="text-gray-400">
              Enter admin credentials to access the control panel
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="adminPassword" className="text-gray-300">Admin Password</Label>
              <Input
                id="adminPassword"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter admin password"
                className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
            </div>
            <Button onClick={handleAdminLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              <Shield className="mr-2 w-4 h-4" />
              Access Admin Panel
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Admin Header */}
      <header className="bg-slate-900/50 border-b border-blue-600/20 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/84003fdb-4481-45db-89c7-ef29b876e712.png" 
              alt="VIZMORA" 
              className="h-8 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
              <p className="text-gray-400 text-sm">System Management & Analytics</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
              <Shield className="w-3 h-3 mr-1" />
              Admin
            </Badge>
            <Button variant="ghost" onClick={handleLogout} className="text-gray-400 hover:text-white">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900/30 border-blue-600/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Users</p>
                  <p className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-blue-600/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Jobs</p>
                  <p className="text-2xl font-bold text-white">{stats.activeJobs}</p>
                </div>
                <Activity className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-blue-600/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Server Uptime</p>
                  <p className="text-2xl font-bold text-white">{stats.serverUptime}</p>
                </div>
                <Server className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/30 border-blue-600/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Processed</p>
                  <p className="text-2xl font-bold text-white">{stats.totalProcessed.toLocaleString()}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Admin Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">Overview</TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-blue-600">Users</TabsTrigger>
            <TabsTrigger value="services" className="data-[state=active]:bg-blue-600">Services</TabsTrigger>
            <TabsTrigger value="backend" className="data-[state=active]:bg-blue-600">Backend</TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-blue-600">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-900/30 border-blue-600/20">
                <CardHeader>
                  <CardTitle className="text-white">System Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">API Server</span>
                    <Badge className="bg-green-600/20 text-green-400">Online</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Database</span>
                    <Badge className="bg-green-600/20 text-green-400">Connected</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Python Backend</span>
                    <Badge className="bg-green-600/20 text-green-400">Running</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">AI Models</span>
                    <Badge className="bg-yellow-600/20 text-yellow-400">Loading</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/30 border-blue-600/20">
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Image enhancement completed</span>
                      <span className="text-blue-400">2 min ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">New user registered</span>
                      <span className="text-blue-400">5 min ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Background removal processed</span>
                      <span className="text-blue-400">8 min ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">System backup completed</span>
                      <span className="text-blue-400">1 hour ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-900/30 border-blue-600/20">
              <CardHeader>
                <CardTitle className="text-white">User Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage user accounts and permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Input 
                      placeholder="Search users..." 
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">Search</Button>
                  </div>
                  <div className="text-gray-400">User management interface will be implemented here.</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <Card className="bg-slate-900/30 border-blue-600/20">
              <CardHeader>
                <CardTitle className="text-white">Service Management</CardTitle>
                <CardDescription className="text-gray-400">
                  Monitor and control AI services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Image Enhancement",
                    "Background Removal", 
                    "Text to Image",
                    "Voice Enhancement",
                    "Video Generation",
                    "Object Removal"
                  ].map((service, index) => (
                    <Card key={index} className="bg-slate-800/30 border-slate-700">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm">{service}</span>
                          <Badge className="bg-green-600/20 text-green-400 text-xs">Active</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend" className="space-y-6">
            <Card className="bg-slate-900/30 border-blue-600/20">
              <CardHeader>
                <CardTitle className="text-white">Python Backend Control</CardTitle>
                <CardDescription className="text-gray-400">
                  Monitor and control the Python backend services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Backend Status</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Flask API</span>
                        <Badge className="bg-green-600/20 text-green-400">Running</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Celery Workers</span>
                        <Badge className="bg-green-600/20 text-green-400">4 Active</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Redis Queue</span>
                        <Badge className="bg-green-600/20 text-green-400">Connected</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full border-blue-600 text-blue-400">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Restart Backend
                      </Button>
                      <Button variant="outline" className="w-full border-yellow-600 text-yellow-400">
                        <Database className="w-4 h-4 mr-2" />
                        Clear Cache
                      </Button>
                      <Button variant="outline" className="w-full border-purple-600 text-purple-400">
                        <Activity className="w-4 h-4 mr-2" />
                        View Logs
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-slate-900/30 border-blue-600/20">
              <CardHeader>
                <CardTitle className="text-white">System Settings</CardTitle>
                <CardDescription className="text-gray-400">
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-gray-300">API Rate Limit</Label>
                    <Input 
                      defaultValue="100" 
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Max File Size (MB)</Label>
                    <Input 
                      defaultValue="50" 
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Backup Interval (hours)</Label>
                    <Input 
                      defaultValue="24" 
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-300">Log Retention (days)</Label>
                    <Input 
                      defaultValue="30" 
                      className="bg-slate-800/50 border-slate-700 text-white"
                    />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Settings className="w-4 h-4 mr-2" />
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
