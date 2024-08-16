export default class Navbar {
    parent: Element | null;
    menu: Element | null;
    navList: Element | null;
    scrollEffect : boolean;
    #activeClass : string;

    constructor(parent : string, menu : string, navList : string, scrollEffect: boolean) {
        this.parent = document.querySelector(parent);
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.scrollEffect = scrollEffect;
        this.#activeClass = 'active';

        this.handleClick = this.handleClick.bind(this); //Mantêm a referencia do this quando usado em um callback na classe
        this.allowTransition = this.allowTransition.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    
    handleClick() {
        if (this.navList === null) return;
        this.navList.classList.toggle(this.#activeClass);
    }

    allowTransition() {
        if (this.navList === null) return;
        this.navList.classList.remove(this.#activeClass);
        this.navList.classList.remove("can_transition");
        setTimeout(() => {
            if (this.navList === null) return;
            this.navList.classList.add("can_transition");
        }, 100);
        
    }

    init() {
        if(this.menu) {
            this.menu.addEventListener('click', this.handleClick);
            window.addEventListener('resize', this.allowTransition);
            if(this.scrollEffect === true) {
                document.addEventListener('scroll', this.onScroll);
            }
        }
    }

    onScroll() {
        if (this.parent === null) return;
        if (window.scrollY > 100) {
            this.parent.classList.add('header_scrolled');
        } else {
            this.parent.classList.remove('header_scrolled');
        }
      }
}


