import {ReactNode} from "react";

export type CardsContainerBaseProps = {
    title?: string;
    description?: string;
    containerClassName?: string;
    children?: ReactNode | ReactNode[];
}

export default function CardsContainerBase(props: CardsContainerBaseProps) {
    return (
        <>
            {props.title && <h2 className='mt-12'>{props.title}</h2>}
            {props.description && <p className="descricao_do_topico">{props.description}</p>}
            <div className={'mt-4 gap-2 ' + (props.containerClassName ?? '')}>
                {props.children}
            </div>
        </>
    );
}