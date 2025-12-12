"use client";

import Link from "next/link";

export function HexagonLogo() {
  return (
    <svg
      width="40"
      height="46"
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1L38 12V34L20 45L2 34V12L20 1Z"
        stroke="#3B5BDB"
        strokeWidth="2.5"
        fill="transparent"
      />
    </svg>
  );
}

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
          <HexagonLogo />
          <span className="text-xl font-medium text-white">Nvyra X</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            About us
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            Blackwell
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            Velora
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            Sustainability
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            Pricing
          </Link>
          <Link href="#" className="text-white underline underline-offset-4 hover:opacity-80 transition-opacity">
            Sentinel
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <button className="border border-white px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
            Contact us
          </button>
          <button className="border border-white px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors">
            Login
          </button>
          <button className="bg-[#3B5BDB] px-4 py-2 text-sm text-white hover:bg-[#2f4ab8] transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-wide text-white md:text-5xl lg:text-6xl">
            The AI infastructure that brings
          </h1>
          <h1 className="mt-2 text-4xl font-light italic tracking-wide text-white md:text-5xl lg:text-6xl">
            <span className="italic">clarity</span>{" "}
            <span className="not-italic">to complexity.</span>
          </h1>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button className="rounded-full border-2 border-[#D946EF] px-8 py-3 text-lg text-white transition-colors hover:bg-[#D946EF]/10">
            Get started
          </button>
          <button className="rounded-full border-2 border-white px-8 py-3 text-lg text-white transition-colors hover:bg-white/10">
            Contact us
          </button>
        </div>
      </main>
    </div>
  );
}
