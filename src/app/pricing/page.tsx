'use client';

import { useState } from 'react';
import Image from "next/image";
import PricingCard from "@/components/ui/pricing-card";
import Navbar from "@/components/ui/navbar";
import { redirectToCheckout } from "@/lib/api";

export default function Pricing() {
    const [loadingTier, setLoadingTier] = useState<string | null>(null);

    const handleCheckout = async (tierName: string, priceId: string) => {
        try {
            setLoadingTier(tierName);
            await redirectToCheckout(priceId);
        } catch (error) {
            console.error('Checkout failed:', error);
            setLoadingTier(null);
        }
    };

    const handleFreeStart = () => {
        window.location.href = '/signup';
    };

    const tiers = [
        {
            title: "nvyra-x-free",
            price: "Free",
            icon: "/images/pricing/circle.png",
            features: [
                "Access to basic features",
                "Community support",
                "1GB storage",
                "Public projects"
            ],
            buttonText: "Start Free",
            onButtonClick: handleFreeStart,
        },
        {
            title: "nvyra-x-pro",
            price: "€9",
            icon: "/images/pricing/lightning.png",
            isPopular: true,
            buttonText: "Get Started",
            features: [
                "Advanced AI features",
                "50GB storage",
                "Private projects",
                "Advanced analytics",
                "Standard support"
            ],
            onButtonClick: () => handleCheckout('nvyra-x-pro', 'price_1SjgL7Rtd0vXBYuEkFe9CoNl'),
        },
        {
            title: "nvyra-x-ultra",
            price: "€21",
            icon: "/images/pricing/diamond.png",
            isPremium: true,
            buttonText: "Get Started",
            features: [
                "Highest priority processing",
                "Unlimited storage",
                "Enterprise security",
                "Dedicated instance",
                "Priority 24/7 support"
            ],
            onButtonClick: () => handleCheckout('nvyra-x-ultra', 'price_1SjgM6Rtd0vXBYuELn8K6HkC'),
        }
    ];

    return (
        <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden">
            {/* Background Image - optimized quality */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/images/pricing/background-pricing.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                    quality={75}
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 pt-24 pb-20">
                <div className="text-center mb-20 space-y-4">
                    <h1
                        className="text-white drop-shadow-2xl"
                        style={{
                            fontFamily: 'Jost',
                            fontSize: 'clamp(36px, 5vw, 64px)',
                            fontWeight: 300,
                            letterSpacing: '0.05em',
                        }}
                    >
                        Simple, transparent pricing
                    </h1>
                    <p className="text-xl text-white/70 font-light font-sans max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. No hidden fees.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 xl:gap-12 items-center">
                    {tiers.map((tier, index) => (
                        <PricingCard
                            key={index}
                            {...tier}
                            isLoading={loadingTier === tier.title}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}



