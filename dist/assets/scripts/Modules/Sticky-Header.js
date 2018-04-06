import $ from 'jquery';
import waypoints from '../../../node_modules/lib/noframework.Waypoints';

class StickyHeader {
  constructor (){
    this.siteHeader = $(".site-header");
    this,headerTrigger = $(".large_hero__titile");
    this.createHeaderWaypoints ();
  }

  createHeaderWaypoints (){
    
    var that = this;
    new Waypoints ({
      element:this.headerTrigger[0] , ;
      handler : function (direction){
        that.siteHeader.addClass("site-header--dark");
      }
    });
  }

}

export default StickyHeader;
