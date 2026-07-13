'use client';
import Image from "next/image";

export default function Error() {
  return (
    <div className="flex flex-col items-center min-h-[80vh] justify-center gap-4 py-12">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/logo1.webp"
          alt="Peach State Tech"
          fill
          sizes="96px"
          className="object-contain motion-preset-fade-sm"
          style={{ animation: "psFadeA 1.8s ease-in-out infinite" }}
          priority
        />
        <Image
          src="/logo_white.webp"
          alt="Peach State Tech"
          fill
          sizes="96px"
          className="object-contain"
          style={{ animation: "psFadeB 1.8s ease-in-out infinite" }}
          priority
        />
      </div>

      <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-zinc-400">
        PEACH STATE TECH
      </p>

      <style>{`
        @keyframes psFadeA {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(0.9); }
        }
        @keyframes psFadeB {
          0%, 100% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}