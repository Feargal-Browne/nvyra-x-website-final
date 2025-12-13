"use client";

import { useState, useEffect } from "react";
import { saveCookieConsent } from "@/actions/cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie_consent");
    const consentDate = localStorage.getItem("cookie_consent_date");
    
    // Check if 30 days have passed
    const now = new Date().getTime();
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    
    if (!consent || (consentDate && now - parseInt(consentDate) > thirtyDays)) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = async (type: "accept_all" | "reject_optional") => {
    // Save to local storage
    localStorage.setItem("cookie_consent", type);
    localStorage.setItem("cookie_consent_date", new Date().getTime().toString());
    
    // Hide banner
    setIsVisible(false);
    
    // Save to Supabase
    await saveCookieConsent(type);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-6 left-6 z-[9999] w-[500px] max-w-[calc(100vw-48px)] bg-white rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-transparent font-sans"
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
    >
      <div className="flex flex-col gap-6">
        <div className="text-sm text-black/80 leading-relaxed">
          <p>
            We and our partners use cookies, scripts and certain similar technologies ("Cookies") to collect data from visitors to this site, including IP address, clicks, and other details about them and their usage.
          </p>
        </div>
        
        <div className="flex items-center justify-end gap-2">
          <button 
            className="px-4 py-2 text-sm font-medium text-[#212121] bg-transparent border-b border-[#2E2E2E] hover:opacity-70 transition-opacity mr-auto"
            onClick={() => {}} // No-op for now as requested just specific buttons
          >
            Settings
          </button>
          
          <button 
            onClick={() => handleConsent("reject_optional")}
            className="px-4 py-2 text-sm font-medium text-[#212121] bg-white border border-[#2E2E2E] rounded-full hover:bg-gray-50 transition-colors"
          >
            Reject optional
          </button>
          
          <button 
            onClick={() => handleConsent("accept_all")}
            className="px-4 py-2 text-sm font-medium text-white bg-[#17171C] border border-transparent rounded-full hover:bg-[#17171C]/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
