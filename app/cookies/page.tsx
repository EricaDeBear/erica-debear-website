import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How ericadebear.com uses cookies and similar technologies, and the choices available to you.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  const md = readFileSync(join(process.cwd(), "legalpages", "cookie-policy.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Cookie Policy">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
