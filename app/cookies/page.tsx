import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export default function CookiesPage() {
  const md = readFileSync(join(process.cwd(), "..", "legalpages", "cookie-policy.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Cookie Policy">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
