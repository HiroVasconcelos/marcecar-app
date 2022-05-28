class MobileNavbar {
    constructor(mobileMenu, list, link) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.list = document.querySelector(list);
        this.link = document.querySelector(link);
        this.activeClass = "active"
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Hey"));
    } 

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobileMenu",
    ".list",
    ".list li",
);
mobileNavbar.init();

// export default MobileNavbar