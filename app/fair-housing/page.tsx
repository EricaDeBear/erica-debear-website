import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export default function FairHousingPage() {
  const md = readFileSync(join(process.cwd(), "..", "legalpages", "fair-housing.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Fair Housing Notice">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
