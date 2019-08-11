 $(function(){
 	vitricuaedu = $('#khoiedu').offset().top ;
 	


 	$('.xuong,.kn').click(function(event) {
 		$('body,html').animate({scrollTop:vitricuaedu},600)
 	});
})  
 