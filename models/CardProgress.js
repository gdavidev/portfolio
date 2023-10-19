import Card from '../models/Card.js';

export default class CardProgress extends Card {
    constructor(title, desc, img_path, alt, link, progress) {
        super(title, desc, img_path, alt, link);
        this.progress = progress;
    }

    getHtml() {
        const html =
            `<div class='card'>
                <a href='${ this.link }' target='_blank'><img src='${ this.img_path }' alt='${ this.alt }'></a>
                <div class='card_info'>
                    <h3 class='card_title'>${ this.title }</h3>
                    ${ this.desc }
                </div>
                <div class='card_progress_bar'>
                    <p class='card_progress_bar_percentage'>${ this.progress }</p>
                    <div class='card_progress_bar_border'>
                        <div class='card_progress_bar_fill' style='width: ${ this.progress };'></div>
                    </div>
                </div>
            </div>`;
        return html;
    }
}