import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  cta: boolean;
};

const projects = [
  {
    id: 1,
    default: "/portfolio/sito-web-pilates-1.png",
    gif: "/portfolio/sito-web-pilates-1-gif.gif",
  },
  {
    id: 2,
    default: "/portfolio/sito-web-pilates-2.png",
    gif: "/portfolio/sito-web-pilates-2-gif.gif",
  },
  {
    id: 3,
    default: "/portfolio/sito-web-pilates-3.png",
    gif: "/portfolio/sito-web-pilates-3-gif.gif",
  },
  {
    id: 4,
    default: "/portfolio/sito-web-pilates-4.png",
    gif: "/portfolio/sito-web-pilates-4-gif.gif",
  },
  {
    id: 5,
    default: "/portfolio/sito-web-pilates-5.png",
    gif: "/portfolio/sito-web-pilates-5-gif.gif",
  },
  {
    id: 6,
    default: "/portfolio/sito-web-pilates-6.png",
    gif: "/portfolio/sito-web-pilates-6-gif.gif",
  },
];

export default function Portfolio(props: Props) {
  return (
    <div className="bg-light text-light-foreground">
      <section className="text-center">
        <p className="font-medium text-4xl leading-tight">Alcuni progetti selezionati</p>
        <div className="py-4" />
        {props.cta && (
          <Link href="/studi">
            <Button variant="default">
              Tutti gli studi
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          </Link>
        )}
        <div className="py-4 lg:py-10" />
        <div className="md:grid grid-cols-12 gap-4">
          {projects.map((prj) => (
            <div className="md:col-span-6 lg:col-span-4 group mt-4 lg:mt-0" key={prj.id}>
              <Image
                src={prj.default}
                width="1080"
                height="1350"
                alt="Progetto grafico di Classifit - Siti web per studi di pilates o fitness"
                className="block lg:group-hover:hidden"
              />
              <Image
                src={prj.gif}
                width="1080"
                height="1350"
                alt="Progetto grafico di Classifit - Siti web per studi di pilates o fitness"
                className="hidden lg:group-hover:block"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
