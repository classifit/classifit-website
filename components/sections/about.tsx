import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
};

export default function About(props: Props) {
  return (
    <div className="bg-card text-dark relative">
      <div className="flex max-w-[1280px] px-12 py-[200px] mx-auto gap-60">
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-secondary absolute w-1/2 h-full top-0 left-0 flex items-center justify-center">
            <Image
              src="/classifit-sticker.png"
              width="418"
              height="427"
              alt="Sticker di Classifit - Gestionale e siti web per studi di Pilates"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="font-medium">{props.title}</h1>
          <div className="py-4" />
          <p className="text-muted-foreground">{props.body}</p>
          <div className="py-10" />
          <Link
            href="https://www.instagram.com/app.classi.fit/"
            target="_blank"
          >
            <Button variant="link" size="zero" className="block">
              @app.classi.fit
            </Button>
          </Link>
          <div className="mt-4" />
          <Link href="mailto:classifit.studio@gmail.com">
            <Button variant="link" size="zero" className="block">
              classifit.studio@gmail.com
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
