import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import WeOffer from "@/components/WeOffer";
import ChooseUs from "@/components/ChooseUs";
import JoinUs from "@/components/JoinUs";
import OurGallery from "@/components/OurGallery";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WeOffer />
      <ChooseUs />
      <JoinUs />
      <OurGallery />
      <ContactUs />
    </main>
  );
}
