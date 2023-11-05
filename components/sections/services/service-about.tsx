type Props = {
    subtitle: string
    title: string
}

export default function ServiceAbout(props: Props) {
  return (
    <div className="bg-light text-light-foreground">
      <div className="px-6 lg:px-12 pt-24 lg:pt-36 pb-10 max-w-[1280px] mx-auto">
        <p className="uppercase text-sm text-primary font-medium">
          {props.subtitle}
        </p>
        <div className="py-4" />
        <p className="text-4xl leading-tight">
          {props.title}
        </p>
      </div>
    </div>
  );
}
