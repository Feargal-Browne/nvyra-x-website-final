"use client";

import { 
  SiOpenai,
  SiTurso
} from "react-icons/si";
import Image from "next/image";

const logos = [
  { name: "NVIDIA", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619108017.png" },
  { name: "OpenAI", Icon: SiOpenai, text: "OpenAI", spinning: true },
  { name: "Cohere", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619163138.png" },
  { name: "Pinecone", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619263979.png" },
  { name: "Cleanlab", url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619345547.png" },
  { name: "Turso", Icon: SiTurso, text: "Turso" },
  { name: "Google", text: "Google" },
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-6 border-y border-[#333333] bg-[#1a1a1a]" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-20 w-max items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-2"
            style={{ height: '40px' }}
          >
            {logo.url ? (
              <div className="relative h-full w-auto min-w-[100px]">
                 <Image 
                  src={logo.url} 
                  alt={logo.name}
                  width={200}
                  height={80}
                  className="object-contain h-full w-auto"
                />
              </div>
            ) : logo.Icon ? (
              <div className="flex items-center gap-2 text-white">
                <logo.Icon className={`w-8 h-8 ${logo.spinning ? 'animate-spin-slow' : ''}`} />
                {logo.text && <span className="text-xl font-medium tracking-tight">{logo.text}</span>}
              </div>
            ) : (
              <span className="text-white text-xl font-medium tracking-tight">{logo.text || logo.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}