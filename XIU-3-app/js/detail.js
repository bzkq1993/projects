var tmpgoodsID = sessionStorage.getItem('tmpGoodID');
var dataJSON = {
	"goodsID": tmpgoodsID,
}

$.ajax({
	type: "GET",
	url: "http://datainfo.duapp.com/shopdata/getGoods.php",
	data: dataJSON,
	dataType: "JSONP",
	success: function(data) {
		//				console.log(typeof data);
		console.log(data);
		$('.oc').html("<img src='" + data[0].goodsListImg + "' />");
		//				console.log(data[0].price);
		$('.obp').html('¥' + data[0].price + '&nbsp;' + data[0].className);
		$('.zhe').html(data[0].discount + '折');
		$('.gm').html(data[0].buynumber + '人购买');
		$('.xq2s').html("<img src='" + data[0].goodsListImg + "' />");
		$('.xq2x').html(data[0].detail);
		var imgArray = JSON.parse(data[0].imgsUrl);
		$('.sp1').html("<img src='" + imgArray[0] + "' />");
		$('.sp2').html("<img src='" + imgArray[1] + "' />");
		$('.sp3').html("<img src='" + imgArray[2] + "' />");
		$('.sp4').html("<img src='" + imgArray[3] + "' />");

	}

});

var mySwiper = new Swiper('.pageCont', {
	pagination: '.paginationCont',
	paginationClickable: true,
	paginationType: 'bullets',
	paginationBulletRender: function(index, className) {
		var tmpArray = ["介绍", "详情", "实拍"];
		var tmpStr = '<span class="' + className + ' cusClass' + '">' + tmpArray[index] + '</span>';
		return tmpStr;
	}
});
//		console.log(mySwiper);

var myBanner = new Swiper('.banner2', {
	pagination: '.pagc',
	paginationClickable: true, //点击分叶器是切换
})

$('.foot').click(function() {
	window.location.href = "footer.html";
})