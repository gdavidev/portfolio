export default class Card {
    constructor(title, desc, img_path, alt, link) {
        this.title = title;
        this.desc = desc;
        this.img_path = img_path;
        this.alt = alt;
        this.link = link;
    }
    getHtml() {
        return "";
    }
    getObject() {
        let template = document.createElement("template");
        let html = this.getHtml();
        template.innerHTML = html.trim();
        let htmlElement = template.content.firstElementChild;
        return htmlElement;
    }
}
//# sourceMappingURL=Card.js.map