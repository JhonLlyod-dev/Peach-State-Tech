import { FaFacebookF, FaTiktok , FaLinkedinIn, FaInstagram,FaYoutube } from "react-icons/fa";
import Link from "next/link";
import NewsletterForm from "./Newsletter";
import { FaX, FaY, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-10 px-6 sm:px-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        
        {/* Company Info */}
        <div className=" motion-preset-fade motion-delay-100  flex flex-col gap-2">
          <NewsletterForm/>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row gap-10 motion-preset-fade motion-delay-200">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-gray-200">Company</h4>
            <Link href="/about" className="text-gray-400 hover:text-peach transition">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-peach transition">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 motion-preset-fade motion-delay-300">
            <h4 className="font-semibold text-gray-200">Resources</h4>
            <Link href="/privacy" className="text-gray-400 hover:text-peach transition">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-peach transition">Terms of Service</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0 motion-preset-fade motion-delay-400">
          <h4 className="font-semibold text-gray-200">Socials</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61588566181619" className="text-gray-400 hover:text-peach transition" target="_blank"><FaFacebookF /></a>
            <a href="https://x.com/peach_state2026" className="text-gray-400 hover:text-peach transition" target="_blank"><FaXTwitter /></a>
            <a href="https://www.tiktok.com/@peach_state_tech" className="text-gray-400 hover:text-peach transition" target="_blank"><FaTiktok  /></a>
            <a href="https://www.youtube.com/@PeachStateTech" className="text-gray-400 hover:text-peach transition" target="_blank"><FaYoutube /></a>
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
