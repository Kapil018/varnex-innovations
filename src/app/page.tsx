
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import EnquiryCTA from "@/components/home/EnquiryCTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <AboutPreview />
      <EnquiryCTA/>
    </main>
  );
}
