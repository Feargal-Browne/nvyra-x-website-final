'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const LOGOS = [
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700126984.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700133982.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700140081.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700145837.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700173374.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700184472.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700191687.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700336632.png?width=400&resize=contain',
  'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1765700378941.png?width=400&resize=contain',
];

export default function BrandCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Container with black bg, dark grey outline, and dots pattern */}
      <div
        className="absolute inset-0 z-0 bg-black border-y border-[#333333]"
        style={{
          backgroundImage: 'radial-gradient(#333333 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          opacity: 0.8
        }}
      />

      {/* Scrolling Content */}
      <div className="relative z-10 flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-8 w-[150px] h-[60px] relative filter grayscale brightness-0 invert"
            >
              <Image
                src={logo}
                alt={`Brand logo ${index}`}
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
