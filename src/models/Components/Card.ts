export default class Card {
    title : string;
    desc : string;
    img_path : string;
    alt : string;
    link : string;

    constructor(title : string, desc : string, img_path : string, alt : string, link : string) {
        this.title = title;
        this.desc = desc;
        this.img_path = img_path;
        this.alt = alt;
        this.link = link;
    }
    
    getHtml() : string {
        return "";
    }

    getObject() : Element | null {
        let template : HTMLTemplateElement = document.createElement("template");
        let html : string = this.getHtml();
        template.innerHTML = html.trim();

        let htmlElement : Element | null = template.content.firstElementChild;
        return htmlElement;
    }
}