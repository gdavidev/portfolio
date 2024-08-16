import Navbar from '../models/Components/Navbar.js';
import CardProgress from '../models/Components/CardProgress.js';
import RegCard from '../models/Components/RegCard.js';

document.addEventListener("DOMContentLoaded", function() {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", false);
    navbar.init();
    
    fetch('./../json/courses.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => {
            loadCursosMain(data);
            loadCursosExtr(data);
            loadCursosOutro(data);
        });

    fetch('./../json/experience.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => { 
            loadExperienciasAdcio(data);
        });    
});

async function loadCursosMain(coursesDB: any) {
    let cursosMain = document.getElementById('cursos_main');
    if (cursosMain) {
        const principal = coursesDB.principal;
        for (let i = 0; i < principal.length; i++) {
            const node = principal[i];
            const card = new CardProgress(
                node.title,
                node.desc,
                "../" + node.img_path,
                node.alt,
                node.link,
                node.progress
            );            
            cursosMain.innerHTML += card.getHtml();
        };
    }
}

async function loadCursosExtr(coursesDB: any) {
    let cursosExtr = document.getElementById('cursos_extr');
    if (cursosExtr) {
        const courses = coursesDB.courses;
        for (let i = 0; i < courses.length; i++) {
            const node = courses[i];
            const card = new CardProgress(
                node.title,
                node.desc,
                "../" + node.img_path,
                node.alt,
                node.link,
                node.progress
            );
            cursosExtr.innerHTML += card.getHtml();
        };
    }
}

async function loadCursosOutro(coursesDB: any) {
    let outrosCursos = document.getElementById('outros_cursos');
    if (outrosCursos) {
        const other = coursesDB.other;
        for (let i = 0; i < other.length; i++) {
            const node = other[i];
            const card = new CardProgress(
                node.title,
                node.desc,
                "../" + node.img_path,
                node.alt,
                node.link,
                node.progress
            );
            outrosCursos.innerHTML += card.getHtml();
        };
    }
}

async function loadExperienciasAdcio(experienceDB: any) {
    let experiencias = document.getElementById('experiencias');
    if (experiencias) {
        const other_exp = experienceDB.other;
        for (let i = 0; i < other_exp.length; i++) {
            const node = other_exp[i];
            const card = new RegCard(
                node.title,
                node.desc,
                "../" + node.img_path,
                node.alt,
                node.link,
            );
            experiencias.innerHTML += card.getHtml();
        };
    }
}