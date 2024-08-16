export default class Card {
    title: string;
    desc: string;
    img_path: string;
    alt: string;
    link: string;
    constructor(title: string, desc: string, img_path: string, alt: string, link: string);
    getHtml(): string;
    getObject(): Element | null;
}
