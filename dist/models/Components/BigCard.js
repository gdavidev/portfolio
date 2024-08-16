var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BigCard_instances, _BigCard_getStateColor;
import Card from './Card.js';
class BigCard extends Card {
    constructor(title, desc, img_path, alt, link, sub_title, tagContainer, state) {
        super(title, desc, img_path, alt, link);
        _BigCard_instances.add(this);
        this.sub_title = sub_title;
        this.tags = tagContainer;
        this.state = state;
        this.stateColor = __classPrivateFieldGet(this, _BigCard_instances, "m", _BigCard_getStateColor).call(this);
    }
    ;
    getHtml() {
        const html = `<div class="big_card">
                <div class="card_thumbnail">
                    <a href="${this.link}"><img src="${this.img_path}" alt="${this.alt}"></a>
                </div>
                <div class="card_info">
                    <div class='card_info'>
                        <h3 class="card_title">${this.title}</h3>
                        <h4 class="card_sub_title">${this.sub_title}</h4>
                        ${this.tags.getHtml()}
                        <p class="card_desc">${this.desc}</p>
                        <p class="project_state" >State: <span style='color:${this.stateColor};'>${this.state}</span></p>
                        <a href="${this.link}" class="access_link">${this.link}</a>
                    </div>
                </div>
            </div>`;
        return html;
    }
}
_BigCard_instances = new WeakSet(), _BigCard_getStateColor = function _BigCard_getStateColor() {
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
export default BigCard;
//# sourceMappingURL=BigCard.js.map