import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Talent from "@/components/Talent";
import Companies from "@/components/Companies";
import Tournaments from "@/components/Tournaments";
import Networking from "@/components/Networking";
import News from "@/components/News";
import Newsletter from "@/components/Newsletter";
import Closing from "@/components/Closing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <Hero />
      <Ticker />
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