import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const useCopyEmail = () => {
  const { toast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("lucieraoult@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email copied!",
        description: "lucieraoult@gmail.com has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please try selecting and copying the email manually.",
        variant: "destructive",
      });
    }
  };

  return {
    copyEmailToClipboard,
    copiedEmail,
  };
}; 