import Tag from './Tag.js';
export default class TagContainer {
    #private;
    tags: Tag[];
    constructor(tags: Tag[]);
    getHtml(): string;
}
