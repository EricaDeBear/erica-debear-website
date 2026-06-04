import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export default function AccessibilityPage() {
  const md = readFileSync(join(process.cwd(), "..", "legalpages", "accessibility.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Accessibility Statement">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
