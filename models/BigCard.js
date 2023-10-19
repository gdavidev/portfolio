import TagContainer from './TagContainer.js';
import Card from './Card.js';

export default class BigCard extends Card {
    constructor(title, sub_title, desc, img_path, alt, tags, state, link) {
        super(title, desc, img_path, alt, link);
        this.sub_title = sub_title;
        this.tags = new TagContainer(tags);
        this.state = state;
    }
    /*
    stateColor = 'none';

    #getStateColor() {
        switch (this.state) {
            case 'Stable':
                stateColor = 'greenyellow';
                break;
            case 'In Progress':
                stateColor = 'yellow';
                break;
            case 'Cancelled':
                stateColor = 'red';
                break;
        }
    }*/

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
                        <a href="${ this.link }" class="access_link">${ this.link }</a>
                    </div>
                </div>
            </div>`;
        
        return html;
    }
}

