$(function(){
	$('.change').load('index.html');
	
	$('#classify').click(function(){
		$('.fItem').removeClass('ai');
		var index = $(this).index();
		$('.fItem').eq(index).addClass('ai');
		$('.change').load('classify.html');
	});
	
	$('#home').click(function(){
		$('.fItem').removeClass('ai');
		var index = $(this).index();
		$('.fItem').eq(index).addClass('ai');
		$('.change').load('index.html');
	});
	
	$('#cart').click(function(){
		$('.fItem').removeClass('ai');
		var index = $(this).index();
		$('.fItem').eq(index).addClass('ai');
		$('.change').load('cart.html');
	});
	
	$('#myX').click(function(){
		$('.fItem').removeClass('ai');
		var index = $(this).index();
		$('.fItem').eq(index).addClass('ai');
		$('.change').load('meXIU.html');
	});
	
	$('#more').click(function(){
		$('.fItem').removeClass('ai');
		var index = $(this).index();
		$('.fItem').eq(index).addClass('ai');
		$('.change').load('more.html');
	});
	
	
})
