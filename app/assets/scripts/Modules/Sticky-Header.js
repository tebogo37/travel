import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor (){
    this.lazyimages = $("lazyload");
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large_hero__titile");
    this.createHeaderWaypoints ();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints ();
    this.addSmoothScrolling ();
    this.refreshWaypoints();
  }

  refreshWaypoints(){
    this.lazyImages.on('load',function(){
        Waypoint.refreshAll();
    });

  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoints (){

    var that = this;
    new Waypoints ({
      element: this.headerTrigger[0] ,
      handler : function (){
        if(direction == "down"){
            that.siteHeader.addClass("site-header--dark");
        }else{
            that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints(){
    var that =this;
    this.pageSections.each(function(){
      new Waypoint({
        element: currentPageSection,
        handler : function(direction){
          if(direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-maching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "20%"
        });

        new Waypoint({
          element: currentPageSection,
          handler : function(direction){
            if(direction == "up"){
              var matchingHeaderLink = currentPageSection.getAttribute("data-maching-link");
              that.headerLinks.removeClass("is-current-link");
              $(matchingHeaderLink).addClass("is-current-link");
            }
          },
          offset: "-40%"
          });
        })
      }
  }


export default StickyHeader;
