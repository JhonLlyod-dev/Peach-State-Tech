'use client';

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/browse?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="w-full motion-preset-fade motion-delay-500 max-w-xl">
      <div className="flex items-center gap-2 bg-gradient-peach dark:bg-gradient-violet text-foreground border border-zinc-200  rounded-md px-4 py-2.5 shadow-sm">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="outline-none w-full text-sm sm:text-base bg-transparent placeholder:text-white text-white tracking-wide"
          placeholder="Search startups, founders, or Georgia tech topics..."
          aria-label="Search Peach State Tech articles"
        />
        <button
          onClick={handleSearch}
          aria-label="Search"
          className="hover:text-violet cursor-pointer text-white transition-colors"
        >
          <Search size={18}  />
        </button>
      </div>
    </div>
  );
}