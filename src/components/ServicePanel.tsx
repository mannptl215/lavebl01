
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFreeTrial } from "@/hooks/useFreeTrial";
import ServiceHeader from "@/components/ServiceHeader";
import ServiceInput from "@/components/ServiceInput";
import ServiceOutput from "@/components/ServiceOutput";
import ServiceHistory from "@/components/ServiceHistory";
import { getServiceDescription } from "@/utils/serviceDescriptions";

interface ServicePanelProps {
  serviceId: string;
  serviceName: string;
}

const ServicePanel = ({ serviceId, serviceName }: ServicePanelProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [textInput, setTextInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();
  const { freeUsesRemaining, canUseService, useService, needsLogin, isAuthenticated, maxFreeUses } = useFreeTrial();

  const isTextBasedService = serviceId.includes("text-to") || serviceId.includes("prompt-generation");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File uploaded",
        description: `${selectedFile.name} has been selected for processing.`,
      });
    }
  };

  const handleProcess = async () => {
    // Check if user can use the service
    if (!canUseService()) {
      toast({
        title: "Free trial ended",
        description: "Please sign in to continue using our services.",
        variant: "destructive",
      });
      return;
    }

    if (!isTextBasedService && !file) {
      toast({
        title: "No file selected",
        description: "Please upload a file to process.",
        variant: "destructive",
      });
      return;
    }

    if (isTextBasedService && !textInput.trim()) {
      toast({
        title: "No text provided",
        description: "Please enter text to generate content.",
        variant: "destructive",
      });
      return;
    }

    // Use the service (decrements free uses if not authenticated)
    const canProceed = useService();
    if (!canProceed) {
      toast({
        title: "Usage limit reached",
        description: "Please sign in to continue using our services.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setResult(`processed_${serviceId}_${Date.now()}.jpg`);
      setIsProcessing(false);
      
      if (!isAuthenticated) {
        toast({
          title: "Processing complete!",
          description: `Your content has been processed. You have ${freeUsesRemaining - 1} free uses remaining.`,
        });
      } else {
        toast({
          title: "Processing complete!",
          description: "Your content has been successfully processed.",
        });
      }
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <ServiceHeader
        serviceName={serviceName}
        serviceDescription={getServiceDescription(serviceId)}
        isAuthenticated={isAuthenticated}
        freeUsesRemaining={freeUsesRemaining}
        maxFreeUses={maxFreeUses}
        needsLogin={needsLogin()}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ServiceInput
          serviceId={serviceId}
          file={file}
          textInput={textInput}
          isProcessing={isProcessing}
          needsLogin={needsLogin()}
          onFileUpload={handleFileUpload}
          onTextChange={setTextInput}
          onProcess={handleProcess}
        />

        <ServiceOutput
          isProcessing={isProcessing}
          result={result}
        />
      </div>

      <ServiceHistory />
    </div>
  );
};

export default ServicePanel;
