class BigCardHtml extends Card {
    constructor(title, subTitle, desc, img_path, alt, tags, state, link) {
        super(title, desc, img_path, alt, link);
        this.subTitle = subTitle;
        this.tags = tags;
        this.state = state;
    }
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
    }

    getHtml() {
        const html =
            `<div class="big_card">
                <div class="card_thumbnail">
                    <a href="${ this.link }"><img src="${ this.img_path }" alt="${ this.alt }"></a>
                </div>
                <div class="card_info">
                    <div class='card_info'>
                        <h3 class="card_title">${ this.title }</h3>
                        <h4 class="card_sub_title">${ this.subTitle }</h4>
                        <div class='tags_container'>
                            ${ this.tags }
                        </div>
                        <p class="card_desc">${ this.desc }</p>
                        <p class="project_state" >State: <span style='color:${ this.stateColor };'>${ this.state }</span></p>
                        <a href="${ this.link }" class="access_link">${ this.link }</a>
                    </div>
                </div>
            </div>`;
        
        return html;
    }
}

