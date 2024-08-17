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
import CardProgress from '../models/Components/CardProgress.js';
import RegCard from '../models/Components/RegCard.js';
import BigCard from '../models/Components/BigCard.js';
import TagContainer from '../models/Components/TagContainer.js';
import Tag from '../models/Components/Tag.js';
document.addEventListener("DOMContentLoaded", function () {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", true);
    navbar.init();
    fetch('./dist/json/courses.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () { loadCursos(data); }));
    fetch('./dist/json/projects.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () { loadProjetos(data); }));
    fetch('./dist/json/experience.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () { loadExperiencias(data); }));
});
function loadExperiencias(experienceDB) {
    const exprMain = document.getElementById('expr_main');
    if (exprMain) {
        const main = experienceDB.main;
        for (let i = 0; i < main.length; i++) {
            const node = main[i];
            const card = new RegCard(node.title, node.desc, './dist/' + node.img_path, node.alt, node.link);
            exprMain.innerHTML += card.getHtml();
        }
        ;
    }
}
function loadCursos(coursesDB) {
    const cursosMain = document.getElementById('cursos_main');
    if (cursosMain) {
        const main = coursesDB.main;
        for (let i = 0; i < main.length; i++) {
            const node = main[i];
            const card = new CardProgress(node.title, node.desc, './dist/' + node.img_path, node.alt, node.link, node.progress);
            cursosMain.innerHTML += card.getHtml();
        }
        ;
    }
}
function loadProjetos(projectsDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let tagsDB = yield fetch('./dist/json/tags.json')
            .then((resp) => resp.json())
            .then((data) => data);
        const projMain = document.getElementById('proj_main');
        if (projMain) {
            const projects = projectsDB.projects;
            for (let i = 0; i < projects.length; i++) {
                const node = projects[i];
                const card = new BigCard(node.title, node.desc, './dist/' + node.img_path, node.alt, node.link, node.sub_title, new TagContainer(Tag.makeTagList(node.tags), tagsDB), node.state);
                projMain.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
//# sourceMappingURL=index.js.map