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
document.addEventListener("DOMContentLoaded", function () {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", false);
    navbar.init();
    fetch('./../json/courses.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () {
        loadCursosMain(data);
        loadCursosExtr(data);
        loadCursosOutro(data);
    }));
    fetch('./../json/experience.json')
        .then((resp) => resp.json())
        .then((data) => __awaiter(this, void 0, void 0, function* () {
        loadExperienciasAdcio(data);
    }));
});
function loadCursosMain(coursesDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let cursosMain = document.getElementById('cursos_main');
        if (cursosMain) {
            const principal = coursesDB.principal;
            for (let i = 0; i < principal.length; i++) {
                const node = principal[i];
                const card = new CardProgress(node.title, node.desc, "../" + node.img_path, node.alt, node.link, node.progress);
                cursosMain.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
function loadCursosExtr(coursesDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let cursosExtr = document.getElementById('cursos_extr');
        if (cursosExtr) {
            const courses = coursesDB.courses;
            for (let i = 0; i < courses.length; i++) {
                const node = courses[i];
                const card = new CardProgress(node.title, node.desc, "../" + node.img_path, node.alt, node.link, node.progress);
                cursosExtr.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
function loadCursosOutro(coursesDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let outrosCursos = document.getElementById('outros_cursos');
        if (outrosCursos) {
            const other = coursesDB.other;
            for (let i = 0; i < other.length; i++) {
                const node = other[i];
                const card = new CardProgress(node.title, node.desc, "../" + node.img_path, node.alt, node.link, node.progress);
                outrosCursos.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
function loadExperienciasAdcio(experienceDB) {
    return __awaiter(this, void 0, void 0, function* () {
        let experiencias = document.getElementById('experiencias');
        if (experiencias) {
            const other_exp = experienceDB.other;
            for (let i = 0; i < other_exp.length; i++) {
                const node = other_exp[i];
                const card = new RegCard(node.title, node.desc, "../" + node.img_path, node.alt, node.link);
                experiencias.innerHTML += card.getHtml();
            }
            ;
        }
    });
}
//# sourceMappingURL=formation.js.map