import Image from "next/image";

type Props = {
  bgColor1: string;
  image1: string;
  alt1: string;
  bgColor2: string;
  image2: string;
  alt2: string;
  marginLeft?: string;
  marginRight?: string;
};

export default function DoubleImages(props: Props) {
  return (
    <div className="md:flex overflow-x-hidden">
      <div
        className={`h-[500px] lg:h-[750px] w-full lg:w-1/2 ${props.bgColor1} flex items-center jutify-center py-10 lg:px-6`}
      >
        <Image
          src={props.image1}
          width="1080"
          height="1350"
          alt={props.image1}
          className={`${props.marginLeft}`}
        />
      </div>
      <div
        className={`h-[500px] lg:h-[750px] w-full lg:w-1/2 ${props.bgColor2} flex items-center jutify-center py-10 px-6`}
      >
        <Image
          src={props.image2}
          width="1080"
          height="1350"
          alt={props.image2}
          className={`${props.marginRight}`}
        />
      </div>
    </div>
  );
}
