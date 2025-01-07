import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useDeviceWidth, {DeviceWidthBreakpoints} from "../hooks/Environment/useDeviceWidth.ts";

type NavbarProps = {
    allowTransitionEffect: boolean;
}

export default function Navbar(props: NavbarProps) {
    const { breakpoint } = useDeviceWidth();
    const [ scrolled, setScrolled ] = useState<boolean>(false);

    useEffect(() => {
        if (!props.allowTransitionEffect)
            return;

        const aboveScrollThreshold = window.scrollY > 100;
        if (aboveScrollThreshold !== scrolled)
            setScrolled(aboveScrollThreshold)
    }, [window.scrollY]);

    return (
        <nav id="menu">
            <p className="not_selectable">Gabriel David</p>
            {
                breakpoint >= DeviceWidthBreakpoints.XL ?
                    <NavbarInline scrolled={ scrolled } /> :
                    <NavbarDrawer scrolled={ scrolled } />
            }
        </nav>
    );
}

function NavbarInline(props: { scrolled: boolean }) {
    return (
        <ul className={"not_selectable can_transition" + (props.scrolled ? " header_scrolled" : "")}>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/formation"> Formação</Link></li>
            <li><Link to="/projects"> Projetos</Link></li>
            <li><Link to="/contact"> Contato</Link></li>
        </ul>
    )
}

function NavbarDrawer(props: { scrolled: boolean }) {
    const [ open, setOpen ] = useState<boolean>(false);

    return (
        <>
            <button className="not_selectable" onClick={() => setOpen(!open)}>
                <i className="material-icons">menu</i>
            </button>
            <ul className={
                "not_selectable can_transition"
                    + (open ? " active" : "")
                    + (props.scrolled ? " header_scrolled" : "")
            }>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/formation"> Formação</Link></li>
                <li><Link to="/projects"> Projetos</Link></li>
                <li><Link to="/contact"> Contato</Link></li>
            </ul>
        </>
    )
}


