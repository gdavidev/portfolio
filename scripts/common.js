class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';

        this.handleClick = this.handleClick.bind(this); //Mantêm a referencia do this quando usado em um callback na classe
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }
    
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    "#menu_bt",
    "#menu_ul",
    "#menu_ul li"
);
mobileNavbar.init();


