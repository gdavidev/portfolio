import type {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CopyTextContainer from "./CopyTextContainer.tsx";
import useScrollPosition from "../hooks/Environment/useScrollPosition.ts";

export default function OverlayButtons() {
    return (
        <>
            <CopyTextContainer
                className='fixed right-6 md:right-24 bottom-14 shadow-md rounded-md'
                text='gdavid.wk2202@gmail.com'/>

            <div className='fixed bottom-28 md:bottom-14 right-6 flex justify-center items-center flex-col gap-4'>
                <GoToTopButton />

                <OverlayButton
                    icon={<FontAwesomeIcon className='size-8 hover:size-9 duration-100' icon={["fab", "instagram"]}/>}
                    className='text-white bg-instagram-gradient'
                    href="https://www.instagram.com/gabriel.david.david/" />
                <OverlayButton
                    icon={<FontAwesomeIcon className='size-8 hover:size-9 duration-100' icon={["fab", "whatsapp"]}/>}
                    className='text-white bg-brand-whatsapp'
                    href="https://wa.link/dg78tr" />
            </div>
        </>
    )
}

type OverlayButtonProps = {
    icon: ReactNode;
    className: string;
    href: string;
}

function OverlayButton(props: OverlayButtonProps) {
    return (
        <a
            target='_blank'
            href={props.href}
            className={
                (props.className ?? '')
                + ' select-none shadow-lg w-14 h-14 items-center justify-center flex p-4 rounded-full'
            }>
            {props.icon}
        </a>
    )
}

function GoToTopButton() {
    const {scrollY, setScrollPosition} = useScrollPosition({ step: 250 });

    return (
        <button
            onClick={() => setScrollPosition(0, 'smooth')}
            className={
                'w-10 h-10 flex select-none shadow-lg rounded-full items-center '
                + 'justify-center bg-black text-white transition-transform '
                + (scrollY >= 500 ? ' scale-100 rotate-0' : ' scale-0 rotate-90')
            }>
            <FontAwesomeIcon icon={["fas", "arrow-up"]}/>
        </button>
    )
}