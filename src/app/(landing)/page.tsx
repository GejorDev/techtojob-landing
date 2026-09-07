import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Talent from "@/components/Talent";
import Companies from "@/components/Companies";
import Tournaments from "@/components/Tournaments";
import Networking from "@/components/Networking";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Closing from "@/components/Closing";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Talent />
      <Companies />
      <Tournaments />
      <Networking />
      <News />
      <Newsletter />
      <Closing />
    </>
  );
}