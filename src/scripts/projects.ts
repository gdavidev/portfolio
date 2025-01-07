import Navbar from '../components/Navbar.js';
import BigCard from '../components/BigCard.js';
import TagContainer from '../components/TagContainer.js';
import Tag from '../components/Tag.js';

document.addEventListener("DOMContentLoaded", function() {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", false);
    navbar.init();

    fetch('./../json/projects.json')
        .then((resp: Response): Promise<any> => resp.json())
        .then(async (data: any): Promise<void> => { loadProjetos(data); });
});

async function loadProjetos(projectsDB: any) {
    let tagsDB: any = await fetch('./../json/tags.json')
        .then((resp) => resp.json())
        .then((data) => data);

    let projMain = document.getElementById('proj_main');
    if (projMain) {
        const projects = projectsDB.projects;
        for (let i = 0; i < projects.length; i++) {
            const node = projects[i];
            const card = new BigCard(
                node.title,
                node.desc,
                "../" + node.img_path,
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