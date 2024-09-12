import Blog from "@/components/Blog";
import Download from "@/components/Download";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import WhyUseUs from "@/components/WhyUseUs";

export default function Home() {
  return (
   <main className="flex flex-col gap-[5em] w-full overflow-hidden">
    <Header />
    <section className="max-w-6xl mx-auto p-3 flex flex-col gap-5">
      <Hero />
   </section>
    <WhyUseUs />
    <section className="max-w-6xl mx-auto p-3 flex flex-col gap-5">
      <Features />
   </section>
   <Testimonials />
   <section className="max-w-6xl mx-auto p-3 flex flex-col gap-5">
    <Pricing />
    <Blog />
    <Download />
    <Footer />
   </section>
   </main>
  );
}
