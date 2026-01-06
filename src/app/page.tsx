import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/navbar";

// Dynamic import for code splitting - BrandCarousel loads after initial paint
const BrandCarousel = dynamic(() => import("@/components/ui/brand-carousel"), {
  loading: () => (
    <div className="w-full h-[100px] bg-black/50 animate-pulse" />
  ),
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
      {/* Background Image - optimized with proper sizing */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=1920&resize=contain"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-32 px-4 text-center">
        <h1
          className="font-light text-white mb-16 drop-shadow-2xl"
          style={{
            fontFamily: 'Jost',
            fontSize: 'clamp(32px, 5vw, 64.9px)',
            letterSpacing: '0.05em',
            lineHeight: '1.2'
          }}
        >
          The AI infrastructure that brings <br />
          <span className="italic">clarity</span> to complexity.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            href="/signup"
            className="flex items-center justify-center px-10 py-3.5 text-lg font-normal text-white transition-all hover:scale-105 hover:brightness-110"
            style={{ backgroundColor: '#002BFF' }}
          >
            Get started
          </Link>

          <button className="rounded-full border border-white px-10 py-3.5 text-lg font-normal text-white hover:bg-white/10 transition-all hover:scale-105">
            Contact us
          </button>
        </div>
      </main>

      {/* Brand Carousel - lazy loaded */}
      <div className="relative z-10 w-full mt-32">
        <BrandCarousel />
      </div>
    </div>
  );
}
