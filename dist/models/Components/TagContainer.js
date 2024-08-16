var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TagContainer_tagsHtml;
import Tag from './Tag.js';
class TagContainer {
    constructor(tags, tagDB) {
        _TagContainer_tagsHtml.set(this, void 0);
        this.tags = tags;
        __classPrivateFieldSet(this, _TagContainer_tagsHtml, "", "f");
        if (tagDB == null) {
            fetch('./json/tags.json')
                .then((resp) => resp.json())
                .then((data) => { this.loadTags(data); });
        }
        else {
            this.loadTags(tagDB);
        }
    }
    loadTags(tagsDB) {
        let tagNames = tagsDB.tags.map((node) => node.name);
        for (let i = 0; i < this.tags.length; i++) {
            let index = tagNames.indexOf(this.tags[i].name);
            let node = tagsDB.tags[index];
            let tag = new Tag(node.name, node.text_color, node.bg_color);
            __classPrivateFieldSet(this, _TagContainer_tagsHtml, __classPrivateFieldGet(this, _TagContainer_tagsHtml, "f") + tag.getHtml(), "f");
        }
        ;
    }
    getHtml() {
        const html = `<div class='tags_container'>
            ${__classPrivateFieldGet(this, _TagContainer_tagsHtml, "f")}
        </div>`;
        return html;
    }
}
_TagContainer_tagsHtml = new WeakMap();
export default TagContainer;
//# sourceMappingURL=TagContainer.js.map