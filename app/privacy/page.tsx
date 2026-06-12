import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ericadebear.com collects, uses, and protects your personal information, including your rights under the CCPA and CPRA.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const md = readFileSync(join(process.cwd(), "legalpages", "privacy-policy.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Privacy Policy">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
