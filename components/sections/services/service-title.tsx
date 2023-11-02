import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  subtitle: string;
  title: string;
  description: string;
  bgColor: string;
  image: string;
};

export default function ServiceTitle(props: Props) {
  return (
    <div className="bg-primary text-primary-foreground">
      <section>
        <div className="lg:flex justify-between items-center gap-32">
          <div className="w-full lg:w-1/2">
            <p className="uppercase text-white/60 text-sm font-medium">
              {props.subtitle}
            </p>
            <div className="py-3" />
            <h1 className="text-4xl lg:text-7xl font-medium leading-[1.1]">
              {props.title}
            </h1>
            <div className="py-4" />
            <p className="text-white/60 lg:w-3/4">{props.description}</p>
            <div className="py-8 lg:py-10" />
            <Link href="mailto:classifit.studio@gmail.com">
              <Button variant="secondary">
                Contattaci
                <ArrowRightIcon className="ml-3 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div
            className={`lg:flex items-center justify-center lg:h-[650px] p-16 w-full lg:w-1/2 mt-16 lg:mt-0 rounded-[6px] ${props.bgColor}`}
          >
            <Image
              src={props.image}
              width="370"
              height="482"
              alt="Prenotazioni online, calendario delle lezioni, pacchetti a crediti e siti web su misura - Porta il tuo studio di fitness al prossimo livello"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
