import {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function OverlayButtons() {
    return (
        <div className='fixed bottom-6 right-6 flex justify-center flex-col gap-4'>
            <OverlayButton
                icon={<FontAwesomeIcon size="2x" icon={["fab", "instagram"]}/>}
                className='text-white bg-instagram-gradient'
                href="https://www.instagram.com/gabriel.david.david/"/>
            <OverlayButton
                icon={<FontAwesomeIcon size="2x" icon={["fab", "whatsapp"]}/>}
                className='text-white bg-brand-whatsapp'
                href="https://wa.link/dg78tr"/>
        </div>
    )
}

type OverlayButtonProps = {
    icon: ReactNode;
    className: string;
    href: string;
}

function OverlayButton(props: OverlayButtonProps) {
    const className: string = props.className + " shadow-lg w-14 h-14 items-center justify-center flex p-4 rounded-full";

    return (
        <a target='_blank' href={props.href} className={className}>
            {props.icon}
        </a>
    )
}