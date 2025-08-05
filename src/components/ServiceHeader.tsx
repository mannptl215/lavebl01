
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Lock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceHeaderProps {
  serviceName: string;
  serviceDescription: string;
  isAuthenticated: boolean;
  freeUsesRemaining: number;
  maxFreeUses: number;
  needsLogin: boolean;
}

const ServiceHeader = ({ 
  serviceName, 
  serviceDescription, 
  isAuthenticated, 
  freeUsesRemaining, 
  maxFreeUses, 
  needsLogin 
}: ServiceHeaderProps) => {
  return (
    <Card className="bg-slate-900/30 border-blue-600/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white text-2xl">{serviceName}</CardTitle>
            <CardDescription className="text-gray-400 mt-2">
              {serviceDescription}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className="bg-green-600/20 text-green-400 border-green-600/30">
              Active
            </Badge>
            {!isAuthenticated && (
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">
                  {freeUsesRemaining} free uses left
                </span>
              </div>
            )}
          </div>
        </div>
        
        {needsLogin && (
          <div className="mt-4 p-4 bg-orange-600/10 border border-orange-600/30 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-semibold">Free trial ended</span>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              You've used all {maxFreeUses} free generations. Sign in to continue using our AI services.
            </p>
            <div className="flex gap-2">
              <Link to="/login">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" variant="outline" className="border-blue-600/50 text-blue-400 hover:bg-blue-600/10">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        )}
      </CardHeader>
    </Card>
  );
};

export default ServiceHeader;
