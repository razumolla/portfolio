"use client";

import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  value: string;
  label: string;
}

export function CopyButton({ value, label }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(`${label} copied to clipboard`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Could not copy the ${label.toLowerCase()}. Please copy it manually.`);
    }
  };

  return (
    <Button variant="outline" size="lg" onClick={handleCopy}>
      {copied ? <LuCheck aria-hidden /> : <LuCopy aria-hidden />}
      {copied ? "Copied" : `Copy ${label.toLowerCase()}`}
    </Button>
  );
}
