import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import Portfolio from "@/components/sections/portfolio";

export default function Studios() {
  return (
    <>
      <PageTitle
        subtitle="studi"
        title="Qui sotto puoi trovare tantissimi progetti fantastici e meravigliosi"
      />
      <Paragraph
        cta
        ctaText="Vai al sito"
        subtitle
        subtitleText="In evidenza"
        title="Equilibrio Corpo E Mente"
      />
      <DoubleImages />
      <Portfolio cta={false} />
    </>
  );
}
