class Tag {
    constructor(name, textColor, bgColor) {
        this.name = name;
        this.textColor = textColor;
        this.bgColor = bgColor;
    }

    getHtml() {
        const html =
            `<div class="tag" style="color: ${ this.textColor }; background-color: ${ this.bgColor };">
                <p>${ this.name }</p>
            </div>`
        return html;
    }
}

function pickTagsHtml(tags = Array()) {
    var picked_tags_result = Array();
    var num_tags = 0;

    knownTags.forEach((tag) => {
        for(var i = 0; i < tags.length; i++) {
            if(tag.name == tags[i]) {
                picked_tags_result.push(tagHTML(tag.name, tag.textColor, tag.bgColor));
            }
        }
    });

    const container = picked_tags_result.join(' ')

    return container;
}