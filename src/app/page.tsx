import Image from "next/image";
import Link from "next/link";
import { Hexagon } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Navbar */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <Hexagon className="h-8 w-8 text-white stroke-[1.5]" />
          <span className="text-2xl font-medium tracking-wide text-white">Nvyra X</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-base font-normal text-gray-200">
          <Link href="#" className="hover:text-white transition-colors">About us</Link>
          <Link href="#" className="hover:text-white transition-colors">Blackwell</Link>
          <Link href="#" className="hover:text-white transition-colors">Velora</Link>
          <Link href="#" className="hover:text-white transition-colors">Sustainability</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#" className="hover:text-white transition-colors">Sentinel</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-white border border-white/30 px-5 py-2 rounded-none hover:bg-white/10 transition-all">Contact us</Link>
          <Link href="/login" className="text-sm font-medium text-white px-4 hover:opacity-80 transition-opacity">Login</Link>
          <Link
            href="/signup"
            className="bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-all"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-24 px-4 text-center min-h-[75vh]">
        <h1 className="max-w-6xl text-5xl md:text-7xl font-light tracking-wide leading-tight mb-16 drop-shadow-2xl">
          The AI infrastructure that brings <br />
          <span className="italic">clarity</span> to complexity.
        </h1>

        <div className="flex flex-col sm:flex-row gap-6">
          <button className="group relative rounded-full px-[2px] py-[2px] bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-transform">
            <div className="bg-black rounded-full px-10 py-3.5 relative">
               <span className="text-lg font-normal text-white">Get started</span>
            </div>
          </button>
          
          <button className="rounded-full border border-white px-10 py-3.5 text-lg font-normal text-white hover:bg-white/10 transition-all hover:scale-105">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}