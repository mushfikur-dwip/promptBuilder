// components/CopyButton.js
"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group relative inline-flex items-center justify-center p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 hover:border-gray-600"
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400 transition-transform duration-200 scale-110" />
      ) : (
        <Copy className="w-4 h-4 text-gray-300 group-hover:text-white transition-transform duration-200" />
      )}
    </button>
  );
}
