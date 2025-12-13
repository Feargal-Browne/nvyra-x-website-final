"use client";

import { 
  SiOpenai
} from "react-icons/si";
import Image from "next/image";

const logos = [
  { name: "NVIDIA", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619108017.png" },
  { name: "OpenAI", Icon: SiOpenai, text: "OpenAI", spinning: true },
  { name: "Cohere", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619163138.png" },
  { name: "Pinecone", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619263979.png" },
  { name: "Cleanlab", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765621889342.png?width=8000&height=8000&resize=contain" },
  { name: "Turso", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/turso-logo-white-1765621414365.png?width=8000&height=8000&resize=contain", isWhite: true },
  { name: "Google", text: "Google" },
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-4 border-y border-white/10 bg-white/5" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-16 w-max items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center`}
            style={{ height: '32px' }}
          >
            {logo.Icon ? (
              <div className="flex items-center gap-2 text-white">
                <logo.Icon className={`w-6 h-6 ${logo.spinning ? 'animate-spin-slow' : ''}`} />
                {logo.text && <span className="text-xl font-medium tracking-tight font-[family-name:var(--font-space-grotesk)]">{logo.text}</span>}
              </div>
            ) : logo.text ? (
               <span className="text-white text-xl font-medium tracking-tight font-[family-name:var(--font-space-grotesk)]">{logo.text}</span>
            ) : (
              <div className="relative h-full w-auto">
                <Image 
                  src={logo.url!} 
                  alt={logo.name}
                  width={120}
                  height={40}
                  className="object-contain h-full w-auto"
                  style={{ 
                    filter: logo.isWhite ? 'none' : 'brightness(0) invert(1)',
                    maxWidth: '120px'
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}