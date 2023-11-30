import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
  imgRight: boolean;
  cta1?: string;
  cta1Link?: string;
  cta2?: string;
  cta2Link?: string;
  img?: string;
};

export default function TextAndImage(props: Props) {
  return (
    <div className="bg-card text-dark relative">
      <div className="lg:flex max-w-[1280px] px-6 lg:px-12 py-24 lg:py-[200px] mx-auto gap-60">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div
            className={`bg-secondary lg:absolute w-full lg:w-1/2 h-full top-0 ${
              props.imgRight ? "right-0" : "left-0"
            } flex items-center justify-center`}
          >
            {props.img ? (
              <Image
                src={props.img}
                width="418"
                height="427"
                alt="Gestionale e siti web per studi di pilates"
              />
            ) : (
              <Image
                src="/classifit-sticker.png"
                width="418"
                height="427"
                alt="Sticker di Classifit - Gestionale e siti web per studi di Pilates"
              />
            )}
          </div>
        </div>
        <div
          className={`w-full lg:w-1/2 mt-16 lg:mt-0 ${
            props.imgRight && "order-first"
          }`}
        >
          <p className="font-medium text-4xl leading-tight">{props.title}</p>
          <div className="py-4" />
          <p className="text-muted-foreground">{props.body}</p>
          <div className="py-10" />
          {props.cta1 ? (
            <Link href={props.cta1Link ? props.cta1Link : "#"}>
              <Button variant="link" size="zero" className="block">
                {props.cta1}
              </Button>
            </Link>
          ) : (
            <Link
              href="https://www.instagram.com/app.classi.fit/"
              target="_blank"
            >
              <Button variant="link" size="zero" className="block">
                @app.classi.fit
              </Button>
            </Link>
          )}
          <div className="mt-4" />
          {props.cta2 ? (
            <Link href={props.cta2Link ? props.cta2Link : "#"}>
              <Button variant="link" size="zero" className="block">
                {props.cta2}
              </Button>
            </Link>
          ) : (
            <Link href="mailto:classifit.studio@gmail.com">
              <Button variant="link" size="zero" className="block">
                classifit.studio@gmail.com
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
