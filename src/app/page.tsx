"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoCarousel } from "@/components/LogoCarousel";
import { IndustryCarousel } from "@/components/IndustryCarousel";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { FeatureGrid } from "@/components/FeatureGrid";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section - Full Screen */}
      <div className="relative h-screen w-full flex flex-col overflow-hidden">
        {/* Full screen background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
              alt="Nvyra X Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-xl font-medium text-white tracking-[0.05em]">Nvyra X</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="#" className="text-[#FFFEFE]/90 text-[18px] font-normal hover:text-white transition-colors">
              About us
            </Link>
            <Link href="#" className="text-[#FFFEFE]/90 text-[18px] font-normal hover:text-white transition-colors">
              Blackwell
            </Link>
            <Link href="#" className="text-[#FFFEFE]/90 text-[18px] font-normal hover:text-white transition-colors">
              Velora
            </Link>
            <Link href="#" className="text-[#FFFEFE]/90 text-[18px] font-normal hover:text-white transition-colors">
              Sentinel
            </Link>
            <Link href="/pricing" className="text-[#FFFEFE]/90 text-[18px] font-normal hover:text-white transition-colors">
              Pricing
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/login"
              className="text-sm text-white hover:text-white/80 transition-colors tracking-[0.05em]"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors rounded-sm tracking-[0.05em]"
            >
              Sign up
            </Link>
          </div>
        </nav>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight mb-8">
              The AI infrastructure for <br />
              <span className="font-normal italic">truth</span> in the digital age.
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-12">
              Highly sophisticated deepfake and disinformation detection. 
              Bringing clarity to complexity in an era of synthetic media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <button 
              className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-gray-100 transition-colors min-w-[180px]"
            >
              Start detecting
            </button>
            <button 
              className="px-8 py-4 bg-transparent border border-white text-white text-lg font-medium hover:bg-white/10 transition-colors min-w-[180px]"
            >
              View research
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
      
      {/* Rest of the content below the fold */}
      <main className="relative z-10 bg-black">
        {/* Industry Risk Section */}
        <section className="py-32 px-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Synthetic media is the <span className="text-red-500">single greatest risk</span> to digital trust.
            </h2>
            <p className="text-xl text-gray-400">
              As generative AI scales, so does the sophistication of disinformation. 
              Nvyra X provides the immune system for the internet.
            </p>
          </div>
        </section>

        <LogoCarousel />
        <IndustryCarousel />
        <LeaderboardSection />
        <FeatureGrid />
      </main>
    </div>
  );
}