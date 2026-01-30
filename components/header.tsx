'use client';

import Link from "next/link";
import {Search,Logs,X} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";


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
    <header className="flex items-center justify-between   py-4  px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 padding ">
      <Link href="/">
        <div className="flex-center flex-col">
          <img src="/logo1.png" alt="Company Logo" className="w-10 motion-preset-pop motion-delay-100 hover-link" />
          <h3 className="text-sm font-bold motion-preset-pop motion-delay-200">Peach State</h3>
        </div>
      </Link>

      <nav className="flex-center gap-8 flex-row-reverse lg:flex-row  ">
        <div className="flex relative lg:hidden" >
          <button className="motion-preset-pop motion-delay-100" onClick={()=> setIsOpen(!isOpen)}>
            {isOpen && <X /> || <Logs />}
          </button>

          { isOpen && 
            <div className=" motion-preset-blur-down-md absolute z-40 top-10 right-0 bg-white border border-gray-100 shadow-sm p-4 ">
              <ul className=" font-medium  space-x-8 space-y-4">
                <li className=" px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-peach">
                  <Link href="/">Latest</Link>
                </li>
                <li className="px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-peach">
                  <Link href="/browse?">Browse</Link>
                </li>
                <li className="px-1 w-full border-b-2 border-transparent   active:border-peach hover:border-peach active:text-peach">
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
            <Link href="/browse?">Browse</Link>
          </li>
          <li className="motion-preset-slide-down-right motion-delay-300 nav-link">
            <Link href="/about">About</Link>
          </li>
        </ul>

        <div className=" motion-preset-slide-down-right motion-delay-100 border hidden sm:flex-center border-l-4  border-l-peach gap-1 border-gray-100 shadow-sm p-2 px-4 rounded-sm">
          <input type="text"
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            value={searchQuery}
            className={`
              outline-none
              font-extralight
              transition-all
              duration-300
              ${isSearchOpen ? "w-64" : "w-13"}
            `}
            placeholder="Search blog..."
          />

          <button onClick={handleSearch} className="hover:text-peach cursor-pointer">
              <Search size={16} />
          </button>

        </div>


      </nav>

    </header>
  );
}