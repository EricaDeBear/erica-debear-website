import type { Metadata } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Fair Housing Notice",
  description: "Erica DeBear's commitment to fair housing and equal opportunity in Los Angeles real estate.",
  alternates: { canonical: "/fair-housing" },
};

export default function FairHousingPage() {
  const md = readFileSync(join(process.cwd(), "legalpages", "fair-housing.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Fair Housing Notice">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
