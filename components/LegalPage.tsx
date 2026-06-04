import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <article className="container-narrow">
          <h1 className="font-display text-4xl sm:text-5xl mb-12">{title}</h1>
          <div className="prose-legal max-w-[65ch] text-ink-muted leading-relaxed space-y-6">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
