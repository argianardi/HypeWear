import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurCollection from "@/components/OurCollection";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main>
        <Hero />
        <OurCollection />
      </main>
      <Footer />
    </div>
  );
}
