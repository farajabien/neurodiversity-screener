'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { usePdfTracking } from "@/hooks/useAnalytics";

interface PdfDownloadButtonProps {
  href: string;
  type: 'adhd' | 'autism';
  variant?: 'default' | 'outline';
  size?: 'default' | 'icon';
  className?: string;
}

export function PdfDownloadButton({ 
  href, 
  type, 
  variant = "outline", 
  size = "icon",
  className 
}: PdfDownloadButtonProps) {
  const { trackAdhdPdfDownload, trackAutismPdfDownload } = usePdfTracking();
  
  const handleClick = () => {
    if (type === 'adhd') {
      trackAdhdPdfDownload();
    } else {
      trackAutismPdfDownload();
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      asChild
      className={className}
      onClick={handleClick}
    >
      <Link href={href} target="_blank">
        <FileText className="h-4 w-4" />
      </Link>
    </Button>
  );
} 