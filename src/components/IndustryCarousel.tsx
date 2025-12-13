"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const industries = [
  {
    name: "Technology",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/b5264330c568955041d465542469ebfdeb196547-840x840.jpg?auto=format&fit=max&q=90&w=420",
    href: "#"
  },
  {
    name: "Financial Services",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/30ec75e875e50726980c6a68a63b315b8503f1f7-840x840.jpg?auto=format&fit=max&q=90&w=420",
    href: "#"
  },
  {
    name: "Healthcare",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/871cc9ed4e63113205ab55e2a6cb207d8d32a2aa-840x840.jpg?auto=format&fit=max&q=90&w=420",
    href: "#"
  },
  {
    name: "Manufacturing",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/6ae6fc28f20cc442e8853d60392c50227a430992-840x840.jpg?auto=format&fit=max&q=90&w=420",
    href: "#"
  },
  {
    name: "Energy",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/ef4c547b886577f369e62da9e8864992578bfd6a-841x840.jpg?auto=format&fit=max&q=90&w=421",
    href: "#"
  },
  {
    name: "Public Sector",
    image: "https://cdn.sanity.io/images/rjtqmwfu/web3-prod/4a8f1e27f67183ce836c5aa9e6d94a0ad6a29a99-841x840.jpg?auto=format&fit=max&q=90&w=421",
    href: "#"
  }
];

export function IndustryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full px-4 lg:px-10 pt-16 md:pt-36 pb-12 md:pb-20 bg-white text-black">
      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <div className="flex-col items-center">
          <div className="flex w-full items-end justify-between pb-10">
            <h2 className="text-3xl lg:text-5xl font-normal max-w-72 sm:max-w-[550px] tracking-tight text-[#212121]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Powering progress across industries
            </h2>
            <div className="mb-2 flex gap-x-5">
              <button 
                onClick={() => scroll('left')}
                className="group inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Previous"
              >
                <FiArrowLeft className="text-2xl text-[#212121] opacity-50 group-hover:opacity-100" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="group inline-flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Next"
              >
                <FiArrowRight className="text-2xl text-[#212121] opacity-100" />
              </button>
            </div>
          </div>

          <div className="mb-5 flex flex-grow justify-center lg:mb-10">
            <div className="w-screen xl:flex xl:justify-center">
              <div 
                ref={scrollRef}
                className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-smooth px-4 md:snap-none lg:px-10 no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {industries.map((industry, index) => (
                  <Link 
                    key={index}
                    href={industry.href}
                    className="inline-block focus:outline-none flex-none"
                  >
                    <div className="group relative inline-flex h-[289px] w-[289px] rounded-xl md:h-[399px] md:w-[399px] lg:h-[420px] lg:w-[420px] cursor-pointer flex-none snap-center transition-transform duration-500 ease-in-out md:snap-none overflow-hidden">
                      <div className="relative h-full w-full overflow-hidden rounded-xl">
                        <Image
                          src={industry.image}
                          alt={industry.name}
                          fill
                          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 rounded-b-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      </div>
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                        <div className="pt-0">
                          <p className="text-2xl lg:text-3xl font-normal text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            {industry.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
