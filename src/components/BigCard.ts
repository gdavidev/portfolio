import TagContainer from './TagContainer.ts';
import Card from './Card.ts';

export default class BigCard extends Card {
    sub_title : string;
    tags : TagContainer;
    state : string;
    stateColor : string;

    constructor(title : string, desc : string, img_path : string, alt : string, link : string, sub_title : string, tagContainer : TagContainer, state : string) {
        super(title, desc, img_path, alt, link);
        this.sub_title = sub_title;
        this.tags = tagContainer;
        this.state = state;
        this.stateColor = this.#getStateColor();
    }

    #getStateColor() : string {
        switch (this.state) {
            case 'Stable':
                return 'greenyellow';
            case 'In Progress':
                return 'yellow';
            case 'Cancelled':
                return 'red';
            default:
                return 'white';
        }
    };

    getHtml() {
        const html =
            `<div class="big_card">
                <div class="card_thumbnail">
                    <a href="${ this.link }"><img src="${ this.img_path }" alt="${ this.alt }"></a>
                </div>
                <div class="card_info">
                    <div class='card_info'>
                        <h3 class="card_title">${ this.title }</h3>
                        <h4 class="card_sub_title">${ this.sub_title }</h4>
                        ${ this.tags.getHtml() }
                        <p class="card_desc">${ this.desc }</p>
                        <p class="project_state" >State: <span style='color:${ this.stateColor };'>${ this.state }</span></p>
                    </div>
                    <a href="${ this.link }" class="access_link">${ this.link }</a>
                </div>
            </div>`;
        
        return html;
    }
}

