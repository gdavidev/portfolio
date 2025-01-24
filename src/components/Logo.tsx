import {Link} from "react-router-dom";

type LogoProps = {
    className?: string;
}

export default function Logo(props: LogoProps) {
    return (
        <Link to='/' className={"font-dancing-script text-3xl " + (props.className ?? '')}>
            Gabriel David
        </Link>
    );
}