import $ from 'jquery';
import Waypoints from '../../../node_modules/lib/noframework.Waypoints';

class RevealScroll {
  constructor (){
    this.itemToReveal = (".featured-iteam");
    this.hideInitially();
    this.createWaypoints();

  }

  hideInitially(){
    this.itemToReveal.addClass("reveal-item")
  }

  createWaypoints(){
    this.itemToReveal.each(function(){
      var currentItem = this;
        new Waypoints({
          element: currentItem;
          handler: function(){
            $(currentItem).addClass("reveal-item--is-visible");
          },
          offset: "85%";
        });

    });
  }


}

export default RevealScroll;
