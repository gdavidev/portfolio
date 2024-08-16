export default class Tag {
    name : string;
    text_color : string;
    bg_color : string;

    constructor();
    constructor(name : string, text_color : string, bg_color : string);
    constructor(name : string, text_color? : string, bg_color? : string);
    constructor(name? : string, text_color? : string, bg_color? : string) {
        this.name = name || "";
        this.text_color = text_color || "";
        this.bg_color = bg_color || "";
    }

    static makeTagList(namesArray: string[]): Tag[] {
        return namesArray.map((tagName) => new Tag(tagName));
    }

    getHtml() {
        const html =
            `<div class="tag" style="color: ${ this.text_color }; background-color: ${ this.bg_color };">
                <p>${ this.name }</p>
            </div>`
        return html;
    }
}