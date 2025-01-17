import React, {ReactNode, useCallback, useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CopyTextContainer from "./CopyTextContainer.tsx";
import useThrottle from "../hooks/useThrottle.ts";

export default function OverlayButtons() {
    return (
        <>
            <CopyTextContainer
                className='fixed right-24 bottom-14 shadow-md rounded-md'
                text='gdavid.wk2202@gmail.com'/>
            <div className='fixed bottom-14 right-6 flex justify-center items-center flex-col gap-4'>
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
    const [scrolled, setScrolled] = useState<boolean>(false);

    const updateScrolled = useThrottle({
        callback: () => setScrolled(window.scrollY > 500),
        delay: 200,
        buffered: true
    });

    useEffect(() => {
        window.addEventListener('scroll', updateScrolled);
        return () => window.removeEventListener('scroll', updateScrolled);
    }, []);

    const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <button
            onClick={onClick}
            className={
                'w-10 h-10 flex select-none shadow-lg rounded-full items-center '
                + 'justify-center bg-black text-white transition-transform '
                + (scrolled ? ' scale-100 rotate-0' : ' scale-0 rotate-90')
            }>
            <FontAwesomeIcon icon={["fas", "arrow-up"]}/>
        </button>
    )
}