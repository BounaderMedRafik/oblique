import Footer from "@/components/marketing/Footer";
import Hero from "@/components/marketing/Hero";
import WhoOblique from "@/components/marketing/WhoOblique";
import WhyOblique from "@/components/marketing/WhyOblique";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <WhyOblique />
      </div>
      <div>
        <WhoOblique />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}
