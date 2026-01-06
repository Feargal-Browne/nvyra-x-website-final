'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import BrandLogo from '@/components/ui/brand-logo';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        'Text',
        'Sustainability',
        'Pricing',
        'Image'
    ];

    return (
        <>
            <header className="relative z-50 flex items-end justify-between mx-auto w-full px-4 sm:px-8 pt-6 max-w-[1440px]">

                {/* Logo Section */}
                <div className="flex-none z-50">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <BrandLogo />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-end gap-[26px]">
                    <nav className="flex items-center gap-[26px]">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={
                                    item === 'Pricing' ? '/pricing' :
                                        item === 'Image' ? '/image-detector' :
                                            item === 'Text' ? '/chat' : '#'
                                }
                                className={cn(
                                    "font-normal underline text-center hover:text-white transition-colors",
                                    (pathname === '/pricing' && item === 'Pricing') ? "text-white no-underline" : "text-white/90"
                                )}
                                style={{
                                    fontFamily: 'Jost, sans-serif',
                                    fontSize: '20px',
                                    lineHeight: '29px',
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Auth Buttons Group */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="#"
                            className="flex items-center justify-center border border-[#565656] hover:bg-white/10 transition-colors px-4 h-[39px]"
                        >
                            <span className="font-sans text-[16px] text-white">Contact us</span>
                        </Link>

                        <SignedOut>
                            <Link
                                href="/login"
                                className="flex items-center justify-center border border-[#565656] hover:bg-white/10 transition-colors px-4 h-[39px]"
                            >
                                <span className="font-sans text-[16px] text-white">Login</span>
                            </Link>
                            <Link
                                href="/signup"
                                className="flex items-center justify-center bg-[#002BFF] border border-[#565656] hover:bg-blue-700 transition-colors px-4 h-[39px]"
                            >
                                <span className="font-sans text-[16px] text-white">Sign up</span>
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="lg:hidden z-50 text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center lg:hidden animate-in fade-in zoom-in-95 duration-200">
                    <nav className="flex flex-col items-center gap-8 mb-8">
                        {navLinks.map((item) => (
                            <Link
                                key={item}
                                href={
                                    item === 'Pricing' ? '/pricing' :
                                        item === 'Image' ? '/image-detector' :
                                            item === 'Text' ? '/chat' : '#'
                                }
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-3xl font-light hover:text-blue-500 transition-colors",
                                    (pathname === '/pricing' && item === 'Pricing') ? "text-white underline decoration-blue-500" : "text-white/80"
                                )}
                                style={{ fontFamily: 'Jost, sans-serif' }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-4 w-full max-w-xs px-8">
                        <Link
                            href="#"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center w-full border border-white/20 py-3 text-white hover:bg-white/10 transition-colors rounded-full"
                        >
                            Contact us
                        </Link>

                        <SignedOut>
                            <Link
                                href="/login"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full border border-white/20 py-3 text-white hover:bg-white/10 transition-colors rounded-full"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full bg-[#002BFF] py-3 text-white hover:bg-blue-700 transition-colors rounded-full"
                            >
                                Sign up
                            </Link>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex justify-center pt-4">
                                <UserButton showName />
                            </div>
                        </SignedIn>
                    </div>
                </div>
            )}
        </>
    );
}
