"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        aria-label="Copy link"
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors duration-200 group"
      >
        {copied ? (
          <Check className="w-5 h-5 text-peach transition-colors" />
        ) : (
          <Link2 className="w-5 h-5 text-gray-600 dark:text-zinc-400 group-hover:text-peach transition-colors" />
        )}
        <span className="text-sm font-medium text-gray-600 dark:text-zinc-400 group-hover:text-peach transition-colors">
          {copied ? "Copied!" : "Copy link"}
        </span>
      </button>

      {/* Popup */}
      {copied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 motion-preset-slide-up-md bg-peach text-white text-sm px-3 py-1 rounded shadow-lg whitespace-nowrap">
          Copied!
        </div>
      )}
    </div>
  );
}