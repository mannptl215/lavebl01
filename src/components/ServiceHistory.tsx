
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceHistory = () => {
  return (
    <Card className="bg-slate-900/30 border-blue-600/20">
      <CardHeader>
        <CardTitle className="text-white">Recent Jobs</CardTitle>
        <CardDescription className="text-gray-400">
          Your recent processing history
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <p className="text-gray-500">No recent jobs for this service.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceHistory;
