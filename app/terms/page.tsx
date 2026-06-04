import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export default function TermsPage() {
  const md = readFileSync(join(process.cwd(), "..", "legalpages", "terms-of-use.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Terms of Use">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
