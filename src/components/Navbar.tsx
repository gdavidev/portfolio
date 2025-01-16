import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import useDeviceWidth, {DeviceWidthBreakpoints} from "../hooks/Environment/useDeviceWidth.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type NavbarProps = {
    allowTransitionEffect: boolean;
}

export default function Navbar(props: NavbarProps) {
    const {breakpoint} = useDeviceWidth();
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        if (props.allowTransitionEffect)
            window.addEventListener('scroll', () => {
                setScrolled(window.scrollY > 100);
            });
    }, [props.allowTransitionEffect]);

    return (
        <nav id="menu" className={scrolled || props.allowTransitionEffect ? " header_scrolled" : ""}>
            <p className="not_selectable">Gabriel David</p>
            {
                breakpoint >= DeviceWidthBreakpoints.XL ?
                    <NavbarInline/> :
                    <NavbarDrawer/>
            }
        </nav>
    );
}

function NavbarInline() {
    return (
        <ul id='menu_ul' className={"not_selectable can_transition"}>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/formation"> Formação</Link></li>
            <li><Link to="/projects"> Projetos</Link></li>
            <li><Link to="/contact"> Contato</Link></li>
        </ul>
    )
}

function NavbarDrawer() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <button id='menu_bt' className="not_selectable" onClick={() => setOpen(!open)}>
                <FontAwesomeIcon icon='bars'/>
            </button>
            <ul id='menu_ul' className={"not_selectable can_transition" + (open ? " active" : "")}>
                <li><Link to="/"> Home</Link></li>
                <li><Link to="/formation"> Formação</Link></li>
                <li><Link to="/projects"> Projetos</Link></li>
                <li><Link to="/contact"> Contato</Link></li>
            </ul>
        </>
    )
}


