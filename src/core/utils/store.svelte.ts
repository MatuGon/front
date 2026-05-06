class Appstore {
    isdarkmode = $state(false);
    issidebaropen = $state(true);

    toggledarkmode() {
        this.isdarkmode = !this.isdarkmode;
        localStorage.setItem('color-theme', this.isdarkmode.toString());
        window.document.documentElement.classList.toggle('dark', this.isdarkmode);
    }
}
export const appStore = new Appstore();
