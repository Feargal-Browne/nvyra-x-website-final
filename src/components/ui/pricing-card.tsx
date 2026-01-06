"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  icon: string;
  isPopular?: boolean;
  isPremium?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  isLoading?: boolean;
}

export default function PricingCard({
  title,
  price,
  features,
  icon,
  isPopular = false,
  isPremium = false,
  buttonText = "Get Started",
  onButtonClick,
  isLoading = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center p-8 rounded-[30px] border transition-all duration-300 group hover:scale-[1.02]",
        // Glassmorphism and base styles
        "backdrop-blur-md bg-white/5 border-white/10",
        // Hover effects
        "hover:border-white/20 hover:bg-white/10",
        // Premium specific styling
        isPremium && "border-white/20 bg-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.2)]"
      )}
      style={{
        width: "380px",
        minHeight: "580px",
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/images/pricing/popular.png"
            alt="Popular"
            width={140}
            height={40}
            className="object-contain drop-shadow-lg"
            loading="lazy"
          />
        </div>
      )}

      {/* Icon */}
      <div className="relative w-16 h-16 mb-6 mt-4">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-contain"
          loading="lazy"
          sizes="64px"
        />
      </div>

      {/* Header */}
      <h3 className="text-2xl font-light text-white mb-2 font-sans tracking-wide">
        {title}
      </h3>
      <div className="flex items-baseline gap-1 mb-8">
        <span className="text-4xl font-normal text-white font-sans">
          {price}
        </span>
        {price !== "Free" && price !== "Custom" && <span className="text-white/60 text-sm">/month</span>}
      </div>

      {/* Button */}
      <button
        onClick={onButtonClick}
        disabled={isLoading}
        className={cn(
          "w-full py-3 px-6 rounded-full border transition-all duration-300 mb-8 font-sans text-sm tracking-wide",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          isPopular
            ? "bg-[#002BFF] border-[#002BFF] text-white hover:bg-[#0022cc] shadow-[0_0_20px_rgba(0,43,255,0.3)]"
            : "bg-transparent border-white/30 text-white hover:bg-white/10"
        )}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          buttonText
        )}
      </button>

      {/* Features */}
      <div className="w-full flex-1 space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3 text-white/80 group-hover:text-white transition-colors">
            <Check className="w-5 h-5 text-white/50 shrink-0 mt-0.5" />
            <span className="font-light text-sm font-sans tracking-wide leading-relaxed">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

