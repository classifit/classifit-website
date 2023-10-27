type Props = {
    title: string
    description: string
}

export default function ServiceCard(props: Props) {
    return(
        <div className="bg-card text-card-foreground w-full p-12 flex flex-col gap-2">
           <p className="font-medium">{props.title}</p>
           <p className="text-muted-foreground">{props.description}</p>
        </div>
    )
}