import $ from 'jquery';

class mobileMenu {
  constructor() {
    this.siteHeader = $(".site-header")
    this.menuicon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content")
    this.events();
  }

  events(){
    this.menuicon.click(this.toggle_themenu.bind(this));

  }

  toggle_themenu () {
    /*console.log("Hooray -  ");*/
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuicon.toggleClass("site-header__menu-icon--close-x");

  }
}

export default mobileMenu ;
