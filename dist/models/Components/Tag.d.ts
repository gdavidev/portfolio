export default class Tag {
    name: string;
    text_color: string;
    bg_color: string;
    constructor();
    constructor(name: string, text_color: string, bg_color: string);
    constructor(name: string, text_color?: string, bg_color?: string);
    static makeTagList(namesArray: string[]): Tag[];
    getHtml(): string;
}
