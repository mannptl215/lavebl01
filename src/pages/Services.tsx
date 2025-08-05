
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Image, Video, Music, Palette, Wand2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "image-enhancement",
    title: "Image Enhancement",
    description: "Enhance image quality, resolution, and clarity using advanced AI algorithms.",
    icon: Sparkles,
    category: "Image Processing",
    features: ["4K Upscaling", "Noise Reduction", "Sharpening", "Color Enhancement"],
    popular: true
  },
  {
    id: "image-to-animation",
    title: "Image to Animation",
    description: "Transform static images into dynamic animations with smooth transitions.",
    icon: Video,
    category: "Animation",
    features: ["Smooth Motion", "Custom Duration", "Multiple Formats", "HD Quality"]
  },
  {
    id: "image-to-cartoon",
    title: "Image to Cartoon",
    description: "Convert photographs into cartoon-style illustrations with customizable styles.",
    icon: Palette,
    category: "Art Style",
    features: ["Multiple Styles", "Custom Colors", "Edge Enhancement", "Style Transfer"]
  },
  {
    id: "image-to-pencil",
    title: "Image to Pencil Art",
    description: "Create artistic pencil sketch renditions of your photographs.",
    icon: Wand2,
    category: "Art Style",
    features: ["Realistic Sketching", "Line Art", "Shading Effects", "Custom Intensity"]
  },
  {
    id: "text-to-image",
    title: "Text to Image",
    description: "Generate high-quality images from text descriptions using AI.",
    icon: Image,
    category: "Generation",
    features: ["High Resolution", "Multiple Styles", "Fast Generation", "Creative Control"],
    popular: true
  },
  {
    id: "text-to-realistic",
    title: "Text to Realistic",
    description: "Create photorealistic images from detailed text prompts.",
    icon: Image,
    category: "Generation",
    features: ["Photorealistic", "High Detail", "Custom Scenes", "Professional Quality"]
  },
  {
    id: "text-to-video",
    title: "Text to Video",
    description: "Generate video content from text descriptions and scripts.",
    icon: Video,
    category: "Generation",
    features: ["HD Video", "Custom Duration", "Scene Transitions", "Audio Sync"]
  },
  {
    id: "background-removal",
    title: "Background Removal",
    description: "Remove backgrounds from images with precision and accuracy.",
    icon: Image,
    category: "Image Processing",
    features: ["Precision Cutting", "Edge Smoothing", "Bulk Processing", "API Access"]
  },
  {
    id: "background-generation",
    title: "Background Generation",
    description: "Generate new backgrounds for your images using AI.",
    icon: Palette,
    category: "Image Processing",
    features: ["Custom Scenes", "Style Matching", "High Resolution", "Seamless Blending"]
  },
  {
    id: "object-remover",
    title: "Object Remover",
    description: "Remove unwanted objects from images seamlessly.",
    icon: Wand2,
    category: "Image Processing",
    features: ["Smart Detection", "Seamless Fill", "Batch Processing", "Undo/Redo"]
  },
  {
    id: "watermark-removal",
    title: "Watermark Removal",
    description: "Remove watermarks and unwanted text from images.",
    icon: Sparkles,
    category: "Image Processing",
    features: ["Text Detection", "Clean Removal", "Quality Preservation", "Batch Support"]
  },
  {
    id: "photomaker",
    title: "PhotoMaker",
    description: "Enhance and edit photos with advanced AI-powered tools.",
    icon: Image,
    category: "Enhancement",
    features: ["Auto Enhancement", "Color Correction", "Lighting Fix", "Professional Tools"]
  },
  {
    id: "image-fulfill",
    title: "Image Fulfill",
    description: "Complete partial images and fill missing areas intelligently.",
    icon: Wand2,
    category: "Enhancement",
    features: ["Smart Fill", "Context Aware", "High Quality", "Natural Results"]
  },
  {
    id: "voice-enhancement",
    title: "Voice Enhancement",
    description: "Improve audio quality and clarity using AI enhancement.",
    icon: Music,
    category: "Audio",
    features: ["Noise Reduction", "Clarity Boost", "Volume Normalize", "Quality Enhance"]
  },
  {
    id: "colorization",
    title: "Colorization",
    description: "Add realistic colors to black and white images.",
    icon: Palette,
    category: "Enhancement",
    features: ["Natural Colors", "Historical Accuracy", "Custom Palettes", "HD Quality"]
  },
  {
    id: "prompt-generation",
    title: "Prompt Generation",
    description: "Generate detailed text prompts from uploaded images.",
    icon: Wand2,
    category: "AI Tools",
    features: ["Detailed Descriptions", "Style Analysis", "Object Detection", "Scene Understanding"]
  },
  {
    id: "image-to-video",
    title: "Image to Video",
    description: "Convert static images into engaging video content.",
    icon: Video,
    category: "Animation",
    features: ["Motion Effects", "Zoom & Pan", "Transitions", "Custom Duration"]
  }
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(services.map(service => service.category)))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navbar />
      
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI-powered tools designed to transform your creative workflow
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-600/10"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group bg-slate-900/50 border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 backdrop-blur-sm relative">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    Popular
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <service.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <Badge variant="secondary" className="bg-slate-800/50 text-gray-300 border-slate-700">
                      {service.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link to="/dashboard">
                    <Button 
                      variant="ghost" 
                      className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-600/10 group-hover:bg-blue-600/20 transition-all"
                    >
                      Try Now
                      <Wand2 className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
