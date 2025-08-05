
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Loader2, Lock } from "lucide-react";

interface ServiceInputProps {
  serviceId: string;
  file: File | null;
  textInput: string;
  isProcessing: boolean;
  needsLogin: boolean;
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (value: string) => void;
  onProcess: () => void;
}

const ServiceInput = ({
  serviceId,
  file,
  textInput,
  isProcessing,
  needsLogin,
  onFileUpload,
  onTextChange,
  onProcess
}: ServiceInputProps) => {
  const isTextBasedService = serviceId.includes("text-to") || serviceId.includes("prompt-generation");
  const isAudioService = serviceId.includes("voice");

  return (
    <Card className="bg-slate-900/30 border-blue-600/20">
      <CardHeader>
        <CardTitle className="text-white">Input</CardTitle>
        <CardDescription className="text-gray-400">
          {isTextBasedService ? "Enter your text prompt" : "Upload your file for processing"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {isTextBasedService ? (
          <div>
            <Label htmlFor="textInput" className="text-gray-300">Text Prompt</Label>
            <Textarea
              id="textInput"
              value={textInput}
              onChange={(e) => onTextChange(e.target.value)}
              placeholder="Enter your detailed text prompt here..."
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-500 min-h-[120px]"
              disabled={needsLogin}
            />
          </div>
        ) : (
          <div>
            <Label htmlFor="fileUpload" className="text-gray-300">
              Upload {isAudioService ? "Audio" : "Image"} File
            </Label>
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center hover:border-blue-600/50 transition-colors">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <Input
                id="fileUpload"
                type="file"
                accept={isAudioService ? "audio/*" : "image/*"}
                onChange={onFileUpload}
                className="hidden"
                disabled={needsLogin}
              />
              <Label 
                htmlFor="fileUpload" 
                className={`cursor-pointer ${needsLogin ? 'text-gray-500 cursor-not-allowed' : 'text-blue-400 hover:text-blue-300'}`}
              >
                Click to upload or drag and drop
              </Label>
              <p className="text-gray-500 text-sm mt-2">
                {isAudioService ? "MP3, WAV, M4A up to 50MB" : "PNG, JPG, GIF up to 10MB"}
              </p>
              {file && (
                <div className="mt-4 p-3 bg-slate-800/50 rounded border border-slate-600">
                  <p className="text-green-400 text-sm">✓ {file.name}</p>
                </div>
              )}
            </div>
          </div>
        )}

        <Button 
          onClick={onProcess}
          disabled={isProcessing || needsLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : needsLogin ? (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Sign In Required
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Process {isTextBasedService ? "Text" : "File"}
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceInput;
