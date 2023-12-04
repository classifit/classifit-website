import type { Metadata } from "next";
import Feature from "@/components/sections/homepage/feature";
import Hero from "@/components/sections/homepage/hero";
import Packages from "@/components/sections/packages";
import Portfolio from "@/components/sections/portfolio";
import TextAndImage from "@/components/sections/text-and-image";
import Guarantee from "@/components/sections/guarantee";
import FeatureNew from "@/components/sections/homepage/feature-new";

export const metadata: Metadata = {
  title: "Gestionale per studi di Pilates, prenotazioni, siti web · Classifit",
  description:
    "Come tuoi partner digitali, miglioriamo la gestione del tuo studio così che tu possa concentrarti su ciò che ami di più: insegnare e ispirare.",
  alternates: {
    canonical: "https://www.classi.fit/",
  },
  openGraph: {
    title:
      "Gestionale per studi di Pilates, prenotazioni, siti web · Classifit",
    description:
      "Come tuoi partner digitali, miglioriamo la gestione del tuo studio così che tu possa concentrarti su ciò che ami di più: insegnare e ispirare.",
    type: "website",
    url: "https://www.classi.fit/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureNew />
      <TextAndImage
        title="Lavoriamo a stretto contatto"
        body="Siamo fantastici"
        imgRight={false}
      />
      <Packages />
      <Guarantee />
    </>
  );
}
