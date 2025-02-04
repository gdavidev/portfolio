import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CSSProperties} from "react";

type CardLinkImageProps = {
    src: string;
    alt: string;
    style?: {
        container?: CSSProperties & { className?: string },
        image?: CSSProperties & { className?: string },
    };
    className?: string;
    link?: string;
}

export function CardLinkImage(props: CardLinkImageProps) {
    const imageClassName: string = props.style?.image?.className || '';
    const containerClassName: string = props.style?.container?.className || (props.className || '');

    return (
        <a className={containerClassName + ' group rounded-lg overflow-hidden'}
           href={props.link}
           target='_blank'
        >
            <FontAwesomeIcon
                className={
                    'absolute bg-card-background pe-2 pb-2 pt-1 ps-1 '
                    + 'rounded-br-md z-10 transition opacity-0 group-hover:opacity-100'
                }
                icon={["fas", "arrow-up-right-from-square"]}/>
            <img
                className={imageClassName + ' object-cover mx-auto transition group-hover:grayscale'}
                src={props.src}
                alt={props.alt}/>
        </a>
    );
}