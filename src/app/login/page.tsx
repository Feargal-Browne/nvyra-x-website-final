'use client'

import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import BrandLogo from '@/components/ui/brand-logo'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full font-sans">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-black flex flex-col items-center justify-center p-8 relative z-10">
        <div className="absolute top-8 left-8">
          <Link href="/">
            <BrandLogo />
          </Link>
        </div>

        <div className="w-full max-w-[480px]">
          <SignIn
            appearance={{
              variables: {
                colorPrimary: '#2563EB',
                colorText: '#FFFFFF',
                colorResultText: '#FFFFFF',
                colorBackground: '#000000',
                colorInputBackground: '#000000',
                colorInputText: '#FFFFFF',
                colorTextSecondary: '#CCCCCC',
              },
              elements: {
                rootBox: "w-full",
                card: "bg-black shadow-none w-full border border-[#333]",
                headerTitle: "text-white text-2xl font-normal",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: "bg-white border border-gray-200 hover:bg-gray-100 text-black",
                socialButtonsBlockButtonText: "text-black font-medium",
                socialButtonsIconButton: "!bg-white border-none hover:bg-gray-200 rounded-full !p-2 min-w-[44px] min-h-[44px] flex items-center justify-center mr-2",
                socialButtonsProviderIcon: "",
                dividerLine: "bg-[#333]",
                dividerText: "text-gray-400",
                formFieldLabel: "text-white",
                formFieldInput: "bg-black border border-[#333] text-white placeholder-gray-500 focus:border-[#2563EB] focus:ring-[#2563EB]",
                footerActionText: "text-gray-400",
                footerActionLink: "text-[#2563EB] hover:text-[#1D4ED8]",
                identityPreviewText: "text-white",
                identityPreviewEditButton: "text-[#2563EB]",
                formButtonPrimary: "bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition-colors normal-case text-base font-normal",
                footer: "hidden", // Hiding strict Clerk branding if possible/allowed or styling it neutrally
              },
              layout: {
                socialButtonsPlacement: "bottom",
              }
            }}
          />
        </div>
      </div>

      {/* Right Side - Visuals */}
      <div className="hidden lg:flex w-1/2 relative bg-black items-center justify-center overflow-hidden">
        <Image
          src="/login-bg.png"
          alt="Abstract Background"
          fill
          className="object-cover opacity-80"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent pointer-events-none" />

        <div className="relative z-10 p-12 text-left max-w-xl">
          <h1 className="text-white text-7xl font-light mb-6" style={{ fontFamily: 'Jost, sans-serif' }}>
            Nvyra X
          </h1>
          <p className="text-gray-300 text-2xl font-light leading-relaxed tracking-wide">
            Industry Leading Disinformation and Deepfake Detection
          </p>
        </div>
      </div>
    </div>
  )
}
