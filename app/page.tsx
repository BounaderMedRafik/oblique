import Hero from "@/components/marketing/Hero";
import Navbar from "@/components/marketing/Navbar";
import WhoOblique from "@/components/marketing/WhoOblique";
import WhyOblique from "@/components/marketing/WhyOblique";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <WhyOblique />
      </div>
      <div>
        <WhoOblique />
      </div>
      <div className="h-[200vh]" />
    </main>
  );
}
