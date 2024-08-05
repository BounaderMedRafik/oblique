import Hero from "@/components/marketing/Hero";
import Navbar from "@/components/marketing/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="h-[200vh]" />
    </main>
  );
}
