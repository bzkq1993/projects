$(document).scroll(function() {
	var curtop = $(document).scrollTop();
//	console.log(curtop); .  gsqa
	if(curtop > 600) {
		$('.topp').css('display','block');
	}
	if(curtop < 600) {
		$('.topp').css('display','none');
	}
});