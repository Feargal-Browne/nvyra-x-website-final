"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765566761862.png?width=8000&height=8000&resize=contain')`,
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/nvyra-logo.png"
            alt="Nvyra X Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-xl font-medium text-white tracking-[0.05em]">Nvyra X</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            About us
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            Blackwell
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            Velora
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            Sustainability
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            Pricing
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity tracking-[0.05em]">
            Sentinel
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-[#2a2a2a] border border-[#444] px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] transition-colors tracking-[0.05em]">
            Contact us
          </button>
          <button className="bg-[#2a2a2a] border border-[#444] px-4 py-2 text-sm text-white hover:bg-[#3a3a3a] transition-colors tracking-[0.05em]">
            Login
          </button>
          <button className="bg-[#3B5BDB] px-4 py-2 text-sm text-white hover:bg-[#2f4ab8] transition-colors tracking-[0.05em]">
            Sign up
          </button>
        </div>
      </nav>

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white md:text-5xl lg:text-6xl tracking-[0.05em]">
            The AI infastructure that brings
          </h1>
          <h1 className="mt-2 text-4xl font-light text-white md:text-5xl lg:text-6xl tracking-[0.05em]">
            <span className="italic">clarity</span>{" "}
            <span className="not-italic">to complexity.</span>
          </h1>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button className="relative rounded-full px-8 py-3 text-lg text-white transition-all hover:scale-105 overflow-visible group">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3B5BDB] via-[#8B5CF6] to-[#D946EF] opacity-80"></span>
            <span className="absolute inset-[2px] rounded-full bg-black"></span>
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#3B5BDB] via-[#8B5CF6] to-[#D946EF] opacity-50 blur-md group-hover:opacity-70 transition-opacity"></span>
            <span className="relative z-10 tracking-[0.05em]">Get started</span>
          </button>
          <button className="rounded-full border-2 border-white px-8 py-3 text-lg text-white transition-colors hover:bg-white/10 tracking-[0.05em]">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}
