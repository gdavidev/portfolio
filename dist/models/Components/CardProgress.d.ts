import Card from './Card.js';
export default class CardProgress extends Card {
    progress: string;
    constructor(title: string, desc: string, img_path: string, alt: string, link: string, progress: string);
    getHtml(): string;
}
