/*jslint browser: true*/
/*global $, jQuery, alert*/
// ==========================================
// Preloader with percentage by image count
// ==========================================
$(function () {
  'use strict';
  var imgs = [];
  
  $.each($('*'), function () {
  
    var $this = $(this),
      background = $this.css('background-image'),
      img = $this.is('img');
    
    if (background !== 'none') {
      var path = background.replace('url("', '').replace('")', '');
      imgs.push(path);
    }
    
    if (img) {
      var path = $this.attr('src');
      if (path) {
        imgs.push(path);

      }
    }

  });
  
  var currentPercents = 1;
  
  for (var i = 0; i < imgs.length; i++) {
    var image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });
    
    image.on('load', function () {
      setPercents(imgs.length, currentPercents);
      currentPercents++;
    });
  }
  
  function setPercents(total, current) {
    var percents = Math.ceil(current/total*100)
    $('.preloader_percents').text(percents + "%");
    if (percents >= 100) {
      $('.preloader').fadeOut();
    }
  }
  
  
});           





















