import Tag from './Tag.ts';

export default class TagContainer {
    tags : Tag[];
    #tagsHtml : string

    constructor(tags: Tag[], tagDB?: any) {
        this.tags = tags;        
        this.#tagsHtml = "";        
        if (tagDB == null) {
            fetch('./json/tags.json')
                .then((resp) => resp.json())
                .then((data) => { this.loadTags(data); });
        } else {
            this.loadTags(tagDB);
        }
    }

    loadTags(tagsDB: any): void {
        let tagNames = tagsDB.tags.map((node: any) => node.name);
        for (let i = 0; i < this.tags.length; i++) {
            let index = tagNames.indexOf(this.tags[i].name);
            let node = tagsDB.tags[index];
            let tag = new Tag(
                node.name,
                node.text_color,
                node.bg_color
            );            
            this.#tagsHtml += tag.getHtml();
        };
    }

    getHtml(): string {
        const html =
        `<div class='tags_container'>
            ${ this.#tagsHtml }
        </div>`
        return html;
    }
}