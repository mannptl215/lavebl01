
import { Card, CardContent } from "@/components/ui/card";
import { Users, Image, Clock, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    description: "Creative professionals worldwide"
  },
  {
    icon: Image,
    value: "120k+",
    label: "Images Processed",
    description: "High-quality transformations"
  },
  {
    icon: Clock,
    value: "97.2%",
    label: "Uptime",
    description: "Reliable service guarantee"
  },
  {
    icon: Star,
    value: "4.7/5",
    label: "User Rating",
    description: "Customer satisfaction score"
  }
];

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-900/30 border-blue-600/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-blue-300 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

