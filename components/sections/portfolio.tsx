import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";

type Props = {
  cta: boolean;
};

export default function Portfolio(props: Props) {
  const images = ["/guarantee.svg", "/next.svg"];
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
        <div className="py-20" />
        <div className="flex flex-wrap gap-4">
            {images.map((img) => (
                <div className="w-1/3">
                    <Image src={img} height="1350" width="1080" alt="Progetto di Classifit" />
                </div>
            ))}
        </div>
      </section>
    </div>
  );
}
