'use client';

import Link from "next/link";
import {Search,Logs,X} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import localfont from "next/font/local";

const peach_font = localfont({
  src: "../public/fonts/yfilescompact.ttf",
  variable: "--font-peach",
});


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      const url = searchQuery;
      setSearchQuery('');
      router.push(`/browse?q=${url}`);

    }
  };

  return (
    <header className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 py-4  px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 padding ">
      <Link href="/">
        <div className={`${peach_font.variable} flex-center flex-col  font-logo`}>
          
          <div className="flex-center gap-2 hover-link ">
            <span className="hidden sm:block text-3xl font-bold motion-preset-pop motion-delay-100 uppercase hover:text-gradient-peach transition-colors">Peach</span>
            <img src="/logo1.webp" alt="Peach State Tech Logo" height={10} width={10} className="w-10 motion-preset-pop motion-delay-200 " />
            <span className="hidden sm:block text-3xl font-bold motion-preset-pop motion-delay-300 uppercase hover:text-gradient-peach transition-colors">State</span>
          </div>
          <span className=" hidden lg:block text-xl font-semibold  motion-preset-pop motion-delay-400 uppercase tracking-widest text-gradient-peach hover:text-gradient-violet transition-colors">T e c h</span>
        </div>
      </Link>

      <nav className="flex-center gap-8 flex-row-reverse lg:flex-row  " id="mobile-menu">
        <div className="flex relative lg:hidden" >
        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="motion-preset-pop motion-delay-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Logs />}
        </button>

          { isOpen && 
            <div className=" motion-preset-blur-down-md absolute z-40 top-10 right-0 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 shadow-sm dark:shadow-black/30 p-4 ">
              <ul className=" font-medium  space-x-8 space-y-4">
                <li className=" px-1 w-full border-b-2 border-transparent    active:border-peach hover:border-peach active:text-violet">
                  <Link href="/">Latest</Link>
                </li>
                <li className=" px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-violet">
                  <Link href="/blog">Blogs</Link>
                </li>
                <li className="px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-violet">
                  <Link href="/browse?">Browse</Link>
                </li>
                <li className="px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-violet">
                  <Link href="/about">About</Link>
                </li>
              </ul>
            </div>
          }
        </div>



        <ul className=" hidden  lg:flex space-x-8 ">
          <li className="motion-preset-slide-down-right motion-delay-100 nav-link">
            <Link href="/">Latest</Link>
          </li>
          <li className="motion-preset-slide-down-right motion-delay-200 nav-link">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="motion-preset-slide-down-right motion-delay-300 nav-link">
            <Link href="/browse?">Browse</Link>
          </li>
          <li className="motion-preset-slide-down-right motion-delay-400 nav-link">
            <Link href="/about">About</Link>
          </li>
        </ul>

        <div className=" motion-preset-slide-down-right bg-gradient-peach dark:bg-gradient-violet motion-delay-100 border hidden sm:flex-center gap-1 border-gray-100 shadow-sm p-2 px-4 rounded-sm">
          <input type="text"
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            value={searchQuery}
            className={`
              outline-none
              font-extralight
              placeholder:text-white
              tracking-wide
              text-white
              transition-all
              duration-300
              ${isSearchOpen ? "w-64" : "w-13"}
            `}
            placeholder="Search blog..."
          />

          <button aria-label="Search" onClick={handleSearch} className="text-white hover:text-violet cursor-pointer">
              <Search size={16} />
          </button>

        </div>


      </nav>

    </header>
  );
}