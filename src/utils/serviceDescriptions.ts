
export const getServiceDescription = (id: string): string => {
  const descriptions: { [key: string]: string } = {
    "image-enhancement": "Enhance image quality, resolution, and clarity using advanced AI algorithms.",
    "image-to-animation": "Transform static images into dynamic animations with smooth transitions.",
    "image-to-cartoon": "Convert photographs into cartoon-style illustrations with customizable styles.",
    "image-to-pencil": "Create artistic pencil sketch renditions of your photographs.",
    "text-to-image": "Generate high-quality images from text descriptions using AI.",
    "text-to-realistic": "Create photorealistic images from detailed text prompts.",
    "text-to-video": "Generate video content from text descriptions and scripts.",
    "background-removal": "Remove backgrounds from images with precision and accuracy.",
    "background-generation": "Generate new backgrounds for your images using AI.",
    "object-remover": "Remove unwanted objects from images seamlessly.",
    "watermark-removal": "Remove watermarks and unwanted text from images.",
    "photomaker": "Enhance and edit photos with advanced AI-powered tools.",
    "image-fulfill": "Complete partial images and fill missing areas intelligently.",
    "voice-enhancement": "Improve audio quality and clarity using AI enhancement.",
    "colorization": "Add realistic colors to black and white images.",
    "prompt-generation": "Generate detailed text prompts from uploaded images.",
    "image-to-video": "Convert static images into engaging video content."
  };
  return descriptions[id] || "Advanced AI processing for your content.";
};
