
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, History, User, Settings, LogOut, Search, Filter } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import ServicePanel from "@/components/ServicePanel";

const services = [
  { id: "image-enhancement", name: "Image Enhancement", category: "Image Processing", status: "active" },
  { id: "image-to-animation", name: "Image to Animation", category: "Animation", status: "active" },
  { id: "image-to-cartoon", name: "Image to Cartoon", category: "Style Transfer", status: "active" },
  { id: "image-to-pencil", name: "Image to Pencil Art", category: "Artistic", status: "active" },
  { id: "text-to-image", name: "Text to Image", category: "Generation", status: "active" },
  { id: "text-to-realistic", name: "Text to Realistic", category: "Generation", status: "active" },
  { id: "text-to-video", name: "Text to Video", category: "Video Generation", status: "active" },
  { id: "background-removal", name: "Background Removal", category: "Image Processing", status: "active" },
  { id: "background-generation", name: "Background Generation", category: "Generation", status: "active" },
  { id: "object-remover", name: "Object Remover", category: "Image Processing", status: "active" },
  { id: "watermark-removal", name: "Watermark Removal", category: "Image Processing", status: "active" },
  { id: "photomaker", name: "PhotoMaker", category: "Enhancement", status: "active" },
  { id: "image-fulfill", name: "Image Fulfill", category: "Enhancement", status: "active" },
  { id: "voice-enhancement", name: "Voice Enhancement", category: "Audio", status: "active" },
  { id: "colorization", name: "Image Colorization", category: "Enhancement", status: "active" },
  { id: "prompt-generation", name: "Image to Prompt", category: "Generation", status: "active" },
  { id: "image-to-video", name: "Image to Video", category: "Video Generation", status: "active" }
];

const Dashboard = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    const name = localStorage.getItem("userName") || "User";
    
    if (!isAuth) {
      navigate("/login");
      return;
    }
    
    setUserName(name);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || service.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(services.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <DashboardHeader userName={userName} onLogout={handleLogout} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 min-h-screen bg-slate-900/50 border-r border-blue-600/20 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-white mb-4">AI Services</h2>
            
            {/* Search */}
            <div className="mb-4">
              <Label htmlFor="search" className="text-gray-300 text-sm">Search Services</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <Label className="text-gray-300 text-sm mb-2 block">Filter by Category</Label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Badge
                    key={category}
                    variant={filterCategory === category ? "default" : "secondary"}
                    className={`cursor-pointer text-xs ${
                      filterCategory === category 
                        ? "bg-blue-600 text-white" 
                        : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                    }`}
                    onClick={() => setFilterCategory(category)}
                  >
                    {category === "all" ? "All" : category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="space-y-2">
            {filteredServices.map(service => (
              <Card
                key={service.id}
                className={`cursor-pointer transition-all ${
                  selectedService === service.id
                    ? "bg-blue-600/20 border-blue-600/50"
                    : "bg-slate-800/30 border-slate-700 hover:bg-slate-800/50"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-white font-medium text-sm">{service.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">{service.category}</p>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-600/20 text-green-400 border-green-600/30 text-xs"
                    >
                      {service.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {selectedService ? (
            <ServicePanel 
              serviceId={selectedService} 
              serviceName={services.find(s => s.id === selectedService)?.name || ""} 
            />
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-12 h-12 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Welcome to VIZMORA Dashboard</h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Select a service from the sidebar to get started with AI-powered transformations. 
                Upload your files and watch the magic happen!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="bg-slate-900/30 border-blue-600/20">
                  <CardContent className="p-6 text-center">
                    <Upload className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Easy Upload</h3>
                    <p className="text-gray-400 text-sm">Drag and drop your files or click to upload</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/30 border-blue-600/20">
                  <CardContent className="p-6 text-center">
                    <Settings className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">AI Processing</h3>
                    <p className="text-gray-400 text-sm">Advanced AI algorithms process your content</p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900/30 border-blue-600/20">
                  <CardContent className="p-6 text-center">
                    <Download className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-2">Quick Download</h3>
                    <p className="text-gray-400 text-sm">Get your transformed content instantly</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
