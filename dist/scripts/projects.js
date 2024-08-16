var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Navbar from '../models/Components/Navbar.js';
import BigCard from '../models/Components/BigCard.js';
import TagContainer from '../models/Components/TagContainer.js';
import Tag from '../models/Components/Tag.js';
document.addEventListener("DOMContentLoaded", function () {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", false);
    navbar.init();
    fetch('./../json/projects.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () { loadProjetos(data); }));
});
function loadProjetos(projectsDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let tagsDB = yield fetch('./json/tags.json')
            .then((resp) => resp.json())
            .then((data) => data);
        let projMain = document.getElementById('proj_main');
        if (projMain) {
            const projects = projectsDB.projects;
            for (let i = 0; i < projects.length; i++) {
                const node = projects[i];
                const card = new BigCard(node.title, node.desc, node.img_path, node.alt, node.link, node.sub_title, new TagContainer(Tag.makeTagList(node.tags), tagsDB), node.state);
                projMain.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
//# sourceMappingURL=projects.js.map