"use client";

import Link from "next/link";
import { useLang } from "@/lib/LangContext";

// Drop-in replacement for next/link that keeps internal navigation inside the
// current language. Under /en, an href like "/services" becomes "/en/services";
// external links, tel:, mailto: and hashes are left untouched.
export default function LocaleLink({ href, ...props }) {
  const { localePath } = useLang();
  return <Link href={localePath(href)} {...props} />;
}
