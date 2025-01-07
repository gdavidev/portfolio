import Navbar from '../components/Navbar.js';

document.addEventListener("DOMContentLoaded", function() {
    const navbar = new Navbar("#menu", "#menu_bt", "#menu_ul", false);
    navbar.init();
});