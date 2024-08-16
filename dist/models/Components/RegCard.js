import Card from './Card.js';
export default class RegCard extends Card {
    constructor(title, desc, img_path, alt, link) {
        super(title, desc, img_path, alt, link);
    }
    getHtml() {
        const html = `<div class='card'>
                <a href='${this.link}' target='_blank'><img src='${this.img_path}' alt='${this.alt}'></a>
                <div class='card_info'>
                    <h3 class='card_title'>${this.title}</h3>
                    ${this.desc}
                </div>
            </div>`;
        return html;
    }
}
//# sourceMappingURL=RegCard.js.map