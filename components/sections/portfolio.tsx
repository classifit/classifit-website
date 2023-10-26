import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  cta: boolean;
};

export default function Portfolio(props: Props) {
  const images = [
    "/portfolio/sito-web-pilates-1.png",
    "/portfolio/sito-web-pilates-2.png",
    "/portfolio/sito-web-pilates-3.png",
    "/portfolio/sito-web-pilates-4.png",
    "/portfolio/sito-web-pilates-5.png",
    "/portfolio/sito-web-pilates-6.png",
  ];
  return (
    <div className="bg-light text-light-foreground">
      <section className="text-center">
        <h1 className="font-medium">Lavori selezionati</h1>
        <div className="py-4" />
        {props.cta && (
          <Button variant="default">
            Studi
            <ArrowRightIcon className="ml-3 h-4 w-4" />
          </Button>
        )}
        <div className="py-10" />
        <div className="grid grid-cols-12 gap-4">
          {images.map((img) => (
            <div className="col-span-4" key={img}>
              <Image
                src={img}
                height="1350"
                width="1080"
                alt="Classifit - Sito Web per uno studio di Pilates"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
