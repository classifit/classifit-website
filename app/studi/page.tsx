import DoubleImages from "@/components/sections/double-img";
import PageTitle from "@/components/sections/page-title";
import Portfolio from "@/components/sections/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Studios() {
  return (
    <>
      <PageTitle
        subtitle="studi"
        title="Qui sotto puoi trovare tantissimi progetti fantastici e meravigliosi"
      />
      <div className="bg-light text-light-foreground">
        <section>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4">
              <div className="uppercase text-muted-foreground text-sm">
                in evidenza
              </div>
              <h1 className="font-medium">Equilibrio Corpo e Mente</h1>
            </div>
            <Button variant="link" size="zero">
              Vai al sito
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
      <DoubleImages />
      <Portfolio cta={false}/>
    </>
  );
}
