import type { Metadata } from "next";
import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import Portfolio from "@/components/sections/portfolio";

export const metadata: Metadata = {
  title:
    "Studi · Gli studi di Pilates con cui abbiamo collaborato",
  description:
    "Una lista di tutti i progetti e tutti gli studi di Pilates o Yoga con cui abbiamo collaborato",
};

export default function Studios() {
  return (
    <>
      <PageTitle subtitle="studi" title="Sei in buona compagnia" />
      <Paragraph
        cta
        ctaText="Vai al sito"
        subtitle
        subtitleText="In evidenza"
        title="InFLOWer Pilates Studio"
        bgColor="bg-light"
        textColor="text-light-foreground"
      />
      <DoubleImages
        bgColor1="bg-card"
        image1="/portfolio/in-evidenza-immagine-1.png"
        alt1="Sito web su misura per il tuo studio"
        bgColor2="bg-secondary"
        image2="/services/website/website-img-2.png"
        alt2="Sito web su misura per il tuo studio"
        marginRight="lg:ml-[10rem]"
      />
      <Portfolio cta={false} />
    </>
  );
}
