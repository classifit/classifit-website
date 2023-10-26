import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="bg-secondary text-dark relative">
      <div className="flex max-w-[1280px] px-12 py-36 mx-auto gap-60">
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-card absolute w-1/2 h-full top-0 left-0" />
          <p>ciao</p>
        </div>
        <div className="w-1/2">
          <h1 className="font-medium">È un piacere conoscerti</h1>
          <div className="py-4" />
          <p className="text-muted-foreground">
            Siamo Federico e Chiara. Uno sviluppatore e una designer di Brescia
            che si incontrano e - quasi inevitabilmente - decidono di creare
            qualcosa insieme. Forti della nostra esperienza lavorativa nel
            settore, il nostro obiettivo principale è portare valore,
            competenza, qualità e semplicità in ogni studio di pilates con cui
            abbiamo l’onore di collaborare.
          </p>
          <div className="py-10" />
          <Button variant="link" size="zero" className="block">
            @app.classi.fit
          </Button>
          <div className="mt-4" />
          <Button variant="link" size="zero" className="block">
            classifit.studio@gmail.com
          </Button>
        </div>
      </div>
    </div>
  );
}