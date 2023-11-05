import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Props = {
  cta: boolean;
  ctaText?: string;
  subtitle: boolean;
  subtitleText?: string;
  title: string;
  body?: string;
  bgColor: string;
  textColor: string;
};

export default function Paragraph(props: Props) {
  return (
    <div className={`${props.bgColor} ${props.textColor}`}>
      <section>
        <div className="lg:flex lg:justify-between gap-48">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            {props.subtitle && (
              <div className="uppercase text-muted-foreground text-sm">
                {props.subtitleText}
              </div>
            )}
            <p className="font-medium text-4xl leading-tight">{props.title}</p>
          </div>
          {props.cta ? (
            <Button variant="default" className="mt-10 lg:mt-0">
              {props.ctaText}
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          ) : (
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <p>{props.body}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
