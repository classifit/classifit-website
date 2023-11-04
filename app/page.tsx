import type { Metadata } from "next";
import About from "@/components/sections/about";
import Feature from "@/components/sections/homepage/feature";
import Hero from "@/components/sections/homepage/hero";
import Packages from "@/components/sections/packages";
import Portfolio from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title:
    "Siti web, prenotazioni, gestionale per studio di Pilates e Yoga · Classifit",
  description:
    "Come tuoi partner digitali, miglioriamo la gestione del tuo studio così che tu possa concentrarti su ciò che ami di più: insegnare e ispirare.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <Packages />
      <Portfolio cta={true} />
      <About
        title="È un piacere conoscerti"
        body="Siamo Federico e Chiara. Uno sviluppatore e una designer di Brescia
            che si incontrano e - quasi inevitabilmente - decidono di creare
            qualcosa insieme. Forti della nostra esperienza lavorativa nel
            settore, il nostro obiettivo principale è portare valore,
            competenza, qualità e semplicità in ogni studio con cui abbiamo
            l’onore di collaborare."
      />
    </>
  );
}
