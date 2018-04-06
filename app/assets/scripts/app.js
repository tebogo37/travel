import MobileMenu from './modules/MobileMenu';
import RevealScroll from './modules/reveal-on-scroll';
import $ from 'jquery';
import StickyHeader from './modules/Sticky-Header';
import Modal from './modules/modal';



var mobileMenuV = new MobileMenu () ;
new RevealScroll($('.featured-item'),'85%');
new RevealScroll($('.testimonials'), '60%');
var stickyheader = new StickyHeader();
var modal = new Modal();
