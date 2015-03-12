$(document).ready(function(){

	var tmp = $('.content_right').height();
	$('.content_checkout').css('min-height', tmp);

	$('.block_buy').click(function(){
		if($(this).hasClass('selected')){
		}else{
			$('.selected').removeClass('selected');
			$(this).addClass('selected');
			$('.price').css('display', 'none');
			$('.'+$(this).attr('id')+'_price').css('display', 'block');
		}
	});

	$('.form .niceCheck').click(function(){
		if($('.form_1').css('display') == 'block'){
			$('.form_1').css('display', 'none');
			$('.content_checkout').css('min-height', $(".content_right").height());
		}else{
			$('.form_1').css('display', 'block');
			$('.content_checkout').css('min-height', $(".content_right").height());
		}
	});

});