
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: any;
    category: string;
    features: string[];
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  const { title, description, icon: Icon, category, features } = service;

  return (
    <Card className="group bg-slate-900/50 border-blue-600/20 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/10 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <Badge variant="secondary" className="bg-slate-800/50 text-gray-300 border-slate-700">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
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
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
