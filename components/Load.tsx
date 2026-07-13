import Image from "next/image";

export default function Load() {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <Image
          src="/logo1.webp"
          alt="Peach State Tech"
          className="object-contain"
          fill
          sizes="48px"
          style={{ animation: "psFadeA 1.8s ease-in-out infinite" }}
          priority
        />
        <Image
          src="/logo_white.webp"
          alt="Peach State Tech"
          className="object-contain"
          style={{ animation: "psFadeB 1.8s ease-in-out infinite" }}
          fill
          sizes="48px"
          priority
        />
      </div>

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