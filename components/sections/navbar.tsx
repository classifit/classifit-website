import Image from "next/image";
import MenuItem from "../ui/menu-item";

export default function Navbar() {
    return(
        <div className="flex items-center justify-between max-w-[1280px] px-12 py-4 bg-primary">
            <div className="flex items-center gap-12">
                <Image src="/classifit.svg" width="101" height="24" alt="Logo orizzontale di Classifit" priority/>
                <MenuItem text="Prova" link="#"/>
            </div>
        </div>
    )
}