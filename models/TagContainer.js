import tagsDB from '../json/tags.json' assert { type: "json" };

import Tag from './Tag.js';

export default class TagContainer {
    constructor(tags) {
        this.tags = tags;
        this.tagsHtml = "";
        this.tagNames = tagsDB.tags.map((o) => o.name);
        
        for (let i = 0; i < this.tags.length; i++) {
            var index = this.tagNames.indexOf(this.tags[i]);
            const element = tagsDB.tags[index];
            const tag = new Tag(
                element.name,
                element.text_color,
                element.bg_color
            );
            
            this.tagsHtml += tag.getHtml();
        };
    }

    getHtml() {
        const html =
        `<div class='tags_container'>
            ${ this.tagsHtml }
        </div>`
        return html;
    }
}