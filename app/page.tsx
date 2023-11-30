import type { Metadata } from "next";
import Feature from "@/components/sections/homepage/feature";
import Hero from "@/components/sections/homepage/hero";
import Packages from "@/components/sections/packages";
import Portfolio from "@/components/sections/portfolio";
import TextAndImage from "@/components/sections/text-and-image";

export const metadata: Metadata = {
  title:
    "Gestionale per studi di Pilates, prenotazioni, siti web · Classifit",
  description:
    "Come tuoi partner digitali, miglioriamo la gestione del tuo studio così che tu possa concentrarti su ciò che ami di più: insegnare e ispirare.",
  alternates: {
    canonical: 'https://www.classi.fit/'
  },
  openGraph: {
    title: "Gestionale per studi di Pilates, prenotazioni, siti web · Classifit",
    description: "Come tuoi partner digitali, miglioriamo la gestione del tuo studio così che tu possa concentrarti su ciò che ami di più: insegnare e ispirare.",
    type: "website",
    url: "https://www.classi.fit/"
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Packages />
      <Portfolio cta={true} />
      <TextAndImage
        title="È un piacere conoscerti"
        body="Siamo Federico e Chiara. Uno sviluppatore e una designer di Brescia
            che si incontrano e - quasi inevitabilmente - decidono di creare
            qualcosa insieme. Forti della nostra esperienza lavorativa nel
            settore, il nostro obiettivo principale è portare valore,
            competenza, qualità e semplicità in ogni studio con cui abbiamo
            l’onore di collaborare."
        imgRight={false}
      />
    </>
  );
}
