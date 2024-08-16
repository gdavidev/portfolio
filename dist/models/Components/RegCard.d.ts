import Card from './Card.js';
export default class RegCard extends Card {
    constructor(title: string, desc: string, img_path: string, alt: string, link: string);
    getHtml(): string;
}
