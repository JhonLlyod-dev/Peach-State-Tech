"use client";

import Link from "next/link";
import Image from "next/image";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center gap-4 sm:gap-5">
      
      <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-peach motion-preset-shake duration-300 motion-delay-200" />

      <h1 className=" motion-preset-blur-down-md motion-delay-200 text-peach font-black tracking-widest text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        404
      </h1>

      <Image
        src="/404.png"
        alt="Embarrassed animated character for 404 page"
        width={160}
        height={160}
        className=" motion-preset-pop motion-delay-200 w-28 sm:w-32 md:w-40"
        priority
      />

      <p className="motion-preset-blur-down-md motion-delay-200 text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-md">
        Oops! This page doesn’t exist or may have been moved.
      </p>

      <Link href="/" className="mt-4 sm:mt-6">
        <button className=" motion-preset-blur-down-md motion-delay-200 flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-peach text-white rounded-lg text-sm sm:text-base hover-link">
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </Link>
    </section>
  );
}
