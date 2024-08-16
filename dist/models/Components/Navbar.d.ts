export default class Navbar {
    #private;
    parent: Element | null;
    menu: Element | null;
    navList: Element | null;
    scrollEffect: boolean;
    constructor(parent: string, menu: string, navList: string, scrollEffect: boolean);
    handleClick(): void;
    allowTransition(): void;
    init(): void;
    onScroll(): void;
}
