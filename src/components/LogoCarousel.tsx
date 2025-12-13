"use client";

import Image from "next/image";

// Provided by user
const logoUrls = [
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644165158.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644219258.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644227432.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644240075.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644246389.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644253269.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644261798.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644276112.png?width=8000&height=8000&resize=contain",
  "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765644296745.png?width=8000&height=8000&resize=contain",
];

export function LogoCarousel() {
  return (
    <div 
      className="relative w-full overflow-hidden py-6 border-y border-white/5 bg-black/40 backdrop-blur-sm" 
    >
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-scroll gap-16 w-max items-center">
        {[...logoUrls, ...logoUrls, ...logoUrls, ...logoUrls].map((url, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="relative h-8 w-40">
               <Image 
                 src={url} 
                 alt={`Partner logo ${index}`}
                 fill
                 className="object-contain brightness-0 invert"
                 sizes="160px"
               />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
