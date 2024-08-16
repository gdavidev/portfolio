import TagContainer from './TagContainer.js';
import Card from './Card.js';
import Tag from './Tag.js';
export default class BigCard extends Card {
    #private;
    sub_title: string;
    tags: TagContainer;
    state: string;
    stateColor: string;
    constructor(title: string, desc: string, img_path: string, alt: string, link: string, sub_title: string, tags: Tag[], state: string);
    getHtml(): string;
}
