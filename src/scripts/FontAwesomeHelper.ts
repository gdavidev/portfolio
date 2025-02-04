import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faBootstrap,
    faRust,
    faReact,
    faHtml5,
    faCss3Alt,
    faSquareJs,
    faPhp,
    faSass,
    faWhatsapp,
    faAws,
    faNodeJs
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faDatabase,
    faFile,
    faC,
    faWind,
    faCircle,
    faEnvelope,
    faArrowUp,
    faSquare,
    faArrowUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'


 // Static class with FontAwesome utility functions
export default class FontAwesomeHelper {
    public static initialize() {
        library.add(
            faGithub,
            faInstagram,
            faLinkedin,
            faHtml5,
            faCss3Alt,
            faSquareJs,
            faPhp,
            faBootstrap,
            faRust,
            faReact,
            faSquare,
            faSass,
            faWhatsapp,
            faAws,
            faNodeJs,
            faBars,
            faC,
            faFile,
            faWind,
            faCircle,
            faDatabase,
            faArrowUp,
            faEnvelope,
            faArrowUpRightFromSquare
        );
    }
}