"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Zap, Gem, CircleDot, Sparkles } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-[family-name:var(--font-jost)] overflow-x-hidden">
      {/* Background Image - Top Section */}
      <div 
        className="absolute top-0 left-0 right-0 h-[800px] z-0"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.8,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765567223502.png"
            alt="Nvyra X Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <Link href="/" className="text-xl font-medium text-white tracking-[0.05em]">Nvyra X</Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            About us
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Blackwell
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Velora
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Sustainability
          </Link>
          <Link href="/pricing" className="text-white text-[20px] font-normal border-b border-white pb-0.5">
            Pricing
          </Link>
          <Link href="#" className="text-[#FFFEFE]/90 text-[20px] font-normal hover:opacity-80 transition-opacity">
            Sentinel
          </Link>
        </div>

        <div className="flex items-center">
          <button className="bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors tracking-[0.05em]">
            Contact us
          </button>
          <Link 
            href="/login"
            className="bg-black/50 backdrop-blur-sm border-y border-r border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors tracking-[0.05em]"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="bg-[#002BFF] border border-[#002BFF] px-4 py-2 text-sm text-white hover:bg-[#0022cc] transition-colors tracking-[0.05em]"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="relative z-10 px-6 pt-12 pb-20 max-w-[1400px] mx-auto">
        {/* Header Content */}
        <div className="mb-24 mt-8">
          <h1 className="text-6xl font-normal mb-8 tracking-wide">Pricing</h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed font-light">
            With Nvyra, you always pay for what you use and<br />
            nothing more. You never pay for idle resources —<br />
            just actual compute time, by the second.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Standard Card */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <CircleDot className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl font-normal mb-6">Standard</h2>
              <p className="text-white/80 text-lg leading-relaxed h-24">
                Best for small, fast-moving teams, essential tools to unlock growth.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">€0</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Access to Basic Models</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">No credit card required</span>
              </div>
            </div>

            <button className="w-full max-w-[200px] py-3 px-6 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-lg mx-auto md:mx-0 mt-auto">
              Get started
            </button>
          </div>

          {/* Pro Card */}
          <div className="flex flex-col h-full relative">
            <div className="absolute top-0 right-0">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white bg-black/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 fill-white" />
                <span className="text-sm font-medium">Popular</span>
              </div>
            </div>

            <div className="mb-8">
              <Zap className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl font-normal mb-6">Pro</h2>
              <p className="text-white/80 text-lg leading-relaxed h-24">
                Ideal for growing businesses, access advanced AI models, API integrations, and priority support.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">€9</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">3x Usage of Free Tier</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Acess to our most advanced models</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Limited <span className="opacity-50">beta</span> access to Velora</span>
              </div>
            </div>

            <button className="w-full max-w-[200px] py-3 px-6 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-lg mx-auto md:mx-0 mt-auto">
              Get started
            </button>
          </div>

          {/* Ultra Card */}
          <div className="flex flex-col h-full">
            <div className="mb-8">
              <Gem className="w-12 h-12 text-white mb-6" strokeWidth={1.5} />
              <h2 className="text-4xl font-normal mb-6">Ultra</h2>
              <p className="text-white/80 text-lg leading-relaxed h-24">
                Built for scale, custom solutions, dedicated infrastructure, and strategic AI guidance.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">€21</span>
                <span className="text-white/60 text-lg">/month</span>
              </div>
            </div>

            <div className="flex-grow space-y-4 mb-12">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">12x usage of free tier</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Highest levels of access to Velora</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Priority access</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Run on state of the art data center GPU's</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 shrink-0" />
                <span className="text-lg font-light">Up to 53x faster than standard version</span>
              </div>
            </div>

            <button className="w-full max-w-[200px] py-3 px-6 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-lg mx-auto md:mx-0 mt-auto">
              Get started
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
