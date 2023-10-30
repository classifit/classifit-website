import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import Portfolio from "@/components/sections/portfolio";

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
        marginRight="ml-[10rem]"
      />
      <Portfolio cta={false} />
    </>
  );
}
