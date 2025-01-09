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
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faDatabase,
    faFile,
    faC,
    faSquare
} from '@fortawesome/free-solid-svg-icons'
import {
    faEnvelope
} from '@fortawesome/free-regular-svg-icons'

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
            faBars,
            faC,
            faFile,
            faDatabase,
            faEnvelope
        );
    }
}