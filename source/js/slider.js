$(function() {
  $('.slider__controls-top').on('click', function (e) {
    e.preventDefault();
    
    var markup = '<a class="newbie">Новая ссылка</a>'
    $('.slider__controls').append(markup);
    
  });
  
  $('.newbie').on('click', function (e) {
    e.preventDefault();

    console.log('dfsfs');
  });
  
}());