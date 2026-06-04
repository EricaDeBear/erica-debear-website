/**
 * Lightweight markdown-to-HTML for legal pages.
 * No external dependency required. Handles headings, paragraphs,
 * lists, bold, links, blockquotes, tables, and horizontal rules.
 */
export function markdownToHtml(md: string): string {
  // Strip YAML frontmatter
  const body = md.replace(/^---[\s\S]*?---\s*/, "");

  const lines = body.split("\n");
  const out: string[] = [];
  let inList: "ul" | "ol" | null = null;
  let inTable = false;
  let inBlockquote = false;

  const inline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  const closeList = () => {
    if (inList) { out.push(`</${inList}>`); inList = null; }
  };
  const closeTable = () => {
    if (inTable) { out.push("</tbody></table>"); inTable = false; }
  };
  const closeBlockquote = () => {
    if (inBlockquote) { out.push("</blockquote>"); inBlockquote = false; }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip the top-level H1 (rendered by the page component)
    if (trimmed.startsWith("# ") && !trimmed.startsWith("## ")) continue;

    // Horizontal rule
    if (/^-{3,}$/.test(trimmed)) {
      closeList(); closeTable(); closeBlockquote();
      out.push("<hr />");
      continue;
    }

    // Headings
    if (trimmed.startsWith("### ")) {
      closeList(); closeTable(); closeBlockquote();
      out.push(`<h3>${inline(trimmed.slice(4))}</h3>`);
      continue;
    }
    if (trimmed.startsWith("## ")) {
      closeList(); closeTable(); closeBlockquote();
      out.push(`<h2>${inline(trimmed.slice(3))}</h2>`);
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      closeList(); closeTable();
      if (!inBlockquote) { out.push("<blockquote>"); inBlockquote = true; }
      out.push(`<p>${inline(trimmed.slice(2))}</p>`);
      continue;
    }
    if (inBlockquote && trimmed === "") {
      closeBlockquote();
      continue;
    }

    // Table row
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      closeList(); closeBlockquote();
      // Skip separator rows
      if (/^\|[\s-:|]+\|$/.test(trimmed)) continue;
      const cells = trimmed.split("|").slice(1, -1).map((c) => c.trim());
      if (!inTable) {
        out.push("<table><thead><tr>");
        cells.forEach((c) => out.push(`<th>${inline(c)}</th>`));
        out.push("</tr></thead><tbody>");
        inTable = true;
      } else {
        out.push("<tr>");
        cells.forEach((c) => out.push(`<td>${inline(c)}</td>`));
        out.push("</tr>");
      }
      continue;
    }
    if (inTable && trimmed === "") {
      closeTable();
      continue;
    }

    // Unordered list
    if (trimmed.startsWith("- ")) {
      closeTable(); closeBlockquote();
      if (inList !== "ul") { closeList(); out.push("<ul>"); inList = "ul"; }
      out.push(`<li>${inline(trimmed.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
    if (olMatch) {
      closeTable(); closeBlockquote();
      if (inList !== "ol") { closeList(); out.push("<ol>"); inList = "ol"; }
      out.push(`<li>${inline(olMatch[2])}</li>`);
      continue;
    }

    // Empty line
    if (trimmed === "") {
      closeList(); closeBlockquote();
      continue;
    }

    // Paragraph
    closeList(); closeTable(); closeBlockquote();
    out.push(`<p>${inline(trimmed)}</p>`);
  }

  closeList();
  closeTable();
  closeBlockquote();

  return out.join("\n");
}
