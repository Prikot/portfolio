
//(function () {
//    var elems = document.getElementsByTagName("p");
//    
//    for (var i = 0, len = elems.length; i < len; i++) {
//        
//
//    }
//     console.log(document.querySelector("div").innerHTML);
//    
//})();

 
$(document).ready(function () {
	$("#avatar__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr("href"),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});


