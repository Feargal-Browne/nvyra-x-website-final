"use client";

import { 
  SiOpenai,
  SiNvidia,
  SiTurso
} from "react-icons/si";
import Image from "next/image";

const logos = [
  { 
    name: "NVIDIA", 
    Icon: SiNvidia, 
    text: "NVIDIA" 
  },
  { 
    name: "OpenAI", 
    Icon: SiOpenai, 
    text: "OpenAI" 
  },
  { 
    name: "Cohere", 
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619163138.png",
    text: "Cohere"
  },
  { 
    name: "Pinecone", 
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619263979.png",
    text: "Pinecone"
  },
  { 
    name: "Cleanlab", 
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765619345547.png",
    text: "Cleanlab"
  },
  { 
    name: "Turso", 
    Icon: SiTurso, 
    text: "Turso" 
  },
  { 
    name: "Google", 
    text: "Google" 
  },
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-4 border-y border-white/5 bg-black/40 backdrop-blur-sm" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-24 w-max items-center">
        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center gap-3 opacity-90 hover:opacity-100 transition-opacity"
          >
            {logo.Icon ? (
              <div className="flex items-center gap-3 text-white">
                <logo.Icon className="w-6 h-6" />
                <span className="text-[22px] font-medium tracking-tight font-[family-name:var(--font-space-grotesk)]">{logo.text}</span>
              </div>
            ) : logo.url ? (
              <div className="flex items-center gap-3">
                 <div className="relative h-6 w-6 brightness-0 invert">
                   <Image 
                    src={logo.url} 
                    alt={logo.name}
                    width={24}
                    height={24}
                    className="object-contain w-full h-full"
                  />
                 </div>
                 <span className="text-[22px] font-medium tracking-tight text-white font-[family-name:var(--font-space-grotesk)]">{logo.text}</span>
              </div>
            ) : (
              <span className="text-white text-[22px] font-medium tracking-tight font-[family-name:var(--font-space-grotesk)]">{logo.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}