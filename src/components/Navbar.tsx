import {Link, useLocation} from "react-router-dom";
import {useCallback, useState} from "react";
import useDeviceWidth, {DeviceWidthBreakpoints} from "../hooks/Environment/useDeviceWidth.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logo from "./Logo.tsx";
import useScrollPosition from "../hooks/Environment/useScrollPosition.ts";

type NavbarProps = {
    keepOpaque: boolean;
}

export default function Navbar(props: NavbarProps) {
    const {scrollY, setScrollPosition} = useScrollPosition({step: 100});
    const {breakpoint} = useDeviceWidth();

    const onRouteChange = useCallback(() => {
        setScrollPosition(0, 'instant');
    }, [setScrollPosition])

    return (
        <nav className={"navbar " + (scrollY >= 100 || props.keepOpaque ? " bg-layout-background" : "")}>
            <Logo/>
            {breakpoint >= DeviceWidthBreakpoints.MD ?
                <NavbarInline onChange={onRouteChange}/> :
                <NavbarDrawer onChange={onRouteChange}/>
            }
        </nav>
    );
}

function NavbarInline(props: { onChange: () => void }) {
    const {pathname} = useLocation();

    return (
        <div className="font-rubik font-bold flex h-full">
            <NavbarInlineButton
                onChange={props.onChange}
                name='Home'
                href='/'
                selected={pathname === '/'}/>
            <NavbarInlineButton
                onChange={props.onChange}
                name='Formação'
                href='/formation'
                selected={pathname === '/formation'}/>
            <NavbarInlineButton
                onChange={props.onChange}
                name='Projetos'
                href='/projects'
                selected={pathname === '/projects'}/>
        </div>
    )
}

function NavbarInlineButton(props: { name: string, href: string, selected: boolean, onChange: () => void }) {
    return (
        <div className='group'>
            <Link
                onClick={() => {
                    if (!props.selected) props.onChange();
                }}
                className='grow flex items-center px-8 h-full'
                to={props.href}>
                {props.name}
            </Link>
            <div className={
                'mx-auto relative -top-0.5 h-0.5 bg-white transition-all '
                + (!props.selected ? 'w-0 group-hover:w-1/2' : 'w-full')
            }/>
        </div>
    )
}

function NavbarDrawer(props: { onChange: () => void }) {
    const [open, setOpen] = useState<boolean>(false);
    const {pathname} = useLocation();

    const onChange: () => void = useCallback(() => {
        setOpen(false);
        props.onChange;
    }, [props.onChange])

    return (
        <>
            <button className="not_selectable" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon={['fas', 'bars']}/>
            </button>
            <div className={
                "absolute right-0 top-16 font-rubik font-bold flex flex-col gap-y-2 me-8 h-full transition"
                + (open ? " " : " translate-x-full")
            }>
                <NavbarDrawerButton
                    onChange={onChange}
                    className={'transition' + (open ? " " : " translate-x-full")}
                    name='Home'
                    href='/'
                    selected={pathname === '/'}/>
                <NavbarDrawerButton
                    onChange={onChange}
                    className={'transition delay-[50ms]' + (open ? " " : " translate-x-full")}
                    name='Formação'
                    href='/formation'
                    selected={pathname === '/formation'}/>
                <NavbarDrawerButton
                    onChange={onChange}
                    className={'transition delay-100' + (open ? " " : " translate-x-full")}
                    name='Projetos'
                    href='/projects'
                    selected={pathname === '/projects'}/>
            </div>
        </>
    );
}

function NavbarDrawerButton(props: {
    name: string,
    href: string,
    className: string,
    selected: boolean,
    onChange: () => void
}) {
    return (
        <Link
            onClick={() => {
                if (!props.selected) props.onChange();
            }}
            className={'px-16 py-2 text-center bg-layout-background rounded-md ' + (props.className ?? '')}
            to={props.href}>
                {props.name}
        </Link>
    )
}


