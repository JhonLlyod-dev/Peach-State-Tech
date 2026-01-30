"use client";

import { useState } from "react";

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
        onClick={handleCopy}
        className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
      >
        <svg
          className="w-5 h-5 text-gray-600 group-hover:text-peach transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
      </button>

      {/* Popup */}
      {copied && (
        <div className="absolute -top-6 left-1/16 motion-preset-slide-up-md  bg-peach text-white text-sm px-3 py-1 rounded shadow-lg">
          Copied!
        </div>
      )}
    </div>
  );
}
