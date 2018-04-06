import $ from 'jquery';
import Waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealScroll {
  constructor (elements, offset){
    this.itemToReveal = elements;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();

  }

  hideInitially(){
    this.itemToReveal.addClass("reveal-item")
  }

  createWaypoints(){
    var that = this;
    this.itemToReveal.each(function(){
      var currentItem = this;
        new Waypoints({
          element: currentItem,
          handler: function(){
            $(currentItem).addClass("reveal-item--is-visible");
          },
          offset: that.offsetPercentage
        });
    });
  }
}

export default RevealScroll;
