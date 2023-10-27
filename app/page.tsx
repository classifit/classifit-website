import About from "@/components/sections/about";
import Feature from "@/components/sections/feature";
import Hero from "@/components/sections/hero";
import Packages from "@/components/sections/packages";
import Portfolio from "@/components/sections/portfolio";

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
