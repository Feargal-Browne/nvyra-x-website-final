"use server";

import { createClient } from "@supabase/supabase-js";
import { headers } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveCookieConsent(consentType: "accept_all" | "reject_optional") {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  const userAgent = headersList.get("user-agent") || "unknown";

  try {
    const { error } = await supabase.from("cookie_consents").insert({
      consent_type: consentType,
      ip_address: ip,
      user_agent: userAgent,
    });

    if (error) {
      console.error("Error saving cookie consent:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Unexpected error saving cookie consent:", error);
    return { success: false, error: "Unexpected error" };
  }
}
