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
var _Navbar_activeClass;
class Navbar {
    constructor(parent, menu, navList, scrollEffect) {
        _Navbar_activeClass.set(this, void 0);
        this.parent = document.querySelector(parent);
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.scrollEffect = scrollEffect;
        __classPrivateFieldSet(this, _Navbar_activeClass, 'active', "f");
        this.handleClick = this.handleClick.bind(this);
        this.allowTransition = this.allowTransition.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    handleClick() {
        if (this.navList === null)
            return;
        this.navList.classList.toggle(__classPrivateFieldGet(this, _Navbar_activeClass, "f"));
    }
    allowTransition() {
        if (this.navList === null)
            return;
        this.navList.classList.remove(__classPrivateFieldGet(this, _Navbar_activeClass, "f"));
        this.navList.classList.remove("can_transition");
        setTimeout(() => {
            if (this.navList === null)
                return;
            this.navList.classList.add("can_transition");
        }, 100);
    }
    init() {
        if (this.menu) {
            this.menu.addEventListener('click', this.handleClick);
            window.addEventListener('resize', this.allowTransition);
            if (this.scrollEffect === true) {
                document.addEventListener('scroll', this.onScroll);
            }
        }
    }
    onScroll() {
        if (this.parent === null)
            return;
        if (window.scrollY > 100) {
            this.parent.classList.add('header_scrolled');
        }
        else {
            this.parent.classList.remove('header_scrolled');
        }
    }
}
_Navbar_activeClass = new WeakMap();
export default Navbar;
//# sourceMappingURL=Navbar.js.map