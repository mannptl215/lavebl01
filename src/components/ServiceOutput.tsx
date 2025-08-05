
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Loader2, CheckCircle, AlertCircle } from "lucide-react";

interface ServiceOutputProps {
  isProcessing: boolean;
  result: string | null;
}

const ServiceOutput = ({ isProcessing, result }: ServiceOutputProps) => {
  return (
    <Card className="bg-slate-900/30 border-blue-600/20">
      <CardHeader>
        <CardTitle className="text-white">Output</CardTitle>
        <CardDescription className="text-gray-400">
          Your processed content will appear here
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isProcessing ? (
          <div className="text-center py-12">
            <Loader2 className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-spin" />
            <p className="text-gray-400">Processing your content...</p>
            <div className="w-full bg-slate-700 rounded-full h-2 mt-4">
              <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          </div>
        ) : result ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <p className="text-green-400 mb-4">Processing completed successfully!</p>
            <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-4 mb-4">
              <p className="text-gray-400 text-sm">Output file: {result}</p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download Result
            </Button>
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-500">No output yet. Process your content to see results.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceOutput;
