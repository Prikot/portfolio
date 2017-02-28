/*jslint browser: true*/
/*global $, jQuery, alert*/

(function () {
  'use strict';

  $(window).scroll(function () {
    var  sidebar = $('.blog .blog-menu')
    if(sidebar.length) {
      var
          wScroll = $(window).scrollTop(),
          menu = $('.blog .blog-nav'),
          stickyStart = sidebar.offset().top,
          menuClone = sidebar.clone(),
          fixedSidebar = $('.fixed .left__col');
    }




    changeActiveOnScroll(wScroll);
    
    if (wScroll >= stickyStart) {

      if (!fixedSidebar.find('.blog-menu').length) {
        fixedSidebar.append(menuClone);
        menu.hide();
      }


    } else {
      fixedSidebar.find('.blog-menu').remove();
      menu.show();
    }



  });

  function changeActiveOnScroll(wScroll) {
    var sections = $('.blog-news li');
    $.each(sections, function () {
      var $this = $(this),
        windowMargin = $(window).height() / 2,
        topEdge = $this.offset().top - windowMargin,
        bottomEdge = topEdge + $this.height();
      if (wScroll > topEdge && wScroll < bottomEdge) {
        var index = $this.index();

        $('.blog-nav').each(function () {
          var $this = $(this);
          $this.find('.blog-side__item')
              .eq(index)
              .addClass('active')
              .siblings()
              .removeClass('active');

        });
      }
    });

  }

  var wScroll = $(window).scrollTop();
  changeActiveOnScroll(wScroll);
  
 
  
})();

(function () {
   $(".blog-nav__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr("href"),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
})();

