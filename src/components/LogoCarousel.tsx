"use client";

import { 
  SiOpenai, 
  SiTencentqq, 
  SiAlibabacloud, 
  SiGoogle, 
  SiAnthropic, 
  SiNvidia, 
  SiTurso, 
  SiModal, 
  SiBackblaze 
} from "react-icons/si";
import Image from "next/image";

const logos = [
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Tencent", Icon: SiTencentqq },
  { name: "Alibaba", Icon: SiAlibabacloud },
  { name: "Google", Icon: SiGoogle },
  { name: "Anthropic", Icon: SiAnthropic },
  { name: "Nvidia", Icon: SiNvidia },
  { name: "Tavily", src: "https://tavily.com/images/logo.svg" },
  { name: "Turso", Icon: SiTurso },
  { name: "Modal", Icon: SiModal },
  { name: "Backblaze", Icon: SiBackblaze },
];

export function LogoCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-16">
      {/* Dots background layer */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none"></div>
      
      {/* Gradient masks for fading edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="flex w-max animate-marquee items-center gap-16 pl-16">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center select-none">
            {logo.Icon ? (
              <logo.Icon className="h-8 w-auto text-white sm:h-10 opacity-70 hover:opacity-100 transition-opacity" />
            ) : (
              <div className="relative h-6 w-24 sm:h-8 sm:w-32 opacity-70 hover:opacity-100 transition-opacity">
                 <Image 
                   src={logo.src!} 
                   alt={logo.name} 
                   fill 
                   className="object-contain brightness-0 invert" 
                 />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
