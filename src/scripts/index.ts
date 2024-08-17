import Navbar from '../models/Components/Navbar.js';
import CardProgress from '../models/Components/CardProgress.js';
import RegCard from '../models/Components/RegCard.js';
import BigCard from '../models/Components/BigCard.js';
import TagContainer from '../models/Components/TagContainer.js';
import Tag from '../models/Components/Tag.js';

document.addEventListener("DOMContentLoaded", function() {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", true);
    navbar.init();

    fetch('./dist/json/courses.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => { loadCursos(data); });

    fetch('./dist/json/projects.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => { loadProjetos(data); });

    fetch('./dist/json/experience.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => { loadExperiencias(data); });
});

function loadExperiencias(experienceDB: any) {
    const exprMain = document.getElementById('expr_main');
    if (exprMain) {
            const main = experienceDB.main;
            for (let i = 0; i < main.length; i++) {
                const node = main[i];
                const card = new RegCard(
                    node.title,
                    node.desc,
                    './dist/' + node.img_path,
                    node.alt,
                    node.link,
                );           
            exprMain.innerHTML += card.getHtml();
        };
    }
}

function loadCursos(coursesDB: any) {
    const cursosMain = document.getElementById('cursos_main');
    if (cursosMain) {
            const main = coursesDB.main;
            for (let i = 0; i < main.length; i++) {
                const node = main[i];
                const card = new CardProgress(
                    node.title,
                    node.desc,
                    './dist/' + node.img_path,
                    node.alt,
                    node.link,
                    node.progress
                );            
            cursosMain.innerHTML += card.getHtml();
        };
    }
}

async function loadProjetos(projectsDB: any) {
    let tagsDB: any = await fetch('./dist/json/tags.json')
        .then((resp) => resp.json())
        .then((data) => data);

    const projMain = document.getElementById('proj_main');
    if (projMain) {
        const projects = projectsDB.projects;
        for (let i = 0; i < projects.length; i++) {
            const node = projects[i];
            const card = new BigCard(
                node.title,
                node.desc,
                './dist/' + node.img_path,
                node.alt,
                node.link,
                node.sub_title,
                new TagContainer(Tag.makeTagList(node.tags), tagsDB),
                node.state
            );            
            projMain.innerHTML += card.getHtml();
        };  
    }
}

