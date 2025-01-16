import {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function OverlayButtons() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            right: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <OverlayButton
                icon={<FontAwesomeIcon size="2x" icon={[ "fab", "instagram" ]} />}
                backgroundColor='pink'
                href="https://www.instagram.com/gabriel.david.david/"/>
            <OverlayButton
                icon={<FontAwesomeIcon size="2x" icon={[ "fab", "whatsapp" ]} />}
                backgroundColor='green'
                href="https://wa.link/dg78tr"/>
        </div>
    )
}

type OverlayButtonProps = {
    icon: ReactNode;
    backgroundColor: string;
    href: string;
}

function OverlayButton(props: OverlayButtonProps) {
    return (
        <a
            target='_blank'
            href={props.href}
            style={{
                backgroundColor: props.backgroundColor,
                padding: '1rem',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {props.icon}
        </a>
    )
}