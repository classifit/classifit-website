import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import Portfolio from "@/components/sections/portfolio";

export default function Studios() {
  return (
    <>
      <PageTitle
        subtitle="studi"
        title="Gli studi che si sono affidati a noi"
      />
      <Paragraph
        cta
        ctaText="Vai al sito"
        subtitle
        subtitleText="In evidenza"
        title="Equilibrio Corpo e Mente"
      />
      <DoubleImages />
      <Portfolio cta={false} />
    </>
  );
}
