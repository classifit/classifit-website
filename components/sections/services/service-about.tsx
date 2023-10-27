type Props = {
    subtitle: string
    title: string
}

export default function ServiceAbout(props: Props) {
  return (
    <div className="bg-light text-light-foreground">
      <div className="px-12 pt-36 pb-10 max-w-[1280px] mx-auto">
        <p className="uppercase text-sm text-primary font-medium">
          {props.subtitle}
        </p>
        <div className="py-4" />
        <h1>
          {props.title}
        </h1>
      </div>
    </div>
  );
}
