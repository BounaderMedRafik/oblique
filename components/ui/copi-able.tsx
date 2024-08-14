import React, { useState } from "react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const Copiable = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger>
          <code>{text}</code>
        </TooltipTrigger>
        <TooltipContent side="right">
          <div onClick={handleCopy} className="px-3 py-1.5 cursor-pointer">
            {copied ? "Copied!" : "Copy!"}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Copiable;
