
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Settings, Image, Video, Brush, Wand2, Camera, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Image Enhancement",
    description: "Transform your images with AI-powered enhancement technology",
    icon: Image,
    category: "Image Processing",
    features: ["High-quality upscaling", "Noise reduction", "Color correction"]
  },
  {
    title: "Image to Animation",
    description: "Bring your static images to life with dynamic animations",
    icon: Video,
    category: "Animation",
    features: ["Smooth transitions", "Custom effects", "Multiple formats"]
  },
  {
    title: "Image to Cartoon",
    description: "Convert photos into stunning cartoon-style illustrations",
    icon: Brush,
    category: "Style Transfer",
    features: ["Multiple cartoon styles", "Adjustable intensity", "High resolution"]
  },
  {
    title: "Image to Pencil Art",
    description: "Transform photos into beautiful pencil sketch artwork",
    icon: Wand2,
    category: "Artistic",
    features: ["Realistic sketches", "Custom shading", "Various pencil styles"]
  },
  {
    title: "Text to Image",
    description: "Generate stunning images from text descriptions",
    icon: Image,
    category: "Generation",
    features: ["High-quality outputs", "Multiple styles", "Fast generation"]
  },
  {
    title: "Background Removal",
    description: "Remove backgrounds with precision AI technology",
    icon: Camera,
    category: "Image Processing",
    features: ["Automatic detection", "Edge refinement", "Bulk processing"]
  },
  {
    title: "Voice Enhancement",
    description: "Improve audio quality with advanced AI algorithms",
    icon: Volume2,
    category: "Audio",
    features: ["Noise reduction", "Clarity boost", "Multiple formats"]
  },
  {
    title: "Text to Video",
    description: "Create engaging videos from text descriptions",
    icon: Video,
    category: "Video Generation",
    features: ["HD quality", "Custom duration", "Multiple styles"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-300 border-blue-600/30">
              AI Services
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful AI Tools at Your Fingertips
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive suite of AI-powered services designed to transform your creative workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Stats />
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-600/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Creative Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of creators who are already using VIZMORA to bring their ideas to life with cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-600/10 px-8 py-3">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
