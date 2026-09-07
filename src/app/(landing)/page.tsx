import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Talento from "@/components/Talento";
import Empresas from "@/components/Empresas";
import Torneos from "@/components/Torneos";
import Networking from "@/components/Networking";
import Noticias from "@/components/Noticias";
import Newsletter from "@/components/Newsletter";
import Cierre from "@/components/Cierre";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Talento />
      <Empresas />
      <Torneos />
      <Networking />
      <Noticias />
      <Newsletter />
      <Cierre />
    </>
  );
}