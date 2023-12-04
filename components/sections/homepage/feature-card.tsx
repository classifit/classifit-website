import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  link: string;
  img?: string;
  bgColor: string;
  textColor: string;
  mutedColor: string;
  width: string;
};

export default function FeatureCard(props: Props) {
  return (
    <div
      className={`${props.width} p-16 mb-4 ${props.bgColor} ${props.textColor}`}
    >
      <div className="flex items-center justify-between gap-36">
        <div className={props.width === "w-full" ? "w-1/2" : ""}>
          <h1 className="font-medium">{props.title}</h1>
          <div className="py-2" />
          <p className={`${props.mutedColor}`}>{props.description}</p>
          <div className="py-8" />
          <Link href={props.link}>
            <Button variant="default">
              Scopri come
              <ArrowRightIcon className="ml-3 h-4 w-4" />
            </Button>
          </Link>
        </div>
        {props.img && (
          <div className={props.width === "w-full" ? "w-1/2" : ""}>
            <Image src={props.img} width="450" height="630" alt="lol" />
          </div>
        )}
      </div>
    </div>
  );
}
