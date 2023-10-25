import Link from "next/link";

type Props = {
    text: string
    link: string
}

export default function MenuItem(props: Props) {
    return(
        <Link href={props.link} className="select-none text-primary-foreground opacity-60 hover:opacity-100 text-sm transition-opacity ease-in-out duration-200">{props.text}</Link>
    )
}