import {useCallback, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type CopyTextContainerProps = {
    text: string;
    className?: string;
}

export default function CopyTextContainer(props: CopyTextContainerProps) {
    const [isCopied, setCopied] = useState<boolean>(false);
    const [currentHoverAnimation, setCurrentHoverAnimation] =
        useState<'animate-smooth-pan' | 'animate-smooth-pan-reverse'>();

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(props.text)
            .then(() => setCopied(true));
    }, [props.text]);

    return (
        <div
            onClick={copyToClipboard}
            className={'group select-none w-fit overflow-hidden h-12 cursor-pointer ' + (props.className ?? '')}>
            <div
                onMouseOver={() => setCurrentHoverAnimation('animate-smooth-pan')}
                onMouseOut={() => setCurrentHoverAnimation('animate-smooth-pan-reverse')}
                className={'-mx-1 ' + currentHoverAnimation}>
                <div
                    onMouseOver={() => setCopied(false)}
                    className='px-4 pb-2 pt-4 -mt-2 bg-card-background text-primary-red text-end text-2xl group-hover:-mt-14 duration-200'>
                    <div className='flex justify-between items-center gap-x-16'>
                        <FontAwesomeIcon icon={['fas', 'envelope']}/>
                        {props.text}
                    </div>
                </div>
                <div className='size-full text-white bg-primary-red pt-2 pb-4 -mb-2 text-end text-2xl pe-4 origin-top-left'>
                    {isCopied ?
                        <span className='font-bold'>Copiado!</span> :
                        <span className=''>Copiar</span>
                    }
                </div>
            </div>
        </div>
    )
}