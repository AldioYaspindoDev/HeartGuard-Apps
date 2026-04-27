import Navbar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import Featured from "@/components/featured";
import Featured2 from "@/components/featured2";
import Faq from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <Featured />
      <Featured2 />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}