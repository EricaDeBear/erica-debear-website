import { readFileSync } from "fs";
import { join } from "path";
import LegalPage from "@/components/LegalPage";
import { markdownToHtml } from "@/lib/markdown";

export default function PrivacyPage() {
  const md = readFileSync(join(process.cwd(), "..", "legalpages", "privacy-policy.md"), "utf-8");
  const html = markdownToHtml(md);
  return (
    <LegalPage title="Privacy Policy">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </LegalPage>
  );
}
