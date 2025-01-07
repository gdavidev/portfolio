import Card from './Card.ts';

export default class RegCard extends Card {
    constructor(title : string, desc : string, img_path : string, alt : string, link : string) {
        super(title, desc, img_path, alt, link);
    }

    getHtml() {
        const html =
            `<div class='card'>
                <a href='${ this.link }' target='_blank'><img src='${ this.img_path }' alt='${ this.alt }'></a>
                <div class='card_info'>
                    <h3 class='card_title'>${ this.title }</h3>
                    ${ this.desc }
                </div>
            </div>`;
        return html;
    }
}