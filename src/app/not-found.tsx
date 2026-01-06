import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";

export default function NotFound() {
    return (
        <div className="relative min-h-screen w-full bg-black text-white font-sans overflow-hidden">
            {/* Background Image - 404 Specific */}
            <div className="fixed inset-0 z-0 select-none">
                <Image
                    src="/404-bg.png"
                    alt="404 Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                    quality={100}
                />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 w-full max-w-[1440px] mx-auto min-h-[calc(100vh-140px)] flex flex-col justify-center px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: 404 Text */}
                    <div className="flex flex-col">
                        {/* Huge 404 */}
                        <h1
                            className="text-[200px] leading-none font-thin text-white/50 select-none"
                            style={{
                                fontFamily: 'Inter, sans-serif',  // Fallback to Inter, heavily styled
                                fontWeight: 100,
                                letterSpacing: '-0.05em'
                            }}
                        >
                            404
                        </h1>

                        {/* Description */}
                        <div className="mt-8 space-y-8">
                            <h2
                                className="text-5xl md:text-6xl text-white font-serif leading-tight max-w-xl"
                            >
                                Hmm, looks like this page is <br /> missing
                            </h2>

                            {/* Buttons */}
                            <div className="flex items-center gap-6 mt-12">
                                <Link
                                    href="/"
                                    className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white text-lg min-w-[160px] text-center"
                                >
                                    Go Home
                                </Link>
                                <Link
                                    href="#"
                                    className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition-all text-white text-lg min-w-[160px] text-center"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Hexagon Graphic Placehoder/Decoration */}
                    <div className="hidden lg:flex justify-end items-center relative">
                        {/* CSS Hexagon representation of the graphic in the reference */}
                        <div className="relative w-[300px] h-[300px]">
                            <div className="absolute inset-0 border border-blue-500/50 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                            <div className="absolute inset-4 bg-black border border-white/20 transform -rotate-6" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}



