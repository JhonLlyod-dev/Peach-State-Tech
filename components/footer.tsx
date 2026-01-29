import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram,FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 px-6 sm:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Company Info */}
        <div className=" motion-preset-fade motion-delay-100  flex flex-col gap-2">
          <h3 className="text-peach font-bold text-lg">Peach State Tech</h3>
          <p className="text-gray-400 text-sm max-w-xs">
            Connecting Georgia’s tech ecosystem with investors, entrepreneurs, and decision-makers.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-10 motion-preset-fade motion-delay-200">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-200">Company</h4>
            <Link href="/about" className="text-gray-400 hover:text-peach transition">About</Link>
          </div>

          <div className="flex flex-col gap-2 motion-preset-fade motion-delay-300">
            <h4 className="font-semibold text-gray-200">Resources</h4>
            <a href="#" className="text-gray-400 hover:text-peach transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-peach transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-peach transition">Help Center</a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0 motion-preset-fade motion-delay-400">
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-peach transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-peach transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-peach transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-peach transition"><FaInstagram /></a>
          </div>

          <div className="flex flex-col gap-2 motion-preset-fade motion-delay-400">
            <span className="text-sm text-gray-300 font-semibold">
              Get Featured
            </span>

            <div className="flex items-center  border border-gray-700 rounded-sm overflow-hidden ">
              <input
                type="email"
                placeholder="Your email"
                className="
                  bg-transparent
                  outline-none
                  px-3
                  text-sm
                  text-white
                  placeholder:text-gray-400
                  w-full
                "
              />
              <button
                className="
                  px-3
                  py-2
                  bg-peach
                  text-white
                  hover:opacity-90
                  transition
                "
                aria-label="Send email"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-gray-500 text-sm text-center">
        &copy; {new Date().getFullYear()} Peach State Tech. All rights reserved.
      </div>
    </footer>
  );
}
