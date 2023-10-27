import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Props = {
  cta: boolean;
  ctaText?: string;
  subtitle: boolean;
  subtitleText?: string;
  title: string;
  body?: string;
};

export default function Paragraph(props: Props) {
  return (
    <div className="bg-light text-light-foreground">
      <section>
        <div className="flex justify-between gap-48">
          <div className="flex flex-col gap-4 w-1/2">
            {props.subtitle && (
              <div className="uppercase text-muted-foreground text-sm">
                {props.subtitleText}
              </div>
            )}
            <h1 className="font-medium">{props.title}</h1>
          </div>
          {props.cta ? (
            <Button variant="link" size="zero">
              {props.ctaText}
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          ) : (
            <div className="w-1/2">
              <p>{props.body}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
