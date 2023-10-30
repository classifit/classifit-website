import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Paragraph from "@/components/sections/paragraph";
import Portfolio from "@/components/sections/portfolio";

export default function Studios() {
  return (
    <>
      <PageTitle
        subtitle="studi"
        title="Gli studi con cui collaboriamo"
      />
      <Paragraph
        cta
        ctaText="Vai al sito"
        subtitle
        subtitleText="In evidenza"
        title="Equilibrio Corpo e Mente"
        bgColor="bg-light"
        textColor="text-light-foreground"
      />
      <DoubleImages />
      <Portfolio cta={false} />
    </>
  );
}
