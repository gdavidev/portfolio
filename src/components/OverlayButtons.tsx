import type {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CopyTextContainer from "./CopyTextContainer.tsx";
import useScrollPosition from "../hooks/Environment/useScrollPosition.ts";

export default function OverlayButtons() {
    return (
        <>
            <CopyTextContainer
                className='fixed bottom-6 right-4 md:right-20 shadow-md rounded-md'
                text='gdavid.wk2202@gmail.com'/>

            <div className=' bottom-8 right-4 md:bottom-6 fixed flex justify-center items-center flex-col gap-4'>
                <GoToTopButton />

                <OverlayButton
                    className='text-white bg-instagram-gradient'
                    href="https://www.instagram.com/gabriel.david.david/"
                    icon={
                        <FontAwesomeIcon
                            className='size-6 md:size-8 hover:size-9 duration-100'
                            icon={["fab", "instagram"]}/>
                    }/>
                <OverlayButton
                    className='text-white bg-brand-whatsapp'
                    href="https://wa.link/dg78tr"
                    icon={
                        <FontAwesomeIcon
                            className='size-6 md:size-8 hover:size-9 duration-100'
                            icon={["fab", "whatsapp"]}/>
                    }/>
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
                + ' select-none shadow-lg size-10 md:size-14 items-center justify-center flex p-4 rounded-full'
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
                'size-8 md:size-10 flex select-none shadow-lg rounded-full items-center '
                + 'justify-center bg-black text-white transition-transform '
                + (scrollY >= 500 ? ' scale-100 rotate-0' : ' scale-0 rotate-90')
            }>
            <FontAwesomeIcon icon={["fas", "arrow-up"]}/>
        </button>
    )
}