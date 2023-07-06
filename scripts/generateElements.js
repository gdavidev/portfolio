function elementFromHtml(html) {
    const template = document.createElement("template");

    template.innerHTML = html.trim();

    return template.content.firstElementChild;
}

function addHtmlElement(parent, html) {
    const htmlElement = elementFromHtml(html)

    parent.appendChild(htmlElement);
}

function cardHtml(title, desc, img_path, alt, link, progress) {
    const html =
        `<div class='card'>
            <a href='${ link }' target='_blank'><img src='${ img_path }' alt='${ alt }'></a>
            <div class='card_info'>
                <h3 class='card_title'>${ title }</h3>
                ${ desc }
            </div>
            <div class='card_progress_bar'>
                <p class='card_progress_bar_percentage'>${ progress }</p>
                <div class='card_progress_bar_border'>
                    <div class='card_progress_bar_fill' style='width: ${ progress };'></div>
                </div>
            </div>
        </div>`;
    return html;
}

function bigCardHtml(title, subTitle, desc, thumbnail, alt, tags = Array(), state, link) {
    tagsHtml = pickTagsHtml(tags);
    var stateColor;

    if(state == 'Stable') {
        stateColor = 'greenyellow';
    } else if(state == 'In Progress') {
        stateColor = 'yellow';
    } else if(state == 'Canceled') {
        stateColor = 'red';
    }

    const html =
    `<div class="big_card">
        <div class="card_thumbnail">
            <a href="${ link }"><img src="${ thumbnail }" alt="${ alt }"></a>
        </div>
        <div class="card_info">
            <div class='card_info'>
                <h3 class="card_title">${ title }</h3>
                <h4 class="card_sub_title">${ subTitle }</h4>
                ${ tagsHtml } 
                <p class="card_desc">${ desc }</p>
                <p class="project_state" >State: <span style='color:${ stateColor };'>${ state }</span></p>
                <a href="${ link }" class="access_link">${ link }</a>
            </div>
        </div>
    </div>`;
    return html;
}

function pickTagsHtml(tags = Array()) {
    const knownTags = [
        {name: 'HTML', textColor: 'white', bgColor: 'rgb(228, 81, 38)'},
        {name: 'CSS', textColor: 'white', bgColor: 'rgb(48, 170, 221)'},
        {name: 'JavaScript', textColor: 'white', bgColor: 'rgb(228, 162, 40)'},
        {name: 'PHP', textColor: 'white', bgColor: 'rgb(107, 126, 183)'},
        {name: 'GitHub Pages', textColor: 'white', bgColor: 'rgb(0, 0, 0)'},
        {name: 'MySQL', textColor: 'white', bgColor: 'rgb(35, 120, 149)'},
        {name: 'GdScript', textColor: 'white', bgColor: 'rgb(71, 140, 191)'},
        {name: 'C', textColor: 'white', bgColor: 'rgb(92, 106, 192)'},
        {name: 'Bootstrap', textColor: 'white', bgColor: 'rgb(141, 19, 253)'},
    ]

    var picked_tags_result = Array();
    var num_tags = 0;

    knownTags.forEach((tag) => {
        for(var i = 0; i < tags.length; i++) {
            if(tag.name == tags[i]) {
                picked_tags_result.push(tagHTML(tag.name, tag.textColor, tag.bgColor));
            }
        }
    });

    const container = 
    `<div class='tags_container'>
        ${ picked_tags_result.join(' ') }
    </div>`

    return container;
}

function tagHTML(name, textColor, bgColor) {
    const html =
    `<div class="tag" style="color: ${ textColor }; background-color: ${ bgColor };">
        <p>${ name }</p>
    </div>`
    return html;
}