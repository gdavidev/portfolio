export default class Tag {
    constructor(name, text_color, bg_color) {
        this.name = name || "";
        this.text_color = text_color || "";
        this.bg_color = bg_color || "";
    }
    static makeTagList(namesArray) {
        return namesArray.map((tagName) => new Tag(tagName));
    }
    getHtml() {
        const html = `<div class="tag" style="color: ${this.text_color}; background-color: ${this.bg_color};">
                <p>${this.name}</p>
            </div>`;
        return html;
    }
}
//# sourceMappingURL=Tag.js.map