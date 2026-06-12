import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Erica DeBear's commitment to making ericadebear.com accessible to all visitors.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  const md = readFileSync(join(process.cwd(), "legalpages", "accessibility.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Accessibility Statement">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
