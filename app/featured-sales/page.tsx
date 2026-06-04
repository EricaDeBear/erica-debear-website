import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <div className="container-narrow">
          <p className="overline mb-4">Featured Sales</p>
          <h1 className="font-display text-5xl sm:text-6xl mb-8">Featured Sales.</h1>
          <p className="text-lg text-ink-muted leading-relaxed">
            [This page is a stub. Replace this body content with the real Featured Sales content.]
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
