export default class Card {
    constructor(title, desc, img_path, alt, link) {
        this.title = title;
        this.desc = desc;
        this.img_path = img_path;
        this.alt = alt;
        this.link = link;
    }
    
    getHtml() {}
    getObject() {
        const template = document.createElement("template");
        const html = this.getHtml();
        template.innerHTML = html.trim();

        const htmlElement = template.content.firstElementChild;

        return htmlElement;
    }
}