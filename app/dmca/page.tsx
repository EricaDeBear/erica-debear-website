import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "DMCA Copyright Notice",
  description: "How to submit a copyright infringement notice for content on ericadebear.com under the DMCA.",
  alternates: { canonical: "/dmca" },
};

export default function DmcaPage() {
  const md = readFileSync(join(process.cwd(), "legalpages", "dmca.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="DMCA Copyright Notice">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
